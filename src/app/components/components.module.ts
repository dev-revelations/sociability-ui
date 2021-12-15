import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenFrameComponent } from './screen-frame/screen-frame.component';
import { IonicModule } from '@ionic/angular';
import { FeedbackButtonComponent } from './feedback-button/feedback-button.component';
import { InfoLableComponent } from './info-lable/info-lable.component';
import { AddButtonComponent } from './add-button/add-button.component';

const exports = [
  ScreenFrameComponent,
  FeedbackButtonComponent,
  InfoLableComponent,
  AddButtonComponent,
];

@NgModule({
  declarations: exports,
  imports: [
    CommonModule,
    IonicModule
  ],
  exports
})
export class ComponentsModule { }
