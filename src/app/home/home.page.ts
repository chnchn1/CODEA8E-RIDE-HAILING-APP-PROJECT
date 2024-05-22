import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from '../authenticate.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, private authService: AuthenticateService) {}


  book () {
    this.router.navigate(['car']);
  }

  prebook () {
    this.router.navigate(['prebook']);
  }

  message () {
    this.router.navigate(['message']);
  }
  
  signOut() {
    this.router.navigate(['login']);
    this.authService.setAuthentication(false);
  }
}
