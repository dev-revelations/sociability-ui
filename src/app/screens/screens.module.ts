import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { IonicModule } from '@ionic/angular';
import { ScreenVenueProfileComponent } from './screen-venue-profile/screen-venue-profile.component';
import { SectionRatesComponent } from './sections/section-rates/section-rates.component';
import { SectionInfoComponent } from './sections/section-info/section-info.component';
import { SectionAccessibilityComponent } from './sections/section-accessibility/section-accessibility.component';

const exports = [
  ScreenVenueProfileComponent,
  SectionRatesComponent,
  SectionInfoComponent,
  SectionAccessibilityComponent,
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
