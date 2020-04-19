import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { MessageComponent } from './message/message.component';
import { AdComponent } from './ad/ad.component';
import { ProfileComponent } from './profile/profile.component';
import { NotifyComponent } from './notify/notify.component';
import { StartComponent } from './start/start.component';
import { DetailComponent } from './detail/detail.component';
import { AddPostComponent } from './add-post/add-post.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule
  ],
  declarations: [
    DashboardPage,
    MessageComponent,
    AdComponent,
    ProfileComponent,
    StartComponent,
    NotifyComponent,
    DetailComponent,
    AddPostComponent
  ]
})
export class DashboardPageModule {}
