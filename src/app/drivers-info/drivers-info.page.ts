import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-drivers-info',
  templateUrl: './drivers-info.page.html',
  styleUrls: ['./drivers-info.page.scss'],
})
export class DriversInfoPage implements OnInit {
  drivers: any[] = [];
  constructor() { }


  ngOnInit() {
    this.fetchDrivers();
  }

  async fetchDrivers() {
    const app = initializeApp(environment.firebaseConfig);
    const db = getFirestore(app);

    try {
      const q = query(collection(db, 'users'), where('userType', '==', 'driver'));
      const querySnapshot = await getDocs(q);
      const fetchedDrivers = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        carType: doc.data()['carType'],
        isAvailable: doc.data()['isAvailable'],
        phone: doc.data()['phone'],
        userEmail: doc.data()['userEmail'],
        username: doc.data()['username'],
      }));
      this.drivers = fetchedDrivers;
    } catch (error) {
      console.error('Error fetching drivers:', error);
    }
  }

}
