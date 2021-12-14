import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenFrameComponent } from './screen-frame/screen-frame.component';
import { IonicModule } from '@ionic/angular';

const exports = [
  ScreenFrameComponent
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
