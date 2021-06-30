import { Component, OnInit } from '@angular/core';
import { ConnectionsService } from '../connections.service';

@Component({
  selector: 'app-connections-upload',
  templateUrl: './connections-upload.component.html',
  styleUrls: ['./connections-upload.component.scss']
})
export class ConnectionsUploadComponent implements OnInit {

  file:any
  message:any;
  fileUploaded = false;
  uploadStatus = false;

  constructor(private connectionsServices: ConnectionsService) { }

  ngOnInit(): void {  }

  updateFile(event:any) {
    //updates the global file variable (incase user selects wrong file)
    if(event.target.files) {
      this.file = event.target.files[0];
    }
  }

  uploadConnections() {
    //calls service to send the file to server
    if(this.file) {
      const connections: FormData = new FormData();
      connections.append('file', this.file, this.file.name);
      this.connectionsServices.uploadConnections(connections)
      .subscribe(
        (res) => {
          this.uploadStatus = true;
          this.fileUploaded = true;
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

