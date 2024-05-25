import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {

  constructor(private authService: AuthenticateService) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }

}
