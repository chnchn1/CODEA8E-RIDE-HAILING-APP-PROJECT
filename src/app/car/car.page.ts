import { Component, OnInit } from '@angular/core';
import { Car } from './car.model';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthenticateService } from '../authenticate.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-car',
  templateUrl: './car.page.html',
  styleUrls: ['./car.page.scss'],
})
export class CarPage implements OnInit {
  car: Car = new Car();
  carType: string[] = ['2-seaters', '4-seaters', '6-seaters'];
  constructor(private router: Router, private alertController: AlertController, private authService: AuthenticateService, private loadController: LoadingController) { }

  ngOnInit() {
  }

  async confirm() {
    if (this.validate(this.car)) {
      this.router.navigate(['pick-up-loc']);
    }
    
  }

  validate (car: Car) {
    if (!car.type) {
      this.authService.presentAlert('Alert', 'Please select a car type');
      return false;
    }
      return true;
  }
}