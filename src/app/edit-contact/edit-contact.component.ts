import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../shared/models/contact';
import { ContactService } from '../shared/services/contact.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  public contact: Contact;

  constructor(
    private contactService: ContactService,
    private activatedRoute: ActivatedRoute,
    private route: Router
  ) { }

  public contacts;

  contactForm = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [Validators.required]),
    type: new FormControl('pessoal', [Validators.required])
  }); 

  index = Number(this.activatedRoute.snapshot.paramMap.get('id'));

  ngOnInit(): void {
    this.contacts = this.contactService.getContacts();
    this.contact = this.contacts.splice(this.index, 1);

    this.contactForm.patchValue({
      name: this.contact[0].name,
      type: this.contact[0].type,
      phone: this.contact[0].phone
    });

  }

  editContact() {
    let newContact = this.contactForm.value;
    this.contacts.push(newContact);
    this.contactService.editContact(this.contacts);
    this.route.navigate(['']);

  }

}
