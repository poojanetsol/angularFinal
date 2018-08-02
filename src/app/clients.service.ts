import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IClient } from './client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private _url : string = '/assets/data/clients.json';

  constructor(private http:HttpClient) { }

  getClients():Observable<IClient[]>{
    return this.http.get<IClient[]>(this._url);
  }
}
