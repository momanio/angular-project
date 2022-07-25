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
  @Input() cars: Car[] = [];
  unSub: Subscription;

  constructor(private cService: CarSlotService) {}
  ngOnInit(): void {
    this.unSub = this.cService.getData().subscribe({
      next: ({ response }) => {
        console.log('resp: ', response);
        //this.cars = response;
        console.log('cars: ', this.cars);
      },
      error: (errorRes) => {
        return throwError(() => new Error(errorRes));
      },
      complete: () => {},
    });
  }

  ngOnDestroy(): void {
    console.log('From init Destroy', this.cars);
    this.unSub.unsubscribe();
  }
}
function throwError(_arg0: () => Error): void {
  throw new Error('Function not implemented.');
}
