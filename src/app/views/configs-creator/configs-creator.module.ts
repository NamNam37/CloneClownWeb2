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
import { WidgetsModule } from '../widgets/widgets.module';

import { ConfigsCreatorRoutingModule } from './configs-creator-routing.module';
import { ConfigsCreatorComponent } from './configs-creator.component';
import { ConfigsFormModule } from '../../components/configs-form/configs-form.module';

@NgModule({
  declarations: [ConfigsCreatorComponent],
  imports: [
    ConfigsCreatorRoutingModule,
    ConfigsFormModule,
    ModalModule,
    CardModule,
    NavModule,
    DropdownModule,
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
export class ConfigsCreatorModule { }
