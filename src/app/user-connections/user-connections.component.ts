import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-connections',
  templateUrl: './user-connections.component.html',
  styleUrls: ['./user-connections.component.scss']
})
export class UserConnectionsComponent implements OnInit {

  users:any = ["a","b","c","d","e"];
  
  constructor() { }
  
  ngOnInit(): void {
    //get list of users and display it
  }

}
