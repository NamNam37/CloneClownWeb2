import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigsCreatorComponent } from './configs-creator.component';

const routes: Routes = [
  {
    path: '',
    component: ConfigsCreatorComponent,
    data: {
      title: $localize`ConfigsCreator`
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigsCreatorRoutingModule { }
