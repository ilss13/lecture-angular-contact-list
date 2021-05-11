import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../shared/models/contact';
import { ContactService } from '../shared/services/contact.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  private contact: Contact;

  constructor(
    private contactService: ContactService
  ) { }

  @Input() index;

  ngOnInit(): void {
    let contacts = this.contactService.getContacts();
    this.contact = contacts.splice(this.index, 1);
  }

}
