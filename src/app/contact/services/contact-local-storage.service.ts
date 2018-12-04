import {Injectable} from '@angular/core';
import {Contact} from '../contact';
import {ContactProvider} from '../interfaces/contact-provider';
import {last} from 'rxjs/operators';
import {Observable, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContactLocalStorageService implements ContactProvider {

  localStorageKey = 'contacts-app';

  contacts: Contact[];

  constructor() {
    if (!localStorage.getItem(this.localStorageKey)) {
      localStorage.setItem(this.localStorageKey, JSON.stringify([]));
    }
  }

  get(): Observable<Contact[]> {
    const storageElement = localStorage.getItem(this.localStorageKey);
    console.log(storageElement);
    const contacts = JSON.parse(storageElement);
    return of (contacts);
  }

  create(contact: Contact): Observable<Contact> {
    let lastId = 1;
    if (this.contacts.length > 0) {
      lastId = this.contacts[this.contacts.length - 1].id;
      lastId = lastId + 1;
    }
    contact.id = lastId;
    this.contacts.push(contact);

    localStorage.removeItem(this.localStorageKey);
    return;
  }

  delete(contact: Contact): Observable<any> {
    return;
  }

  edit(contact: Contact): Observable<Contact> {
    return;
  }

  getById(): Observable<Contact> {
    return;
  }
}
