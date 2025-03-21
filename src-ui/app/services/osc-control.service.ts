import { Injectable } from '@angular/core';
import { OscService } from './osc.service';
import { OSCBoolValue, OSCIntValue, OSCMessage } from '../models/osc-message';
import { SleepService } from './sleep.service';
import { OpenVRService } from './openvr.service';
import {
  combineLatest,
  debounceTime,
  distinctUntilChanged,
  firstValueFrom,
  map,
  startWith,
  Subject,
  tap,
} from 'rxjs';
import { AutomationConfigService } from './automation-config.service';
import { info } from 'tauri-plugin-log-api';
import { LighthouseConsoleService } from './lighthouse-console.service';
import { EventLogTurnedOffOpenVRDevices } from '../models/event-log-entry';
import { EventLogService } from './event-log.service';
import { AppSettingsService } from './app-settings.service';
import { APP_SETTINGS_DEFAULT, AppSettings } from '../models/settings';
import { cloneDeep } from 'lodash';

const ADDRESS_CMD = '/Oyasumi/Cmd';
const ADDRESS_SLEEP_MODE = '/Oyasumi/SleepMode';
const ADDRESS_SLEEPING_ANIMATIONS = '/Oyasumi/SleepingAnimations';
const ADDRESS_STATUS_AUTOMATIONS = '/Oyasumi/StatusAutomations';
const ADDRESS_AUTO_ACCEPT_INVITE_REQUESTS = '/Oyasumi/AutoAcceptInviteRequests';
const ADDRESS_SLEEP_DETECTION = '/Oyasumi/SleepDetection';

@Injectable({
  providedIn: 'root',
})
export class OscControlService {
  private sleepingAnimations = false;
  private statusAutomations = false;
  private sleepMode = false;
  private autoAcceptInviteRequests = false;
  private sleepDetection = false;

  private syncParameters: Subject<void> = new Subject<void>();
  private settings: AppSettings = cloneDeep(APP_SETTINGS_DEFAULT);

  constructor(
    private osc: OscService,
    private sleep: SleepService,
    private openvr: OpenVRService,
    private automationConfig: AutomationConfigService,
    private lighthouse: LighthouseConsoleService,
    private eventLog: EventLogService,
    private appSettings: AppSettingsService
  ) {}

  async init() {
    this.appSettings.settings.subscribe((settings) => (this.settings = settings));
    this.osc.messages.subscribe((message) => {
      this.handleOSCMessage(message);
    });
    await this.setupParameterSync();
  }

  async setupParameterSync() {
    combineLatest([
      this.sleep.mode,
      this.automationConfig.configs.pipe(
        map((configs) => configs.SLEEPING_ANIMATIONS.enabled),
        distinctUntilChanged()
      ),
      this.automationConfig.configs.pipe(
        map((configs) => configs.CHANGE_STATUS_BASED_ON_PLAYER_COUNT.enabled),
        distinctUntilChanged()
      ),
      this.automationConfig.configs.pipe(
        map((configs) => configs.AUTO_ACCEPT_INVITE_REQUESTS.enabled),
        distinctUntilChanged()
      ),
      this.automationConfig.configs.pipe(
        map((configs) => configs.SLEEP_MODE_ENABLE_FOR_SLEEP_DETECTOR.enabled),
        distinctUntilChanged()
      ),
      this.syncParameters.pipe(startWith(undefined)),
    ])
      .pipe(
        tap(
          ([
            sleepMode,
            sleepingAnimations,
            statusAutomations,
            autoAcceptInviteRequests,
            sleepDetection,
          ]) => {
            this.sleepMode = sleepMode;
            this.sleepingAnimations = sleepingAnimations;
            this.statusAutomations = statusAutomations;
            this.autoAcceptInviteRequests = autoAcceptInviteRequests;
            this.sleepDetection = sleepDetection;
          }
        ),
        debounceTime(0)
      )
      .subscribe(() => {
        if (this.settings.oscEnableExternalControl) this.runParameterSync();
        if (this.settings.oscEnableExpressionMenu) this.runParameterSync('/avatar/parameters');
      });
  }

  private runParameterSync(prefix = ''): void {
    this.osc.send_bool(prefix + ADDRESS_SLEEP_MODE, this.sleepMode);
    this.osc.send_bool(prefix + ADDRESS_SLEEPING_ANIMATIONS, this.sleepingAnimations);
    this.osc.send_bool(prefix + ADDRESS_STATUS_AUTOMATIONS, this.statusAutomations);
    this.osc.send_bool(prefix + ADDRESS_AUTO_ACCEPT_INVITE_REQUESTS, this.autoAcceptInviteRequests);
    this.osc.send_bool(prefix + ADDRESS_SLEEP_DETECTION, this.sleepDetection);
  }

  private async handleOSCMessage(message: OSCMessage) {
    // Attempt to determine the mode of the message (if any)
    const mode: 'EXPRESSION_MENU' | 'OSC_CONTROL' | null = (() => {
      if (message.address.startsWith('/avatar/parameters/')) return 'EXPRESSION_MENU';
      if (message.address.startsWith('/Oyasumi/')) return 'OSC_CONTROL';
      return null;
    })();
    // Block certain modes when they are disabled
    switch (mode) {
      case 'EXPRESSION_MENU':
        if (!this.settings.oscEnableExpressionMenu) return;
        break;
      case 'OSC_CONTROL':
        if (!this.settings.oscEnableExternalControl) return;
        break;
    }
    // Strip the prefix from the address if needed
    let address = message.address;
    if (mode === 'EXPRESSION_MENU') address = message.address.replace('/avatar/parameters', '');
    // Handle the message
    switch (address) {
      case '/avatar/change':
        this.syncParameters.next();
        break;
      case ADDRESS_CMD: {
        const { value } = message.values[0] as OSCIntValue;
        await this.handleCommand(value);
        break;
      }
      case ADDRESS_SLEEP_MODE: {
        const { value: enable } = message.values[0] as OSCBoolValue;
        if (this.sleepMode === enable) return;
        if (enable) {
          info('[OSCControl] Activating sleep mode');
          await this.sleep.enableSleepMode({ type: 'OSC_CONTROL' });
        } else {
          info('[OSCControl] Deactivating sleep mode');
          await this.sleep.disableSleepMode({ type: 'OSC_CONTROL' });
        }
        break;
      }
      case ADDRESS_SLEEPING_ANIMATIONS: {
        const { value: enable } = message.values[0] as OSCBoolValue;
        if (this.sleepingAnimations === enable) return;
        if (enable) info('[OSCControl] Enabling sleeping animation automations');
        else info('[OSCControl] Disabling sleeping animation automations');
        await this.automationConfig.updateAutomationConfig('SLEEPING_ANIMATIONS', {
          enabled: enable,
        });
        break;
      }
      case ADDRESS_STATUS_AUTOMATIONS: {
        const { value: enable } = message.values[0] as OSCBoolValue;
        if (this.statusAutomations === enable) return;
        if (enable) info('[OSCControl] Enabling status automations');
        else info('[OSCControl] Disabling status automations');
        await this.automationConfig.updateAutomationConfig('CHANGE_STATUS_BASED_ON_PLAYER_COUNT', {
          enabled: enable,
        });
        break;
      }
      case ADDRESS_AUTO_ACCEPT_INVITE_REQUESTS: {
        const { value: enable } = message.values[0] as OSCBoolValue;
        if (this.autoAcceptInviteRequests === enable) return;
        if (enable) info('[OSCControl] Enabling automatic invite request acceptance');
        else info('[OSCControl] Disabling automatic invite request acceptance');
        await this.automationConfig.updateAutomationConfig('AUTO_ACCEPT_INVITE_REQUESTS', {
          enabled: enable,
        });
        break;
      }
      case ADDRESS_SLEEP_DETECTION: {
        const { value: enable } = message.values[0] as OSCBoolValue;
        if (this.sleepDetection === enable) return;
        if (enable) info('[OSCControl] Enabling sleep detection');
        else info('[OSCControl] Disabling sleep detection');
        await this.automationConfig.updateAutomationConfig('SLEEP_MODE_ENABLE_FOR_SLEEP_DETECTOR', {
          enabled: enable,
        });
        break;
      }
    }
  }

  private async handleCommand(command: number) {
    switch (command) {
      case 1: // Initialize
        this.syncParameters.next();
        await this.osc.send_int(ADDRESS_CMD, 0);
        break;
      case 2: {
        // All Trackers
        const devices = (await firstValueFrom(this.openvr.devices)).filter(
          (d) => d.class === 'GenericTracker'
        );
        await this.lighthouse.turnOffDevices(devices);
        this.eventLog.logEvent({
          type: 'turnedOffOpenVRDevices',
          reason: 'OSC_CONTROL',
          devices: devices.length > 1 ? 'TRACKERS' : 'TRACKER',
        } as EventLogTurnedOffOpenVRDevices);
        break;
      }
      case 3: {
        // All Controllers
        setTimeout(async () => {
          const devices = (await firstValueFrom(this.openvr.devices)).filter(
            (d) => d.class === 'Controller'
          );
          await this.lighthouse.turnOffDevices(devices);
          this.eventLog.logEvent({
            type: 'turnedOffOpenVRDevices',
            reason: 'OSC_CONTROL',
            devices: devices.length > 1 ? 'CONTROLLERS' : 'CONTROLLER',
          } as EventLogTurnedOffOpenVRDevices);
        }, 2000);
        break;
      }
      case 4: {
        // All Devices
        setTimeout(async () => {
          await this.lighthouse.turnOffDevices(await firstValueFrom(this.openvr.devices));
          this.eventLog.logEvent({
            type: 'turnedOffOpenVRDevices',
            reason: 'OSC_CONTROL',
            devices: 'ALL',
          } as EventLogTurnedOffOpenVRDevices);
        }, 2000);
        break;
      }
    }
  }
}
