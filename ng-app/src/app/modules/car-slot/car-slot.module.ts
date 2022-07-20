import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarSlotComponent } from './car-slot.component';

@NgModule({
  declarations: [CarSlotComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: CarSlotComponent }]),
  ],
  exports: [],
})
export class CarSlotModule {}
