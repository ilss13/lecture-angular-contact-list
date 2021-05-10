import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  saveContact(contact: Contact) {

    let contactsLocal: Contact[];
    let newContacts;

    if (localStorage.hasOwnProperty("contacts")) {

      contactsLocal = JSON.parse(localStorage.getItem('contacts'));
      contactsLocal.push(contact);
      newContacts = JSON.stringify(contactsLocal);

    } else {

      newContacts = new Array(JSON.stringify(contact));
      
    }

    localStorage.setItem('contacts', newContacts);


  }

}
