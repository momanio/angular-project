import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericResponse } from 'src/app/shared/GenericResponse.model';
import { Car } from './car.model';

@Injectable({ providedIn: 'root' })
export class CarSlotService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<GenericResponse<Car[]>>(
      'https://run.mocky.io/v3/fc6a7803-cc4a-4f63-aa29-ec76afdaaf65'
    );
  }
}
