import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  AlertModule,
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

import { LogsRoutingModule } from './logs-routing.module';
import { LogsComponent } from './logs.component';
import { LogsTableComponent } from 'src/app/components/logs-table/logs-table.component';
import { LogsModalWarningComponent } from 'src/app/components/logs-modal-warning/logs-modal-warning.component';
import { LogsModalViewComponent } from 'src/app/components/logs-modal-view/logs-modal-view.component';

@NgModule({
  declarations: [
    LogsComponent,
    LogsTableComponent,
    LogsModalWarningComponent,
    LogsModalViewComponent
  ],
  imports: [
    AlertModule,
    CommonModule,
    LogsRoutingModule,
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
export class LogsModule { }
