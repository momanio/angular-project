import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [NgbCarouselConfig],
})
export class CarouselComponent {
  images = [700, 533, 807, 124, 456].map(
    (n) => `https://picsum.photos/id/${n}/900/500`
  );
  constructor(config: NgbCarouselConfig) {
    config.interval = 0;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = true;
  }
}
