import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigsEditorComponent } from './configs-editor.component';

const routes: Routes = [
  {
    path: '',
    component: ConfigsEditorComponent,
    data: {
      title: $localize`ConfigsEditor`
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigsEditorRoutingModule { }
