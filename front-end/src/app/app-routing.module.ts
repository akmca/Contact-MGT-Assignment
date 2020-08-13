import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsGridComponent } from './contacts-grid/contacts-grid.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { DeleteContactComponent } from './delete-contact/delete-contact.component';

const routes: Routes = [
  {path: '', component: DashboardComponent, pathMatch: 'full'},
  {path:'contacts',component:ContactsComponent,
    children:[
      {path: '', redirectTo:'list', pathMatch: 'full'},
      {path: 'list', component: ContactsListComponent},
      {path: 'grid', component: ContactsGridComponent}
  ]},
  {path:'add',component:ContactFormComponent},
  {path:'edit/:id',component:ContactFormComponent},
  {path:'delete/:id',component:DeleteContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
