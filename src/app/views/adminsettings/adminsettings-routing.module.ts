import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminsettingsComponent } from './adminsettings.component';

const routes: Routes = [
  {
    path: '',
    component: AdminsettingsComponent,
    data: {
      title: $localize`Settings`
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminsettingsRoutingModule { }
