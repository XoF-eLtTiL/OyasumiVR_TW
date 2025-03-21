import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, registerLocaleData } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemeService } from './services/theme.service';
import { DashboardViewComponent } from './views/dashboard-view/dashboard-view.component';
import { SettingsViewComponent } from './views/dashboard-view/views/settings-view/settings-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VarDirective } from './directives/var.directive';
import { AboutViewComponent } from './views/dashboard-view/views/about-view/about-view.component';
import { TranslateCompiler, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { OverviewViewComponent } from './views/dashboard-view/views/overview-view/overview-view.component';
import { SleepDetectionViewComponent } from './views/dashboard-view/views/sleep-detection-view/sleep-detection-view.component';
import { TimeEnableSleepModeModalComponent } from './views/dashboard-view/views/sleep-detection-view/time-enable-sleepmode-modal/time-enable-sleep-mode-modal.component';
import { TimeDisableSleepModeModalComponent } from './views/dashboard-view/views/sleep-detection-view/time-disable-sleepmode-modal/time-disable-sleep-mode-modal.component';
import { BatteryPercentageEnableSleepModeModalComponent } from './views/dashboard-view/views/sleep-detection-view/battery-percentage-enable-sleepmode-modal/battery-percentage-enable-sleep-mode-modal.component';
import { DevicePowerOnDisableSleepModeModalComponent } from './views/dashboard-view/views/sleep-detection-view/device-poweron-disable-sleepmode-modal/device-power-on-disable-sleep-mode-modal.component';
import { SleepModeEnableOnControllersPoweredOffAutomationService } from './services/sleep-detection-automations/sleep-mode-enable-on-controllers-powered-off-automation.service';
import { SleepModeEnableAtBatteryPercentageAutomationService } from './services/sleep-detection-automations/sleep-mode-enable-at-battery-percentage-automation.service';
import { SleepModeEnableAtTimeAutomationService } from './services/sleep-detection-automations/sleep-mode-enable-at-time-automation.service';
import { SleepModeDisableAtTimeAutomationService } from './services/sleep-detection-automations/sleep-mode-disable-at-time-automation.service';
import { SleepModeDisableOnDevicePowerOnAutomationService } from './services/sleep-detection-automations/sleep-mode-disable-on-device-power-on-automation.service';
import { NvmlService } from './services/nvml.service';
import { OpenVRService } from './services/openvr.service';
import { GpuAutomationsViewComponent } from './views/dashboard-view/views/gpu-automations-view/gpu-automations-view.component';
import { SleepService } from './services/sleep.service';
import { GpuAutomationsService } from './services/gpu-automations.service';
import { PowerLimitInputComponent } from './views/dashboard-view/views/gpu-automations-view/power-limit-input/power-limit-input.component';
import { NgPipesModule } from 'ngx-pipes';
import { SleepingPoseViewerComponent } from './components/sleeping-pose-viewer/sleeping-pose-viewer.component';
import { OscService } from './services/osc.service';
import { OscAutomationsViewComponent } from './views/dashboard-view/views/osc-automations-view/osc-automations-view.component';
import { SelectBoxComponent } from './components/select-box/select-box.component';
import { TStringTranslatePipe } from './pipes/tstring-translate.pipe';
import { OscScriptButtonComponent } from './components/osc-script-button/osc-script-button.component';
import { OscScriptModalComponent } from './components/osc-script-modal/osc-script-modal.component';
import { OscScriptCodeEditorComponent } from './components/osc-script-code-editor/osc-script-code-editor.component';
import { DropdownButtonComponent } from './components/dropdown-button/dropdown-button.component';
import { OscScriptSimpleEditorComponent } from './components/osc-script-simple-editor/osc-script-simple-editor.component';
import { DashboardNavbarComponent } from './components/dashboard-navbar/dashboard-navbar.component';
import { DeviceListComponent } from './components/device-list/device-list.component';
import { DeviceListItemComponent } from './components/device-list/device-list-item/device-list-item.component';
import { SleepingAnimationsAutomationService } from './services/osc-automations/sleeping-animations-automation.service';
import { ElevatedSidecarService } from './services/elevated-sidecar.service';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import { UpdateService } from './services/update.service';
import { UpdateModalComponent } from './components/update-modal/update-modal.component';
import { TelemetryService } from './services/telemetry.service';
import { LanguageSelectModalComponent } from './components/language-select-modal/language-select-modal.component';
import { AppSettingsService } from './services/app-settings.service';
import { firstValueFrom } from 'rxjs';
import { VRChatService } from './services/vrchat.service';
import { SettingsGeneralTabComponent } from './views/dashboard-view/views/settings-view/settings-general-tab/settings-general-tab.component';
import { SettingsUpdatesTabComponent } from './views/dashboard-view/views/settings-view/settings-updates-tab/settings-updates-tab.component';
import { SettingsAdvancedTabComponent } from './views/dashboard-view/views/settings-view/settings-advanced-tab/settings-advanced-tab.component';
import { SettingsVRChatTabComponent } from './views/dashboard-view/views/settings-view/settings-vrchat-tab/settings-vrchat-tab.component';
import { VRChatLoginModalComponent } from './components/vrchat-login-modal/vrchat-login-modal.component';
import { VRChatLoginTFAModalComponent } from './components/vrchat-login-tfa-modal/vrchat-login-tfa-modal.component';
import { StatusAutomationsViewComponent } from './views/dashboard-view/views/status-automations-view/status-automations-view.component';
import { SleepingAnimationPresetModalComponent } from './components/sleeping-animation-preset-modal/sleeping-animation-preset-modal.component';
import { VRChatLogService } from './services/vrchat-log.service';
import { StatusChangeForPlayerCountAutomationService } from './services/status-automations/status-change-for-player-count-automation.service';
import { MainStatusBarComponent } from './components/main-status-bar/main-status-bar.component';
import { OscControlService } from './services/osc-control.service';
import { AutoInviteRequestAcceptViewComponent } from './views/dashboard-view/views/auto-invite-request-accept-view/auto-invite-request-accept-view.component';
import { FriendSelectionModalComponent } from './components/friend-selection-modal/friend-selection-modal.component';
import { CachedValue } from './utils/cached-value';
import { ImageCacheService } from './services/image-cache.service';
import { ImageCachePipe } from './pipes/image-cache.pipe';
import { InviteAutomationsService } from './services/invite-automations.service';
import { GpuPowerlimitingPaneComponent } from './views/dashboard-view/views/gpu-automations-view/gpu-powerlimiting-pane/gpu-powerlimiting-pane.component';
import { MsiAfterburnerPaneComponent } from './views/dashboard-view/views/gpu-automations-view/msi-afterburner-pane/msi-afterburner-pane.component';
import { invoke } from '@tauri-apps/api';
import { SleepModeChangeOnSteamVRStatusAutomationService } from './services/sleep-detection-automations/sleep-mode-change-on-steamvr-status-automation.service';
import { ImageFallbackDirective } from './directives/image-fallback.directive';
import { SleepModeForSleepDetectorAutomationService } from './services/sleep-detection-automations/sleep-mode-for-sleep-detector-automation.service';
import { SleepDetectorCalibrationModalComponent } from './views/dashboard-view/views/sleep-detection-view/sleep-detector-calibration-modal/sleep-detector-calibration-modal.component';
import { SleepDetectorEnableSleepModeModalComponent } from './views/dashboard-view/views/sleep-detection-view/sleep-detector-enable-sleepmode-modal/sleep-detector-enable-sleep-mode-modal.component';
import { SettingsNotificationsTabComponent } from './views/dashboard-view/views/settings-view/settings-notifications-tab/settings-notifications-tab.component';
import { DisplayBrightnessControlService } from './services/brightness-control/display-brightness-control.service';
import { BrightnessAutomationsViewComponent } from './views/dashboard-view/views/brightness-automations-view/brightness-automations-view.component';
import { SliderSettingComponent } from './components/slider-setting/slider-setting.component';
import { SliderComponent } from './components/slider/slider.component';
import { EventLogService } from './services/event-log.service';
import { debug, error, info } from 'tauri-plugin-log-api';
import { EventLogComponent } from './components/event-log/event-log.component';
import { EventLogEntryComponent } from './components/event-log-entry/event-log-entry.component';
import { LocalizedDatePipe } from './pipes/localized-date.pipe';
import localeEN from '@angular/common/locales/en';
import localeFR from '@angular/common/locales/fr';
import localeJP from '@angular/common/locales/ja';
import localeNL from '@angular/common/locales/nl';
import localeCN_TW from '@angular/common/locales/zh';
import localeKO from '@angular/common/locales/ko';
import localeES from '@angular/common/locales/es';
import localeID from '@angular/common/locales/id';
import { ResolutionAutomationsViewComponent } from './views/dashboard-view/views/resolution-automations-view/resolution-automations-view.component';
import { RenderResolutionAutomationService } from './services/render-resolution-automation.service';
import { ChaperoneFadeDistanceAutomationService } from './services/fade-distance-automation.service';
import { OscGeneralAutomationsService } from './services/osc-automations/osc-general-automations.service';
import { SystemTrayService } from './services/system-tray.service';
import pMinDelay from 'p-min-delay';
import { SPLASH_MIN_DURATION } from './globals';
import { ModalService } from './services/modal.service';
import { BaseModalComponent } from './components/base-modal/base-modal.component';
import { SleepAnimationsViewComponent } from './views/dashboard-view/views/sleep-animations-view/sleep-animations-view.component';
import { ImgSmoothLoaderDirective } from './directives/img-smooth-loader.directive';
import { SettingsTabComponent } from './views/dashboard-view/views/settings-view/settings-tab/settings-tab.component';
import { LighthouseService } from './services/lighthouse.service';
import { ChaperoneAutomationsViewComponent } from './views/dashboard-view/views/chaperone-automations-view/chaperone-automations-view.component';
import { PowerAutomationsViewComponent } from './views/dashboard-view/views/power-automations-view/power-automations-view.component';
import { ControllersAndTrackersTabComponent } from './views/dashboard-view/views/power-automations-view/tabs/controllers-and-trackers-tab/controllers-and-trackers-tab.component';
import { BaseStationsTabComponent } from './views/dashboard-view/views/power-automations-view/tabs/base-stations-tab/base-stations-tab.component';
import { TurnOffDevicesOnSleepModeEnableAutomationService } from './services/power-automations/turn-off-devices-on-sleep-mode-enable-automation.service';
import { TurnOffDevicesWhenChargingAutomationService } from './services/power-automations/turn-off-devices-when-charging-automation.service';
import { TurnOnLighthousesOnOyasumiStartAutomationService } from './services/power-automations/turn-on-lighthouses-on-oyasumi-start-automation.service';
import { TurnOnLighthousesOnSteamVRStartAutomationService } from './services/power-automations/turn-on-lighthouses-on-steamvr-start-automation.service';
import { TurnOffLighthousesOnSteamVRStopAutomationService } from './services/power-automations/turn-off-lighthouses-on-steamvr-stop-automation.service';
import { ShutdownAutomationsViewComponent } from './views/dashboard-view/views/shutdown-automations-view/shutdown-automations-view.component';
import { ShutdownAutomationsService } from './services/shutdown-automations.service';
import { ShutdownSequenceOverlayComponent } from './components/shutdown-sequence-overlay/shutdown-sequence-overlay.component';
import { ImageBrightnessControlService } from './services/brightness-control/image-brightness-control.service';
import { BrightnessControlAutomationService } from './services/brightness-control/brightness-control-automation.service';
import { DeveloperDebugModalComponent } from './components/developer-debug-modal/developer-debug-modal.component';
import { DeveloperDebugService } from './services/developer-debug/developer-debug.service';
import { MomentModule } from 'ngx-moment';
import { OverlayStateSyncService } from './services/overlay/overlay-state-sync.service';
import { IPCService } from './services/ipc.service';
import { AutomationConfigService } from './services/automation-config.service';
import { FontLoaderService } from './services/font-loader.service';
import { NotificationService } from './services/notification.service';
import { WindowsPowerPolicyTabComponent } from './views/dashboard-view/views/power-automations-view/tabs/windows-power-policy-tab/windows-power-policy-tab.component';
import { SetWindowsPowerPolicyOnSleepModeAutomationService } from './services/power-automations/set-windows-power-policy-on-sleep-mode-automation.service';
import { SteamService } from './services/steam.service';
import { BrightnessAutomationsTabComponent } from './views/dashboard-view/views/brightness-automations-view/tabs/brightness-automations-tab/brightness-automations-tab.component';
import { TooltipDirective } from './directives/tooltip.directive';
import { SimpleBrightnessControlService } from './services/brightness-control/simple-brightness-control.service';
import { DebugSleepDetectionDebuggerComponent } from './components/developer-debug-modal/debug-sleep-detection-debugger/debug-sleep-detection-debugger.component';
import { DebugBrightnessTestingComponent } from './components/developer-debug-modal/debug-brightness-testing/debug-brightness-testing.component';
import { BrightnessControlModalComponent } from './components/brightness-control-modal/brightness-control-modal.component';
import { BrightnessControlSliderComponent } from './components/brightness-control-modal/brightness-control-slider/brightness-control-slider.component';
import { TranslateMessageFormatCompiler } from 'ngx-translate-messageformat-compiler';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { DeepLinkService } from './services/deep-link.service';
import { SleepPreparationService } from './services/sleep-preparation.service';
import { PulsoidService } from './services/integrations/pulsoid.service';
import { SettingsIntegrationsTabComponent } from './views/dashboard-view/views/settings-view/settings-integrations-tab/settings-integrations-tab.component';
import { ObfuscatedValueDirective } from './directives/obfuscated-value.directive';
import { HeartRateCalmPeriodEnableSleepModeModalComponent } from './views/dashboard-view/views/sleep-detection-view/heart-rate-calm-period-enable-sleepmode-modal/heart-rate-calm-period-enable-sleep-mode-modal.component';
import { SleepModeEnableOnHeartRateCalmPeriodAutomationService } from './services/sleep-detection-automations/sleep-mode-enable-on-heart-rate-calm-period-automation.service';
import { HeartRateChartComponent } from './views/dashboard-view/views/sleep-detection-view/heart-rate-calm-period-enable-sleepmode-modal/heart-rate-chart/heart-rate-chart.component';
import { StartWithSteamVRHowToModalComponent } from './views/dashboard-view/views/settings-view/settings-general-tab/confirm-modal/start-with-steamvr-how-to-modal.component';
import { QuitWithSteamVRService } from './services/quit-with-steamvr.service';
import { VRChatMicMuteAutomationService } from './services/osc-automations/vrchat-mic-mute-automation.service';
import { MiscTestingComponent } from './components/developer-debug-modal/misc-testing/misc-testing.component';
import { VRChatMicMuteAutomationsViewComponent } from './views/dashboard-view/views/vrchat-mic-mute-automations-view/vrchat-mic-mute-automations-view.component';
import { TurnOffDevicesOnBatteryLevelAutomationService } from './services/power-automations/turn-off-devices-on-battery-level-automation.service';
import { DebugAudioDeviceDebuggerComponent } from './components/developer-debug-modal/debug-audio-device-debugger/debug-audio-device-debugger.component';
import { AudioDeviceService } from './services/audio-device.service';
import { SystemMicMuteAutomationsViewComponent } from './views/dashboard-view/views/system-mic-mute-automations-view/system-mic-mute-automations-view.component';
import { SystemMicMuteAutomationService } from './services/system-mic-mute-automation.service';
import { OpenVRInputService } from './services/openvr-input.service';
import { OverlayService } from './services/overlay/overlay.service';
import { ControllerBindingComponent } from './components/controller-binding/controller-binding.component';
import { TranslationLoaderViewComponent } from './modules/translation/views/translation-loader-view/translation-loader-view.component';
import { FormsModule } from '@angular/forms';
import { TranslationEditorViewComponent } from './modules/translation/views/translation-editor-view/translation-editor-view.component';
import { TextareaAutoResizeDirective } from './directives/textarea-auto-resize.directive';
import { NightmareDetectionViewComponent } from './views/dashboard-view/views/nightmare-detection-view/nightmare-detection-view.component';
import { NightmareDetectionAutomationService } from './services/nightmare-detection-automation.service';
import { FLAVOUR } from '../build';
import { DurationDisableSleepModeModalComponent } from './views/dashboard-view/views/sleep-detection-view/duration-disable-sleepmode-modal/duration-disable-sleep-mode-modal.component';
import { SleepModeDisableAfterTimeAutomationService } from './services/sleep-detection-automations/sleep-mode-disable-after-time-automation.service';
import { AudioVolumeAutomationsViewComponent } from './views/dashboard-view/views/audio-volume-automations-view/audio-volume-automations-view.component';
import { AudioVolumeEntriesComponent } from './views/dashboard-view/views/audio-volume-automations-view/audio-volume-entries/audio-volume-entries.component';
import { AudioDevicePickerComponent } from './views/dashboard-view/views/audio-volume-automations-view/audio-device-picker/audio-device-picker.component';
import { AudioDeviceAutomationsService } from './services/audio-device-automations.service';
import { WindowsService } from './services/windows.service';

[localeEN, localeFR, localeCN_TW, localeNL, localeKO, localeJP, localeES, localeID].forEach(
  (locale) => registerLocaleData(locale)
);

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    DashboardViewComponent,
    PowerAutomationsViewComponent,
    SettingsViewComponent,
    DashboardNavbarComponent,
    DeviceListComponent,
    DeviceListItemComponent,
    VarDirective,
    TooltipDirective,
    ImageFallbackDirective,
    AboutViewComponent,
    OverviewViewComponent,
    SleepDetectionViewComponent,
    SleepDetectorCalibrationModalComponent,
    SleepDetectorEnableSleepModeModalComponent,
    TimeEnableSleepModeModalComponent,
    TimeDisableSleepModeModalComponent,
    DurationDisableSleepModeModalComponent,
    BatteryPercentageEnableSleepModeModalComponent,
    DevicePowerOnDisableSleepModeModalComponent,
    GpuAutomationsViewComponent,
    SettingsTabComponent,
    PowerLimitInputComponent,
    SleepingPoseViewerComponent,
    OscAutomationsViewComponent,
    SelectBoxComponent,
    TStringTranslatePipe,
    LocalizedDatePipe,
    ImageCachePipe,
    OscScriptButtonComponent,
    OscScriptModalComponent,
    OscScriptCodeEditorComponent,
    DropdownButtonComponent,
    OscScriptSimpleEditorComponent,
    ConfirmModalComponent,
    UpdateModalComponent,
    LanguageSelectModalComponent,
    SettingsGeneralTabComponent,
    SettingsNotificationsTabComponent,
    SettingsUpdatesTabComponent,
    SettingsAdvancedTabComponent,
    SettingsVRChatTabComponent,
    VRChatLoginModalComponent,
    VRChatLoginTFAModalComponent,
    StatusAutomationsViewComponent,
    SleepingAnimationPresetModalComponent,
    MainStatusBarComponent,
    AutoInviteRequestAcceptViewComponent,
    FriendSelectionModalComponent,
    GpuPowerlimitingPaneComponent,
    MsiAfterburnerPaneComponent,
    BrightnessAutomationsViewComponent,
    BrightnessAutomationsTabComponent,
    SliderSettingComponent,
    SliderComponent,
    EventLogComponent,
    EventLogEntryComponent,
    ResolutionAutomationsViewComponent,
    ChaperoneAutomationsViewComponent,
    BaseModalComponent,
    SleepAnimationsViewComponent,
    ImgSmoothLoaderDirective,
    ControllersAndTrackersTabComponent,
    BaseStationsTabComponent,
    ShutdownAutomationsViewComponent,
    ShutdownSequenceOverlayComponent,
    DeveloperDebugModalComponent,
    WindowsPowerPolicyTabComponent,
    DebugSleepDetectionDebuggerComponent,
    DebugBrightnessTestingComponent,
    BrightnessControlModalComponent,
    BrightnessControlSliderComponent,
    ClickOutsideDirective,
    SettingsIntegrationsTabComponent,
    ObfuscatedValueDirective,
    HeartRateCalmPeriodEnableSleepModeModalComponent,
    HeartRateChartComponent,
    StartWithSteamVRHowToModalComponent,
    MiscTestingComponent,
    VRChatMicMuteAutomationsViewComponent,
    DebugAudioDeviceDebuggerComponent,
    SystemMicMuteAutomationsViewComponent,
    ControllerBindingComponent,
    TranslationLoaderViewComponent,
    TranslationEditorViewComponent,
    TextareaAutoResizeDirective,
    NightmareDetectionViewComponent,
    AudioVolumeAutomationsViewComponent,
    AudioVolumeEntriesComponent,
    AudioDevicePickerComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MomentModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
      compiler: {
        provide: TranslateCompiler,
        useClass: TranslateMessageFormatCompiler,
      },
    }),
    NgPipesModule,
    FormsModule,
  ],
  providers: [ThemeService, TStringTranslatePipe],
  exports: [SelectBoxComponent],
})
export class AppModule {
  constructor(
    private http: HttpClient,
    private openvrService: OpenVRService,
    private nvmlService: NvmlService,
    private sleepService: SleepService,
    private oscService: OscService,
    private oscControlService: OscControlService,
    private sidecarService: ElevatedSidecarService,
    private updateService: UpdateService,
    private telemetryService: TelemetryService,
    private appSettingsService: AppSettingsService,
    private modalService: ModalService,
    private vrchatService: VRChatService,
    private vrchatLogService: VRChatLogService,
    private imageCacheService: ImageCacheService,
    private displayBrightnessControlService: DisplayBrightnessControlService,
    private imageBrightnessControlService: ImageBrightnessControlService,
    private simpleBrightnessControlService: SimpleBrightnessControlService,
    private systemTrayService: SystemTrayService,
    private eventLog: EventLogService,
    private lighthouseService: LighthouseService,
    private developerDebugService: DeveloperDebugService,
    private ipcService: IPCService,
    private overlayAppStateSyncService: OverlayStateSyncService,
    private automationConfigService: AutomationConfigService,
    private fontLoaderService: FontLoaderService,
    private notificationService: NotificationService,
    private steamService: SteamService,
    private deepLinkService: DeepLinkService,
    private sleepPreparationService: SleepPreparationService,
    private pulsoidService: PulsoidService,
    private quitWithSteamVRService: QuitWithSteamVRService,
    private audioDeviceService: AudioDeviceService,
    private openvrInputService: OpenVRInputService,
    private overlayService: OverlayService,
    private windowsService: WindowsService,
    // GPU automations
    private gpuAutomations: GpuAutomationsService,
    // Sleep mode automations
    private sleepModeForSleepDetectorAutomationService: SleepModeForSleepDetectorAutomationService,
    private sleepModeEnableOnControllersPoweredOffAutomation: SleepModeEnableOnControllersPoweredOffAutomationService,
    private sleepModeEnableAtBatteryPercentageAutomation: SleepModeEnableAtBatteryPercentageAutomationService,
    private sleepModeEnableAtTimeAutomationService: SleepModeEnableAtTimeAutomationService,
    private sleepModeEnableOnHeartRateCalmPeriodAutomationService: SleepModeEnableOnHeartRateCalmPeriodAutomationService,
    private sleepModeChangeOnSteamVRStatusAutomationService: SleepModeChangeOnSteamVRStatusAutomationService,
    private sleepModeDisableAtTimeAutomationService: SleepModeDisableAtTimeAutomationService,
    private sleepModeDisableAfterTimeAutomationService: SleepModeDisableAfterTimeAutomationService,
    private sleepModeDisableOnDevicePowerOnAutomationService: SleepModeDisableOnDevicePowerOnAutomationService,
    // Power automations
    private turnOffDevicesOnSleepModeEnableAutomationService: TurnOffDevicesOnSleepModeEnableAutomationService,
    private turnOffDevicesWhenChargingAutomationService: TurnOffDevicesWhenChargingAutomationService,
    private turnOffDevicesOnBatteryLevelAutomationService: TurnOffDevicesOnBatteryLevelAutomationService,
    private turnOnLighthousesOnOyasumiStartAutomationService: TurnOnLighthousesOnOyasumiStartAutomationService,
    private turnOnLighthousesOnSteamVRStartAutomationService: TurnOnLighthousesOnSteamVRStartAutomationService,
    private turnOffLighthousesOnSteamVRStopAutomationService: TurnOffLighthousesOnSteamVRStopAutomationService,
    // OSC automations
    private oscGeneralAutomationsService: OscGeneralAutomationsService,
    private sleepingAnimationsAutomationService: SleepingAnimationsAutomationService,
    private vrchatMicMuteAutomationService: VRChatMicMuteAutomationService,
    // Status automations
    private statusChangeForPlayerCountAutomationService: StatusChangeForPlayerCountAutomationService,
    // Invite automations
    private inviteAutomationsService: InviteAutomationsService,
    // Shutdown automations
    private shutdownAutomationsService: ShutdownAutomationsService,
    // Brightness control automations
    private brightnessControlAutomationService: BrightnessControlAutomationService,
    // Render resolution automations
    private renderResolutionAutomationService: RenderResolutionAutomationService,
    // Chaperone fade dinstance automations
    private chaperoneFadeDistanceAutomationService: ChaperoneFadeDistanceAutomationService,
    // Windows power policy automations
    private setWindowsPowerPolicyOnSleepModeAutomationService: SetWindowsPowerPolicyOnSleepModeAutomationService,
    // Miscellaneous automations
    private audioDeviceAutomationsService: AudioDeviceAutomationsService,
    private systemMicMuteAutomationsService: SystemMicMuteAutomationService,
    private nightmareDetectionAutomationService: NightmareDetectionAutomationService
  ) {
    this.init();
  }

  private async logInit<T>(action: string, promise: Promise<T>): Promise<T> {
    if (FLAVOUR === 'DEV') console.log(`[Init] Running ${action}`);
    try {
      const result = await promise;
      if (FLAVOUR === 'DEV') info(`[Init] '${action}' ran successfully`);
      return result;
    } catch (e) {
      error(`[Init] Running '${action}' failed: ` + e);
      throw e;
    }
  }

  async init() {
    await pMinDelay(
      (async () => {
        await this.logInit(
          'DeveloperDebugService initialization',
          this.developerDebugService.init()
        );
        // Clean cache
        await this.logInit('cache clean', CachedValue.cleanCache());
        // Preload assets
        await this.logInit('asset preload', this.preloadAssets());
        // Initialize base utilities
        await Promise.all([
          this.logInit('AppSettingsService initialization', this.appSettingsService.init()),
          this.logInit('EventLogService initialization', this.eventLog.init()),
          this.logInit('SystemTrayService initialization', this.systemTrayService.init()),
          this.logInit(
            'AutomationConfigService initialization',
            this.automationConfigService.init()
          ),
          this.logInit('DeepLinkService initialization', this.deepLinkService.init()),
        ]);
        // Initialize telemetry
        await Promise.all([
          this.logInit('TelemetryService initialization', this.telemetryService.init()),
        ]);
        // Initialize general utility services
        await Promise.all([
          this.logInit('OpenVRService initialization', this.openvrService.init()),
          this.logInit('OscService initialization', this.oscService.init()).then(() =>
            this.logInit('OscControlService initialization', this.oscControlService.init())
          ),
          this.logInit('SleepService initialization', this.sleepService.init()),
          this.logInit('VRChatService initialization', this.vrchatService.init()),
          this.logInit('VRChatLogService initialization', this.vrchatLogService.init()),
          this.logInit('ImageCacheService initialization', this.imageCacheService.init()),
          this.logInit('FontLoaderService initialization', this.fontLoaderService.init()),
          this.logInit('LighthouseService initialization', this.lighthouseService.init()),
          this.logInit('NotificationService initialization', this.notificationService.init()),
          this.logInit(
            'SleepPreparationService initialization',
            this.sleepPreparationService.init()
          ),
          this.logInit('PulsoidService initialization', this.pulsoidService.init()),
          this.logInit('QuitWithSteamVRService initialization', this.quitWithSteamVRService.init()),
          this.logInit('AudioDeviceService initialization', this.audioDeviceService.init()),
          this.logInit('OpenVRInputService initialization', this.openvrInputService.init()),
          this.logInit('WindowsService initialization', this.windowsService.init()),
        ]);
        // Initialize GPU control services
        await this.logInit('SidecarService initialization', this.sidecarService.init()).then(
          async () => {
            await this.logInit('NVMLService initialization', this.nvmlService.init());
          }
        );
        // Initialize Brightness Control
        await Promise.all([
          this.logInit(
            'DisplayBrightnessControlService initialization',
            this.displayBrightnessControlService.init()
          ),
          this.logInit(
            'ImageBrightnessControlService initialization',
            this.imageBrightnessControlService.init()
          ),
        ]);
        await this.logInit(
          'simpleBrightnessControlService initialization',
          this.simpleBrightnessControlService.init()
        );
        // Initialize IPC
        await this.logInit('IpcService initialization', this.ipcService.init());
        await this.logInit('OverlayService initialization', this.overlayService.init());
        await this.logInit(
          'OverlayAppStateSyncService initialization',
          this.overlayAppStateSyncService.init()
        );
        // Initialize Steam support
        await this.logInit('SteamService initialization', this.steamService.init());
        // Initialize automations
        await Promise.all([
          // GPU automations
          await this.logInit('GpuAutomationsService initialization', this.gpuAutomations.init()),
          // Sleep mode automations
          this.logInit(
            'SleepModeForSleepDetectorAutomationService initialization',
            this.sleepModeForSleepDetectorAutomationService.init()
          ),
          this.logInit(
            'SleepModeEnableOnControllersPoweredOffAutomation initialization',
            this.sleepModeEnableOnControllersPoweredOffAutomation.init()
          ),
          this.logInit(
            'SleepModeEnableAtBatteryPercentageAutomation initialization',
            this.sleepModeEnableAtBatteryPercentageAutomation.init()
          ),
          this.logInit(
            'SleepModeEnableAtTimeAutomationService initialization',
            this.sleepModeEnableAtTimeAutomationService.init()
          ),
          this.logInit(
            'SleepModeEnableOnHeartRateCalmPeriodAutomationService initialization',
            this.sleepModeEnableOnHeartRateCalmPeriodAutomationService.init()
          ),
          this.logInit(
            'SleepModeChangeOnSteamVRStatusAutomationService initialization',
            this.sleepModeChangeOnSteamVRStatusAutomationService.init()
          ),
          this.logInit(
            'SleepModeDisableAtTimeAutomationService initialization',
            this.sleepModeDisableAtTimeAutomationService.init()
          ),
          this.logInit(
            'SleepModeDisableAfterTimeAutomationService initialization',
            this.sleepModeDisableAfterTimeAutomationService.init()
          ),
          this.logInit(
            'SleepModeDisableOnDevicePowerOnAutomationService initialization',
            this.sleepModeDisableOnDevicePowerOnAutomationService.init()
          ),
          // Power automations
          this.logInit(
            'TurnOffDevicesOnSleepModeEnableAutomationService initialization',
            this.turnOffDevicesOnSleepModeEnableAutomationService.init()
          ),
          this.logInit(
            'TurnOffDevicesWhenChargingAutomationService initialization',
            this.turnOffDevicesWhenChargingAutomationService.init()
          ),
          this.logInit(
            'TurnOffDevicesOnBatteryLevelAutomationService initialization',
            this.turnOffDevicesOnBatteryLevelAutomationService.init()
          ),
          this.logInit(
            'TurnOnLighthousesOnOyasumiStartAutomationService initialization',
            this.turnOnLighthousesOnOyasumiStartAutomationService.init()
          ),
          this.logInit(
            'TurnOnLighthousesOnSteamVRStartAutomationService initialization',
            this.turnOnLighthousesOnSteamVRStartAutomationService.init()
          ),
          this.logInit(
            'TurnOffLighthousesOnSteamVRStopAutomationService initialization',
            this.turnOffLighthousesOnSteamVRStopAutomationService.init()
          ),
          // OSC automations
          this.logInit(
            'OSCGeneralAutomationsService initialization',
            this.oscGeneralAutomationsService.init()
          ),
          this.logInit(
            'SleepingAnimationsAutomationService initialization',
            this.sleepingAnimationsAutomationService.init()
          ),
          this.logInit(
            'VRChatMicMuteAutomationService initialization',
            this.vrchatMicMuteAutomationService.init()
          ),
          // Status automations
          this.logInit(
            'StatusChangeForPlayerCountAutomationService initialization',
            this.statusChangeForPlayerCountAutomationService.init()
          ),
          // Invite automations
          this.logInit(
            'InviteAutomationsService initialization',
            this.inviteAutomationsService.init()
          ),
          // Brightness automations
          this.logInit(
            'BrightnessControlAutomationService initialization',
            this.brightnessControlAutomationService.init()
          ),
          // Resolution automations
          this.logInit(
            'RenderResolutionAutomationService initialization',
            this.renderResolutionAutomationService.init()
          ),
          // Fade distance automations
          this.logInit(
            'ChaperoneFadeDistanceAutomationService initialization',
            this.chaperoneFadeDistanceAutomationService.init()
          ),
          // Shutdown automations
          this.logInit(
            'ShutdownAutomationsService initialization',
            this.shutdownAutomationsService.init()
          ),
          // Windows power policy automations
          this.logInit(
            'SetWindowsPowerPolicyOnSleepModeAutomationService initialization',
            this.setWindowsPowerPolicyOnSleepModeAutomationService.init()
          ),
          // Miscellaneous automations
          this.logInit(
            'AudioDeviceAutomationsService initialization',
            this.audioDeviceAutomationsService.init()
          ),
          this.logInit(
            'SystemMicMuteAutomationsService initialization',
            this.systemMicMuteAutomationsService.init()
          ),
          this.logInit(
            'NightmareDetectionAutomationService initialization',
            this.nightmareDetectionAutomationService.init()
          ),
        ]);
      })(),
      SPLASH_MIN_DURATION
    );
    // Close the splash screen after initialization
    info('[Init] Initialization complete! Closing splash screen.');
    await invoke('close_splashscreen');
    // Show language selection modal if user hasn't picked a language yet
    const settings = await firstValueFrom(this.appSettingsService.settings);
    if (!settings.userLanguagePicked) {
      await firstValueFrom(
        this.modalService.addModal(LanguageSelectModalComponent, void 0, {
          closeOnEscape: false,
        })
      );
    }
    // Only initialize update service after language selection
    await this.updateService.init();
  }

  async preloadAssets() {
    const preloadAssets = await firstValueFrom(
      this.http.get<{ imageUrls: string[] }>('/assets/preload-assets.json')
    );
    await Promise.all(
      preloadAssets.imageUrls.map((imageUrl) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => {
            debug('Preloaded asset: ' + imageUrl);
            resolve(void 0);
          };
          img.onerror = () => {
            reject();
          };
          img.src = imageUrl;
        });
      })
    );
  }
}
