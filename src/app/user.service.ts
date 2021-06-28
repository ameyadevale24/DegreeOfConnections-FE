import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  
  constructor(private httpClient: HttpClient) {}

  uploadUsers(data:any) {
    return this.httpClient.post('/api/users',data)
  }

  getUsers() {
    return this.httpClient.get('/api/users')
  }
}
