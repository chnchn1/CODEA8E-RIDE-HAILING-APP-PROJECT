import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, PopoverController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {

  @ViewChild('new_chat') modal: ModalController;
  @ViewChild('popover') popover: PopoverController;
  open_new_chat = false;
  users: Observable<any[]>;
  // users = [
  //   {id:1, name: 'Test', photo: 'https://i.pravatar.cc/388'},
  //   {id:2, name: 'Test2', photo: 'https://i.pravatar.cc/389'},
  //   {id:3, name: 'Test3', photo: 'https://i.pravatar.cc/390'},
  // ];
  
  chatRooms = [
    {id:1, name: 'Test', photo: 'https://i.pravatar.cc/388'},
    {id:2, name: 'Test2', photo: 'https://i.pravatar.cc/389'},
    {id:3, name: 'Test3', photo: 'https://i.pravatar.cc/390'},
  ];

  constructor(private router: Router, private chatService: ChatService) { }

  ngOnInit() {
  }

  newChat(){
    this.open_new_chat = true;
    if(!this.users) this.getUsers();
  }

  getUsers(){
    this.chatService.getUsers();
    this.users = this.chatService.users;
  }

  onWillDismiss(event: any){

  }

  cancel(){
    this.modal.dismiss();
    this.open_new_chat = false;
  }

  startChat(item){

  }

  getChat(item){
    this.router.navigate(['/','tabs', 'message', 'chat', item?.id])
  }

}
