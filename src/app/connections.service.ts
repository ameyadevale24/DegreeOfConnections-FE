import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConnectionsService {

  constructor(private httpClient: HttpClient) {}

  uploadConnections(data:any) {
    return this.httpClient.post('/api/connections',data)
  }

  getConnections() {
    return this.httpClient.get('/api/connections')
  }

  getConnectionsBetween(user_a:any, user_b:any) {
    const params = new HttpParams()
                      .set('user_a',user_a)
                      .set('user_b', user_b)
    return this.httpClient.get('/api/connection-between', {params})
  }
}
