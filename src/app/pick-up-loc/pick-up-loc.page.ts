import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from '../authenticate.service';
import { addresses } from '../model/model';
import { address } from '../model/model';


@Component({
  selector: 'app-pick-up-loc',
  templateUrl: './pick-up-loc.page.html',
  styleUrls: ['./pick-up-loc.page.scss'],

})
export class PickUpLocPage  {
  address: address = new address();
  query: string = '';
  places: any[] = [];

  constructor(private router: Router, private authService: AuthenticateService) {}

  ngOnInit () {
    
  }

  async search() {
    if (this.query === '') {
      this.places = [];
      return;
    }
    try {
      const autoCompleteItems = addresses.filter(address =>
        address.address.toLowerCase().includes(this.query.toLowerCase()) ||
        address.title.toLowerCase().includes(this.query.toLowerCase())
      ).map(address => ({
        title: address.title,
        address: address.address
      }));
  
      this.places = autoCompleteItems;
      console.log(this.places);
    } catch (error) {
      console.error(error);
    }
  }

  choosePlace(place: any) {
    this.address = place;
    this.query = place.address;
    this.places = [];
    console.log(this.query);
}

  confirm() {
    if (!this.query) {
      this.authService.presentAlert('Sorry', 'Please input your pick-up location.');
    } else {
      this.router.navigate(['drop-loc']);
    }
  }

}