import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users-upload',
  templateUrl: './users-upload.component.html',
  styleUrls: ['./users-upload.component.scss']
})
export class UsersUploadComponent implements OnInit {

  file:any;
  message:any;
  fileUploaded = false;
  uploadStatus = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {  }

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
        (res) => { 
          this.fileUploaded = true;
          this.uploadStatus = true;
          this.message = "File uploaded successfully!";
        },
        err => {
          this.uploadStatus = false;
          this.fileUploaded = true;
          this.message = "File uploading failed!";
        }
      )
    } else {
      alert("Please upload a file");
    }
  }

}
