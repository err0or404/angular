import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CityComponent } from './city/city.component';
import { LoginActivate, DashboardActivate, CityActivate } from './common/auth.guard';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'home', 
    pathMatch: 'full' 
  },
  { 
    path: 'home', 
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule), 
    canActivate:[LoginActivate]
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule), 
    canActivate:[DashboardActivate]
  },
  { 
    path: 'select-city', 
    component: CityComponent, 
    pathMatch: 'full',
    canActivate:[CityActivate] 
  },
  {
    path: '**',
    redirectTo: '/main',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
