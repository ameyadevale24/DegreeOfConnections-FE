import { Component, OnInit } from '@angular/core';
import { ConnectionsService } from '../connections.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-connections',
  templateUrl: './user-connections.component.html',
  styleUrls: ['./user-connections.component.scss']
})
export class UserConnectionsComponent implements OnInit {

  usersList:any = [];
  filteredListA:any = [];
  filteredListB:any = [];
  selectedFirstUser:any;
  selectedSecondUser:any;
  connectionResponse:any;
  isConnectionsLoaded = false;

  constructor(private userService: UserService, private connectionService: ConnectionsService) { }
  
  ngOnInit(): void {
    //get list of users and display it
    this.getUsers();
  }

  getConnectionsBetweeen() {
    // proceed only if both users are selected
    if (this.selectedFirstUser == undefined || this.selectedSecondUser == undefined) {
      return;
    }

    //gets connection between selected userids
    this.connectionService.getConnectionsBetween(this.selectedFirstUser.id, this.selectedSecondUser.id)
    .subscribe(
      (res:any) => {
        console.log(res)
        this.connectionResponse = res;
        this.isConnectionsLoaded = true;
      },
      err => { 
        alert("No response for connection between users");
        this.isConnectionsLoaded = true;
      }
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
        this.filteredListA = Object.assign([],this.usersList).filter((user:any) => user.name.includes(val));
      } else if(list == 'B') {
        this.filteredListB = Object.assign([],this.usersList).filter((user:any) => user.name.includes(val));
      }
    } else {
      this.assignCopy(list);
    }
  }

  assignCopy(list:any) {
    if(list == 'A') {
      this.filteredListA = Object.assign([], this.usersList);
    } else if(list == 'B') {
      this.filteredListB = Object.assign([], this.usersList);
    }
 }

 selectUser(user:any, list:any) {
    if(list == 'A') {
      this.selectedFirstUser = user;
    } else if(list == 'B') {
      this.selectedSecondUser = user;
    }
    this.getConnectionsBetweeen();
    console.log(this.selectedFirstUser);
    console.log(this.selectedSecondUser);
 }

}
