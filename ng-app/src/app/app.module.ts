import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, NavbarComponent, CarouselComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  entryComponents: [NgbModule],
  exports: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
