import { Component, OnInit } from '@angular/core';
import { CarSlotService } from './car-slot.service';
import { Car } from './car.model';
@Component({
  selector: 'app-car-slot',
  templateUrl: './car-slot.component.html',
  styleUrls: ['./car-slot.component.css'],
})
export class CarSlotComponent implements OnInit {
  Cars: Car[] = [];
  heroes = [
    { id: 12, name: 'Dr. Nice' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr. IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' },
  ];
  constructor(private cService: CarSlotService) {}
  ngOnInit(): void {
    this.cService.getData().subscribe((res: []) => {
      return (this.Cars = { ...res });
    });
    this.Cars = this.cService.getCars();
    console.log('From init', this.Cars);
  }
}
