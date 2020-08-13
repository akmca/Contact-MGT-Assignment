import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../models/contact';
import { ContactService } from '../services/contact.service';
import { concat } from 'rxjs';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  
  cact:Contact;
  isNew:boolean;

  constructor(
    private actRt:ActivatedRoute,
    private css:ContactService,
    private router:Router) { }

  ngOnInit() {
    this.actRt.params.subscribe(
      (params)=>{
        let cid = params.id;
        if(cid){
          this.css.getContactById(cid).subscribe(
            (data)=>{
              this.cact=data;
              this.isNew=false;
            }
          );
        }else{
          this.cact = new Contact();
          this.isNew =true;
        }
      }
    );
  }

  handleFormSubmition(){
    if(this.isNew){
      this.css.addContact(this.cact).subscribe(
        (resp) =>{
          this.router.navigateByUrl("/");
        }
      );
    }else{
      this.css.saveContact(this.cact).subscribe(
        (resp) =>{
          this.router.navigateByUrl("/");
        }
      );
    }
  }

}
