import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { trigger } from '@angular/animations';
import { DashboardViewComponent } from './views/dashboard-view/dashboard-view.component';
import { SettingsViewComponent } from './views/dashboard-view/views/settings-view/settings-view.component';
import { AboutViewComponent } from './views/dashboard-view/views/about-view/about-view.component';
import { OverviewViewComponent } from './views/dashboard-view/views/overview-view/overview-view.component';
import { SleepDetectionViewComponent } from './views/dashboard-view/views/sleep-detection-view/sleep-detection-view.component';
import { GpuAutomationsViewComponent } from './views/dashboard-view/views/gpu-automations-view/gpu-automations-view.component';
import { OscAutomationsViewComponent } from './views/dashboard-view/views/osc-automations-view/osc-automations-view.component';
import { StatusAutomationsViewComponent } from './views/dashboard-view/views/status-automations-view/status-automations-view.component';
import { AutoInviteRequestAcceptViewComponent } from './views/dashboard-view/views/auto-invite-request-accept-view/auto-invite-request-accept-view.component';
import { BrightnessAutomationsViewComponent } from './views/dashboard-view/views/brightness-automations-view/brightness-automations-view.component';
import { ResolutionAutomationsViewComponent } from './views/dashboard-view/views/resolution-automations-view/resolution-automations-view.component';
import { ChaperoneAutomationsViewComponent } from './views/dashboard-view/views/chaperone-automations-view/chaperone-automations-view.component';
import { SleepAnimationsViewComponent } from './views/dashboard-view/views/sleep-animations-view/sleep-animations-view.component';
import { PowerAutomationsViewComponent } from './views/dashboard-view/views/power-automations-view/power-automations-view.component';
import { ShutdownAutomationsViewComponent } from './views/dashboard-view/views/shutdown-automations-view/shutdown-automations-view.component';
import { VRChatMicMuteAutomationsViewComponent } from './views/dashboard-view/views/vrchat-mic-mute-automations-view/vrchat-mic-mute-automations-view.component';
import { SystemMicMuteAutomationsViewComponent } from './views/dashboard-view/views/system-mic-mute-automations-view/system-mic-mute-automations-view.component';
import { TranslationLoaderViewComponent } from './modules/translation/views/translation-loader-view/translation-loader-view.component';
import { TranslationEditorViewComponent } from './modules/translation/views/translation-editor-view/translation-editor-view.component';
import { NightmareDetectionViewComponent } from './views/dashboard-view/views/nightmare-detection-view/nightmare-detection-view.component';
import { AudioVolumeAutomationsViewComponent } from './views/dashboard-view/views/audio-volume-automations-view/audio-volume-automations-view.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardViewComponent,
    data: { animation: 'batteryManagement' },
    children: [
      {
        path: 'overview',
        component: OverviewViewComponent,
      },
      {
        path: 'sleepDetection',
        component: SleepDetectionViewComponent,
      },
      {
        path: 'oscAutomations',
        component: OscAutomationsViewComponent,
      },
      {
        path: 'sleepAnimations',
        component: SleepAnimationsViewComponent,
      },
      {
        path: 'powerAutomations',
        component: PowerAutomationsViewComponent,
      },
      {
        path: 'gpuAutomations',
        component: GpuAutomationsViewComponent,
      },
      {
        path: 'systemMicMuteAutomations',
        component: SystemMicMuteAutomationsViewComponent,
      },
      {
        path: 'audioVolumeAutomations',
        component: AudioVolumeAutomationsViewComponent,
      },
      {
        path: 'statusAutomations',
        component: StatusAutomationsViewComponent,
      },
      {
        path: 'vrchatMicMuteAutomations',
        component: VRChatMicMuteAutomationsViewComponent,
      },
      {
        path: 'brightnessAutomations',
        component: BrightnessAutomationsViewComponent,
      },
      {
        path: 'resolutionAutomations',
        component: ResolutionAutomationsViewComponent,
      },
      {
        path: 'chaperoneAutomations',
        component: ChaperoneAutomationsViewComponent,
      },
      {
        path: 'autoInviteRequestAccept',
        component: AutoInviteRequestAcceptViewComponent,
      },
      {
        path: 'shutdownAutomations',
        component: ShutdownAutomationsViewComponent,
      },
      {
        path: 'nightmareDetection',
        component: NightmareDetectionViewComponent,
      },
      {
        path: 'settings',
        component: SettingsViewComponent,
      },
      {
        path: 'about',
        component: AboutViewComponent,
      },
      {
        path: '**',
        redirectTo: 'overview',
      },
    ],
  },
  {
    path: 'translation',
    children: [
      { path: 'loader', component: TranslationLoaderViewComponent },
      { path: 'editor', component: TranslationEditorViewComponent },
      {
        path: '**',
        redirectTo: 'loader',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];

export const routeAnimations = trigger('routeAnimations', []);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
