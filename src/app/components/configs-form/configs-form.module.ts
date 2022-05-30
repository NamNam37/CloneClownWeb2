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
  ModalModule,
  DropdownModule
} from '@coreui/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { IconModule } from '@coreui/icons-angular';

import { ConfigsFormComponent } from './configs-form.component';
import { FtpModalComponent } from '../ftp-modal/ftp-modal.component';

@NgModule({
  declarations: [
    ConfigsFormComponent, FtpModalComponent
  ],
  imports: [
    ModalModule,
    CardModule,
    DropdownModule,
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
  ], exports: [
    ConfigsFormComponent
  ]
})
export class ConfigsFormModule { }
