import { Component, OnInit } from '@angular/core';
import { ConnectionsService } from '../connections.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-connections',
  templateUrl: './user-connections.component.html',
  styleUrls: ['./user-connections.component.scss']
})
export class UserConnectionsComponent implements OnInit {

  //an array to hold the user objects
  usersList:any = [];
  filteredListA:any = [];
  filteredListB:any = [];
  selectedFirstUserId:any;
  selectedSecondUserId:any;
  degree:any;
  path:any;

  constructor(private userService: UserService, private connectionService: ConnectionsService) { }
  
  ngOnInit(): void {
    //get list of users and display it
    this.getUsers();
  }

  getConnectionsBetweeen() {
    //gets connection between selected userids
    this.connectionService.getConnectionsBetween(this.selectedFirstUserId, this.selectedSecondUserId)
    .subscribe(
      (res:any) => {
        console.log(res)
        this.degree = res.degree;
        this.path = res.path;
      },
      err => { alert("No response for connection between users") }
    )
  }

  getUsers() {
    this.userService.getUsers()
    .subscribe(
      (res) => { 
        this.usersList = res;
        this.filteredListA = res;
        this.filteredListB = res;
      },
      err => { alert("Couldnt get list of users") }
    )
  }

  filterList(val:any, list:any) {
    if(val.length > 0) {
      if(list == 'A') {
        this.filteredListA = Object.assign([],this.usersList).filter((user:any) => user.name.startsWith(val));
      } else if(list == 'B') {
        this.filteredListB = Object.assign([],this.usersList).filter((user:any) => user.name.startsWith(val));
      }
    } else {
      this.assignCopy();
    }
  }

  assignCopy() {
    this.filteredListA = Object.assign([], this.usersList);
    this.filteredListB = Object.assign([], this.usersList);
 }

 selectUserId(id:any, type:any) {
    if(type == 'A') {
      this.selectedFirstUserId = id;
    } else if(type == 'B') {
      this.selectedSecondUserId = id;
    }
    console.log(this.selectedFirstUserId);
    console.log(this.selectedSecondUserId);
 }

}
