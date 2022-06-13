import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NgbCarouselConfig],
})
export class AppComponent {
  title = 'ng-app';
  images = [700, 533, 807, 124, 456].map(
    (n) => `https://picsum.photos/id/${n}/900/500`
  );
  constructor(config: NgbCarouselConfig) {
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = true;
  }
}
