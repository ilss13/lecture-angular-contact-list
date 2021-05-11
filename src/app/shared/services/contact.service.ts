import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  getContacts() {
    let contacts = JSON.parse(localStorage.getItem('contacts'));
    return contacts;
  }

  editContact(contacts) {
    let newContacts = JSON.stringify(contacts);
    localStorage.setItem('contacts', newContacts);
  }

  deleteContact(index) {
    
    let contacts = JSON.parse(localStorage.getItem('contacts'));
    contacts.splice(index, 1);
    let newContacts = JSON.stringify(contacts);
    localStorage.setItem('contacts', newContacts);

  }

  saveContact(contact: Contact) {

    let contactsLocal;
    let newContacts;
    let newContact;

    if (localStorage.hasOwnProperty("contacts")) {

      contactsLocal = JSON.parse(localStorage.getItem('contacts'));
      contactsLocal.push(contact);
      newContacts = JSON.stringify(contactsLocal);

    } else {
      newContact = new Array(contact);
      newContacts = JSON.stringify(newContact);
      
    }

    localStorage.setItem('contacts', newContacts);


  }

}
