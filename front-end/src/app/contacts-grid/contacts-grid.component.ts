import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contacts-grid',
  templateUrl: './contacts-grid.component.html',
  styleUrls: ['./contacts-grid.component.css']
})
export class ContactsGridComponent implements OnInit {

  listContact: Contact[];
  constructor(private Csss:ContactService) { 
    this.listContact = [];
  }

  ngOnInit() {
    this.Csss.getContacts().subscribe(
      (data) => {
        this.listContact = data;
      }
    );
  }

}
