import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  
  constructor(private httpClient: HttpClient) {}

  uploadUsers(data:any) {
    return this.httpClient.post(environment.API_URL + '/api/users',data)
  }

  getUsers() {
    return this.httpClient.get(environment.API_URL + '/api/users')
  }
}
