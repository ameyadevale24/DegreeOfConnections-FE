import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConnectionsService {

  constructor(private httpClient: HttpClient) {}

  uploadConnections(data:any) {
    data.forEach((f: any) => console.log("File: ", f));
    return this.httpClient.post('',data);
  }
}
