import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  email: string = '';
  password: string = '';
  retypePassword: string = '';
  phoneNumber: string = '';

  constructor(private authService: AuthenticateService) { }
 
 signUp (){
   this.authService.signUp(this.email, this.password, this.retypePassword);
    this.email = '';
    this.password = '';
    this.retypePassword = '';
  }

  ngOnInit() {
  }

}
