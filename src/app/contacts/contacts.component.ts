import { Component, OnInit } from '@angular/core';
import { Contact } from '../shared/models/contact';
import { ContactService } from '../shared/services/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  public contacts: Contact[];

  constructor(
    private contactService: ContactService
  ) { }

  ngOnInit(): void {
    this.contacts = this.contactService.getContacts();
  }

  deleteContact(index) {
    this.contactService.deleteContact(index);
    this.contacts = this.contactService.getContacts();
  }

}
