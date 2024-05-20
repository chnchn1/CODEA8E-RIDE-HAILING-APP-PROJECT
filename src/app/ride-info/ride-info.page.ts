import { Component, OnInit } from '@angular/core';
import { Car } from '../car/car.model';
import { iCar } from '../car/car.model';
import { Router } from '@angular/router';
import { AuthenticateService } from '../authenticate.service';

@Component({
  selector: 'app-ride-info',
  templateUrl: './ride-info.page.html',
  styleUrls: ['./ride-info.page.scss'],
})
export class RideInfoPage implements OnInit {
  carList: iCar[] = [];
  cars: Car = new Car();
  carType: string[] = ['2-seaters', '4-seaters', '6-seaters'];
  constructor(private router: Router, private authService: AuthenticateService) { }

  ngOnInit() {
    
  }

  addressUpdate() {
    
  }
}
