import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactService } from '../services/contact.service';
import { EmpServService } from '../services/emp-serv.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  listContact: Contact[];
  listPost: Array<any>;
  constructor(private csss: ContactService,private empServ: EmpServService) {
    this.listContact = [];
    this.listPost = new Array<any>();
  }

  ngOnInit() {
    this.csss.getContacts().subscribe(
      (data) => {
        this.listContact = data;
      }
    );

    this.empServ.getPosts().subscribe((data: any) => {
      this.listPost = data
      console.log('from fake api', this.listPost);
    })
  }
}
