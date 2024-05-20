import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthenticateService } from './authenticate.service';
import { TabsComponent } from './tabs/tabs.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'tabs',
    component: TabsComponent,
    children: [
      {
        path: 'home',
        canActivate: [AuthenticateService],
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'activity',
        canActivate: [AuthenticateService],
        loadChildren: () => import('./activity/activity.module').then( m => m.ActivityPageModule)
      },
      {
        path: 'message',
        canActivate: [AuthenticateService],
        loadChildren: () => import('./message/message.module').then( m => m.MessagePageModule)
      },
      {
        path: 'user-profile',
        canActivate: [AuthenticateService],
        loadChildren: () => import('./user-profile/user-profile.module').then( m => m.UserProfilePageModule)
      }
    ]
  },
  {
    path: 'car',
    canActivate: [AuthenticateService],
    loadChildren: () => import('./car/car.module').then( m => m.CarPageModule)
  },
  {
    path: 'pick-up-loc',
    canActivate: [AuthenticateService],
    loadChildren: () => import('./pick-up-loc/pick-up-loc.module').then( m => m.PickUpLocPageModule)
  },
  {
    path: 'drop-loc',
    canActivate: [AuthenticateService],
    loadChildren: () => import('./drop-loc/drop-loc.module').then( m => m.DropLocPageModule)
  },
  {
    path: 'ride-info',
    canActivate: [AuthenticateService],
    loadChildren: () => import('./ride-info/ride-info.module').then( m => m.RideInfoPageModule)
  },
  {
    path: 'prebook',
    canActivate: [AuthenticateService],
    loadChildren: () => import('./prebook/prebook.module').then( m => m.PrebookPageModule)
  },
  {
    path: 'complete-info',
    canActivate: [AuthenticateService],
    loadChildren: () => import('./complete-info/complete-info.module').then( m => m.CompleteInfoPageModule)
  },
  {
    path: 'drivers-info',
    loadChildren: () => import('./drivers-info/drivers-info.module').then( m => m.DriversInfoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
