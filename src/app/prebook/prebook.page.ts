import { Component, OnInit } from '@angular/core';
import { Driver } from '../model/driver';
import { Router } from '@angular/router';
import { AuthenticateService } from '../authenticate.service';

@Component({
  selector: 'app-prebook',
  templateUrl: './prebook.page.html',
  styleUrls: ['./prebook.page.scss'],
})
export class PrebookPage implements OnInit {
  selectedDateTime: string = new Date().toISOString();

  availableDrivers: string[] = [];
  selectedDriver: Driver;
  drivers: Driver[] = [
    { id: '1234', name: 'John Crush', isAvailable: true },
    { id: '5678', name: 'Princess Prinsipe', isAvailable: true },
    { id: '91011', name: 'Andrew Balyegas', isAvailable: false },
    { id: '121314', name: 'Jaypee Beltransgender', isAvailable: true },
    { id: '151617', name: 'Alex Michaelides', isAvailable: false },
  ];

  constructor(private router: Router, private authService: AuthenticateService) {
  }

  ngOnInit() {
  }

  availableDriver(drivers: Driver) {
    if (drivers.isAvailable) {
      this.selectedDriver = drivers;
    } else {
      this.authService.presentAlert('Sorry', 'Driver is not available at the moment.')
    }
  }


  confirm() {
    if (!this.isFormValid()) {
      this.authService.presentAlert('Error', 'Please fill out all the fields.');
      return;
    }

    const currentDateTime = new Date();
    const selectedDateTimeObj = new Date(this.selectedDateTime);

    if (selectedDateTimeObj > currentDateTime) {
      this.router.navigate(['pick-up-loc']);
    } else {
      if (selectedDateTimeObj.getHours() > currentDateTime.getHours() || 
          (selectedDateTimeObj.getHours() === currentDateTime.getHours() && 
           selectedDateTimeObj.getMinutes() > currentDateTime.getMinutes())) {
            this.router.navigate(['pick-up-loc']);
      } else {
        this.authService.presentAlert('Error', 'Please select a date and time after the current date and time.');
        return;
      }
    }
  }

  private navigateToPickUpLocation() {
    this.router.navigate(['/pick-up-location'], {
      state: {
        selectedDateTime: this.selectedDateTime,
        selectedDriver: this.selectedDriver
      }
    });
  }

  private isFormValid(): boolean {
    const formData = {
      time: this.selectedDateTime,
      driver: this.selectedDriver,
      pickupLocation: 'Some Location'
    };
  
    if (!formData.time || !formData.driver || !formData.pickupLocation) {
      return false;
    }
  
    return true;
  }

}
