import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MailsComponent } from './mails.component';

const routes: Routes = [
  {
    path: '',
    component: MailsComponent,
    data: {
      title: $localize`Mails`
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MailsRoutingModule { }
