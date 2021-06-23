import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  
  constructor(private httpClient: HttpClient) {}

  uploadUsers(data:any) {
    return this.httpClient.get('/api/users')
    //data.forEach((f: any) => console.log("File: ", f));
    //return this.httpClient.post('',data);
  }
}
