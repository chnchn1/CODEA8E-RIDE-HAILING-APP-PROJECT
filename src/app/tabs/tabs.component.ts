import { Component, OnInit } from '@angular/core';
import { HomePage } from '../home/home.page';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent  implements OnInit {
  tab1Root: any = HomePage;
  constructor() { }

  ngOnInit() {}

}
