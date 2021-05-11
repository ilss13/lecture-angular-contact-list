import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
    private route: ActivatedRoute
  ) { }

  contactForm = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [Validators.required]),
    type: new FormControl('pessoal', [Validators.required])
  }); 

  index = Number(this.route.snapshot.paramMap.get('id'));

  ngOnInit(): void {
    let contacts = this.contactService.getContacts();
    this.contact = contacts.splice(this.index, 1);

    console.log(this.contact);

    this.contactForm.patchValue({
      name: this.contact.name,
      type: this.contact.type,
      phone: this.contact.phone
    });

  }

}
