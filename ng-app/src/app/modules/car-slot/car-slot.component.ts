import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CarSlotService } from './car-slot.service';
import { Car } from './car.model';
@Component({
  selector: 'app-car-slot',
  templateUrl: './car-slot.component.html',
  styleUrls: ['./car-slot.component.css'],
})
export class CarSlotComponent implements OnInit, OnDestroy {
  @Input() Cars = [];
  unSub: Subscription;

  constructor(private cService: CarSlotService) {}
  ngOnInit(): void {
    this.unSub = this.cService.getData().subscribe((res) => {
      this.Cars = res.slice();
      console.log('From init0', res);
      console.log('From init0Cars', this.Cars[0]);
    });

    console.log('From init1', this.Cars);
  }

  ngOnDestroy(): void {
    console.log('From init2', this.Cars);
    this.unSub.unsubscribe();
  }
}
