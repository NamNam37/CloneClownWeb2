import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './containers';
import { LoginComponent } from './views/pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./views/users/users.module').then((m) => m.UsersModule)
      },
      {
        path: 'users-editor/:id',
        loadChildren: () =>
          import('./views/users-editor/users-editor.module').then((m) => m.UsersEditorModule)
      },
      {
        path: 'configs',
        loadChildren: () =>
          import('./views/configs/configs.module').then((m) => m.ConfigsModule)
      },
      {
        path: 'configs-editor/:id',
        loadChildren: () =>
          import('./views/configs-editor/configs-editor.module').then((m) => m.ConfigsEditorModule)
      },
      {
        path: 'configs-creator',
        loadChildren: () =>
          import('./views/configs-creator/configs-creator.module').then((m) => m.ConfigsCreatorModule)
      },
      {
        path: 'mails',
        loadChildren: () =>
          import('./views/mails/mails.module').then((m) => m.MailsModule)
      },
      {
        path: 'logs',
        loadChildren: () =>
          import('./views/logs/logs.module').then((m) => m.LogsModule)
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./views/adminsettings/adminsettings.module').then((m) => m.AdminsettingsModule)
      },
      {
        path: 'pages',
        loadChildren: () =>
          import('./views/pages/pages.module').then((m) => m.PagesModule)
      },
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking'
      // relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
