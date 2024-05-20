import { Component, OnInit } from '@angular/core';
import { Car } from '../car/car.model';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthenticateService } from '../authenticate.service';

@Component({
  selector: 'app-complete-info',
  templateUrl: './complete-info.page.html',
  styleUrls: ['./complete-info.page.scss'],
})
export class CompleteInfoPage implements OnInit {
  car: Car = new Car();
  carType: string[] = ['2-seaters', '4-seaters', '6-seaters'];
  pickUpLocation: any;
  dropOffLocation: any;
  constructor(private router: Router, private authService: AuthenticateService) { }

  ngOnInit() {
  }

  
}
