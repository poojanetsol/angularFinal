import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../clients.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {

  public clients = [];
  constructor(private _clientService : ClientsService) { }

  ngOnInit() {
    this._clientService.getClients()
    .subscribe(data => this.clients = data);
  }

}
