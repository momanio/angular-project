import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Car } from './car.model';

@Injectable({ providedIn: 'root' })
export class CarSlotService {
  private carData: Car[] = [];

  constructor(private http: HttpClient) {}

  getData() {
    return this.http
      .get<Car[]>(
        'https://run.mocky.io/v3/793607a0-cdbb-4af4-91be-41f694b94ba9'
      )
      .pipe(
        map((response) => {
          const resArr: Car[] = [];
          for (const cars in response) {
            if (response.hasOwnProperty(cars)) {
              resArr.push({ ...response[cars] });
            }
          }

          return resArr;
        })
      );
  }
}
