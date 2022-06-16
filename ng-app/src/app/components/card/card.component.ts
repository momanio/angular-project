import { Component, OnInit } from '@angular/core';
import { QuranService } from 'src/app/service/Quran.service';
import { Quran } from 'src/app/shared/Quran.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  Souwar!: Quran;
  constructor(private quranService: QuranService) {}

  ngOnInit() {
    return this.quranService.getQuran().subscribe((data) => {
      console.log(typeof data);
      console.log(data.index);
      this.Souwar = data;
      console.log(this.Souwar);
    });
  }
}
