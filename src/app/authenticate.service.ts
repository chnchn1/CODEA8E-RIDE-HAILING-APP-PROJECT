import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { Router } from '@angular/router';
import { addDoc, collection, getFirestore, getDocs, updateDoc, doc, deleteDoc, setDoc } from "firebase/firestore"
import { environment } from 'src/environments/environment';
import { initializeApp } from 'firebase/app';
import { Car } from './car/car.model';
import { iCar } from './car/car.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  canProceed: boolean = false;
  newCarList: iCar[] = [];
  constructor(private alertController: AlertController, private toastController: ToastController, private router: Router) { }

  async signIn(email: string, password: string) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      const user = userCredential.user;
      this.setAuthentication(true);
      this.presentAlert('Success', 'Log In Successful!');
      this.router.navigate(['tabs/home']);
    })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(error);
        this.presentAlert('Error', 'Your password is incorrect.');
      });
  }

  async signUp(email: string, password: string, retypePassword: string) {
    if (!email || !password || !retypePassword) {
      this.presentAlert('Error', 'Please fill in all fields.');
      return;
    }
    if (password !== retypePassword) {
      this.presentAlert('Error', 'Password do not match.');
      return;
    }
    if (!email.includes('@')) {
      this.presentAlert('Invalid', 'Email must have @');
      return;
    }
    if (password.length < 6) {
      this.presentAlert('Invalid', 'Password must be at least 6 characters long');
      return;
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        const uid = user.uid;
        const firestore = getFirestore();
        const userRef = doc(firestore, 'users', uid);
        const userData = {
          email: email,
          uid: user.uid,
        };
        await setDoc(userRef, userData);
        this.presentAlert('Success', 'Sign Up Successful!');
        this.router.navigate(['login']);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(error);
        if (errorMessage === 'auth/email-already-in-use') {
          this.presentAlert('Error', 'Email is already in use.');
        } else {
          this.presentAlert('Error', errorMessage);
        }
      });
  }


  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentToast(message: string, duration: number) {
    const toast = await this.toastController.create({
      message: message,
      duration: duration
    });
    toast.present();
  }

  setAuthentication(auth: boolean) {
    if (auth) {
      localStorage.setItem('loggedIn', 'true');
    }
  }

  canActivate() {
    if (localStorage.getItem('loggedIn') == 'true') {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
  
  logout() {
    const auth = getAuth();
    signOut(auth).then(() => {
      localStorage.removeItem('loggedIn');
      this.router.navigate(['login']);
    }).catch((error) => {
      console.error(error);
    });
  }

}
