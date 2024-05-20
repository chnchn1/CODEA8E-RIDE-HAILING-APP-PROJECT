import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { addresses } from '../model/model';
import { address } from '../model/model';
import { AuthenticateService } from '../authenticate.service';



@Component({
  selector: 'app-drop-loc',
  templateUrl: './drop-loc.page.html',
  styleUrls: ['./drop-loc.page.scss'],
})
export class DropLocPage {
  address: address = new address();
  query: string = '';
  places: any[] = [];

  constructor(private router: Router, private authService: AuthenticateService) {}

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
    this.query = place.address;
    this.places = [];
    console.log(this.query);
  }
  
  confirm() {
    if (!this.query) {
      this.authService.presentAlert('Sorry', 'Please input your drop-off location.');
    } else {
      this.router.navigate(['ride-info']);
    }
  }
}
