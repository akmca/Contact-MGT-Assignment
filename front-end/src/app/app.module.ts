import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactCountPipe } from './contact-count.pipe';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsGridComponent } from './contacts-grid/contacts-grid.component';
import { ContactService } from './services/contact.service';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { DeleteContactComponent } from './delete-contact/delete-contact.component';
import { ContactBirthdayPipe } from './contact-birthday.pipe';
import { FooterComponent } from './footer/footer.component';
import { EmpServService } from './services/emp-serv.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    ContactCountPipe,
    ContactsComponent,
    ContactsListComponent,
    ContactsGridComponent,
    ContactFormComponent,
    DeleteContactComponent,
    ContactBirthdayPipe,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ContactService, EmpServService],
  bootstrap: [AppComponent]
})
export class AppModule { }
