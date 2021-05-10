import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../shared/models/contact';
import { ContactService } from '../shared/services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  constructor(
    public contactService: ContactService
  ) { }

  contactForm = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [Validators.required]),
    type: new FormControl('pessoal', [Validators.required])
  }); 

  ngOnInit(): void {
  }

  addContact() {

    let contact: Contact = this.contactForm.value;
    this.contactService.saveContact(contact);
    
  }

}
