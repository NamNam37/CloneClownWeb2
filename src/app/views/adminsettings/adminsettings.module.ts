import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  AvatarModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  FormModule,
  GridModule,
  NavModule,
  ProgressModule,
  TableModule,
  TabsModule,
  ModalModule
} from '@coreui/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { IconModule } from '@coreui/icons-angular';
import { WidgetsModule } from '../widgets/widgets.module';

import { AdminsettingsRoutingModule } from './adminsettings-routing.module';
import { AdminsettingsComponent } from './adminsettings.component';


@NgModule({
  declarations: [AdminsettingsComponent],
  imports: [
    CommonModule,
    AdminsettingsRoutingModule,
    ModalModule,
    CardModule,
    NavModule,
    IconModule,
    TabsModule,
    CommonModule,
    GridModule,
    ProgressModule,
    ReactiveFormsModule,
    ButtonModule,
    FormModule,
    ButtonModule,
    ButtonGroupModule,
    AvatarModule,
    TableModule,
    WidgetsModule,
  ]
})
export class AdminsettingsModule { }
