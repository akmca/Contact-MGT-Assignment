import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  listContact: Contact[];
  contList: Array<Contact>;
  constructor(private Csss:ContactService) { 
    this.listContact = [];
    this.contList = new Array<Contact>();
  }

  ngOnInit() {

    this.Csss.getContacts().subscribe(
      (data: any) => {
        
        console.log('recevied data');
        this.contList = data.results;
        console.log(data.result);

        this.listContact = data;
        
      }
    );
  }

}
