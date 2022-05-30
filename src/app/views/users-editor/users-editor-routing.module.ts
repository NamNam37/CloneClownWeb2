import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersEditorComponent } from './users-editor.component';

const routes: Routes = [
  {
    path: '',
    component: UsersEditorComponent,
    data: {
      title: $localize`UsersEditor`
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersEditorRoutingModule { }
