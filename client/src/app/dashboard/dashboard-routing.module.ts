import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartComponent } from './start/start.component';
import { MessageComponent } from './message/message.component';
import { AdComponent } from './ad/ad.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardPage } from './dashboard.page';
import { NotifyComponent } from './notify/notify.component';
import { DetailComponent } from './detail/detail.component';
import { AddPostComponent } from './add-post/add-post.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full'  },
      { path: 'dashboard', component: StartComponent, pathMatch: 'full' },
      { path: 'advertisement', component: AdComponent, pathMatch: 'full' },
      { path: 'profile', component: ProfileComponent, pathMatch: 'full' },
      { path: 'chat', component: MessageComponent, pathMatch: 'full' },
      { path: 'wishlist', component: NotifyComponent, pathMatch: 'full' },
      { path: 'detail/:id', component: DetailComponent, pathMatch: 'full' },
      { path: 'add-post', component: AddPostComponent, pathMatch: 'full' },
      { path: '**', redirectTo: '/main/dashboard', pathMatch: 'full' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
