import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { IonicModule } from '@ionic/angular';
import { ScreenVenueProfileComponent } from './screen-venue-profile/screen-venue-profile.component';

const exports = [
  ScreenVenueProfileComponent
];

@NgModule({
  declarations: exports,
  imports: [
    CommonModule,
    ComponentsModule,
    IonicModule
  ],
  exports
})
export class ScreensModule { }
