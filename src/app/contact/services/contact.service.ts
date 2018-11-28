import {Injectable} from '@angular/core';
import {Contact} from '../contact';
import {ContactLocalStorageService} from './contact-local-storage.service';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts: Contact[];

  constructor(private contactLocalStorage: ContactLocalStorageService, private localStorageKey: ContactLocalStorageService, private route: Router) {
    this.contacts = [];
    this.contacts.push(new Contact(0, 'First', 'Contact', '050-555 1234', 'first.contact@email.com'));
    this.contacts.push(new Contact(1, 'Second', 'Contact', '+358 50-444 1234', 'second.contact@email.com'));
    this.contacts.push(new Contact(2, 'Third', 'Contact', '-', 'third.contact@email.com'));
  }

  getContacts(): Contact[] {
    return this.contacts;
  }

  deleteContact(contact: Contact) {
    this.contacts.splice(this.contacts.indexOf(contact), 1);
  }

  addContact(contact: Contact) {
    console.log('Adding contact id:' + contact.id);
    let lastId = 1;
    if (this.contacts.length > 0) {
      lastId = this.contacts[this.contacts.length - 1].id;
      lastId = lastId + 1;
    }
    contact.id = lastId;
    this.contacts.push(contact);

    /*localStorage.removeItem(this.localStorageKey);
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.contacts));*/
  }

  /*editContact(contact: Contact) {
    this.contactLocalStorage.editContact(contact);
  }*/

  getContactById(id: any) {
    let contactCopy: Contact;
    for (let i = 0; i < this.contacts.length; i++) {
      if (id == this.contacts[i].id) {
        console.log(this.contacts[i]);
        contactCopy = Object.assign({}, this.contacts[i]);
        return contactCopy;
      }
    }
  }
}
