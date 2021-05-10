import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ContactsComponent } from './contacts/contacts.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';

const routes: Routes = [
  {path: 'contacts', component: ContactsComponent},
  {path: 'add-contact', component: AddContactComponent},
  {path: 'edit-contact', component: EditContactComponent},
  {path: '**', component: ContactsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
