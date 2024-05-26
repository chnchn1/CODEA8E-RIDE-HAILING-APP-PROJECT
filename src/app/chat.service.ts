import { Injectable } from '@angular/core';
import { AuthenticateService } from './authenticate.service';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  currentUserId: string;
  public users: Observable<any>;

  constructor(private auth: AuthenticateService, private api: ApiService) {
    // this.getId();
  }

  // getId() {
  //   this.currentUserId = this.auth.getId();
  // }

  getUsers() {
    this.users = this.api.collectionDataQuery(
      'users',
      this.api.whereQuery('uid', '!=', this.currentUserId)
    );
  }
}
