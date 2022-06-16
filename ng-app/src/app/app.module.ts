import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CardComponent } from './components/card/card.component';
import { QuranService } from './service/Quran.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    CardComponent,
  ],
  providers: [QuranService],
  imports: [BrowserModule, AppRoutingModule, NgbModule, HttpClientModule],
  entryComponents: [NgbModule],
  exports: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
