import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenFrameComponent } from './screen-frame/screen-frame.component';
import { IonicModule } from '@ionic/angular';
import { FeedbackButtonComponent } from './feedback-button/feedback-button.component';

const exports = [
  ScreenFrameComponent,
  FeedbackButtonComponent
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
