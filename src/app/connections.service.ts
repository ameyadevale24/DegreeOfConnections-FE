import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConnectionsService {

  constructor(private httpClient: HttpClient) {}

  uploadConnections(data:any) {
    return this.httpClient.post(environment.API_URL + '/api/connections',data)
  }

  getConnections() {
    return this.httpClient.get(environment.API_URL + '/api/connections')
  }

  getConnectionsBetween(user_a:any, user_b:any) {
    const params = new HttpParams()
                      .set('user_a',user_a)
                      .set('user_b', user_b)
    return this.httpClient.get(environment.API_URL + '/api/connection-between', {params})
  }
}
