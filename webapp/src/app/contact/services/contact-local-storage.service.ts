import {Injectable} from '@angular/core';
import {Contact} from '../contact';
import {ContactProvider} from '../interfaces/contact-provider';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactLocalStorageService implements ContactProvider {

  localStorageKey = 'contacts-app';
  contacts: Contact[];
  contact: Contact;

  constructor() {
    if (localStorage.getItem(this.localStorageKey)) {
      this.contacts = JSON.parse(localStorage.getItem(this.localStorageKey));
    } else {
      console.log('Local storage not working');
      this.contacts = [];
    }
  }

  getById(id: string): Observable<Contact> {
    let contactId: Contact;
    for (const contact of this.contacts) {
      if (contact.id === Number(id)) {
        contactId = Object.assign({}, contact);
      }
    }
    return of(contactId);
  }

  get(): Observable<Contact[]> {
    const storageElement = localStorage.getItem(this.localStorageKey);
    const contacts = JSON.parse(storageElement);
    return of(contacts);
  }

  create(contact: Contact): Observable<Contact> {
    if (this.contacts) {
      let lastId = 0;
      if (this.contacts.length > 0) {
        lastId = this.contacts[this.contacts.length - 1].id;
        lastId += 1;
      }
      contact.id = lastId;
    } else {
      localStorage.setItem(this.localStorageKey, '[]');
      contact.id = 0;
    }
    this.contacts.push(contact);
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.contacts));
    return of(contact);
  }

  delete(contact: Contact): Observable<any> {
    for (const entry of this.contacts) {
      if (entry.id === contact.id) {
        this.contacts.splice(this.contacts.indexOf(entry), 1);
      }
    }
    localStorage.removeItem(this.localStorageKey);
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.contacts));
    return of(contact);
  }

  edit(contact: Contact): Observable<Contact> {
    this.contacts.forEach((contactId, index) => {
      if (contactId.id === contact.id) {
        this.contacts[index] = contact;
      }
    });
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.contacts));
    return of(contact);
  }

  search(search: string): Observable<Contact[]> {
    const searchResult = [];

    for (const contact of this.contacts) {
      if (JSON.stringify(contact).search(new RegExp(search, 'i')) !== -1) {
        searchResult.push(contact);
      }
    }
    return of(searchResult);
  }
}
