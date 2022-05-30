import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { AlertModule, ButtonModule, CardModule, FormModule, GridModule } from '@coreui/angular';
import {ReactiveFormsModule} from "@angular/forms";
import { IconModule } from '@coreui/icons-angular';


@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    AlertModule,
    CommonModule,
    PagesRoutingModule,
    CardModule,
    ButtonModule,
    GridModule,
    IconModule,
    FormModule,
    ReactiveFormsModule,
  ]
})
export class PagesModule {
}
