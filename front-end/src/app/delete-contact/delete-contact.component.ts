import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-delete-contact',
  templateUrl: './delete-contact.component.html',
  styleUrls: ['./delete-contact.component.css']
})
export class DeleteContactComponent implements OnInit {

  cid: number;

  constructor(
    private actRt: ActivatedRoute,
    private css: ContactService,
    private router:Router) { }

  ngOnInit() {
    this.actRt.params.subscribe(
      (params)=>{
        this.cid=params.id;
      }
    );
  }

  delete(){
    this.css.deleteById(this.cid).subscribe(
      (resp)=>{
        this.router.navigateByUrl("/");
      }
    );
  }

}
