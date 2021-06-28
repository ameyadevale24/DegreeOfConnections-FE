import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users-upload',
  templateUrl: './users-upload.component.html',
  styleUrls: ['./users-upload.component.scss']
})
export class UsersUploadComponent implements OnInit {

  file:any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers() {
    this.userService.getUsers()
    .subscribe(
      (res) => { console.log(res) },
      err => {
        alert("Error getting users");
      }
    )
  }

  updateFile(event:any) {
    //updates the global file variable (incase user selects wrong file)
    if(event.target.files) {
      this.file = event.target.files[0];
    }
  }

  uploadUsers() {
    //calls service to send the file to server
    if(this.file) {
      const userData: FormData = new FormData();
      userData.append('file', this.file, this.file.name);
      this.userService.uploadUsers(userData)
      .subscribe(
        (res) => {},
        err => {
          alert("Error while uploading users file");
        }
      )
    } else {
      alert("Please upload a file");
    }
  }

}
