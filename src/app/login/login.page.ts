import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  email: string = "";
  password: string = "";

  constructor(private authService: AuthenticateService) {}

  async signIn() {
    this.authService.signIn(this.email, this.password);
  }

  ngOnInit() {
  }

}
