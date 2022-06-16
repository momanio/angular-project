import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quran } from '../shared/Quran.model';
@Injectable({
  providedIn: 'root',
})
export class QuranService {
  constructor(private http: HttpClient) {}
  getQuran() {
    return this.http.get<Quran>(
      'https://m7mdsami.com/Quran_json/read_json.php'
    );
  }
}
