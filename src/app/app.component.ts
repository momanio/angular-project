import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  private userSub!: Subscription;
  isAuthenticated = false;

  constructor(private authService: AuthService) {}
  ngOnInit() {
    this.userSub = this.authService.user.subscribe((user) => {
      // this.isAuthenticated = !user ? false : true;
      this.isAuthenticated = !!user;
    });
    this.authService.autoLogin();
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
