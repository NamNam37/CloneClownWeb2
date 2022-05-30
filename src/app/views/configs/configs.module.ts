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

import { ConfigsRoutingModule } from './configs-routing.module';
import { ConfigsComponent } from './configs.component';
import { ConfigsTableModule } from '../../components/configs-table/configs-table.module'

@NgModule({
  declarations: [ConfigsComponent],
  imports: [
    ConfigsTableModule,
    CommonModule,
    ConfigsRoutingModule,
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
export class ConfigsModule { }
