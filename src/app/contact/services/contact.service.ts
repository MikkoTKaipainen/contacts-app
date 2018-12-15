import {Injectable} from '@angular/core';
import {Contact} from '../contact';
import {ContactLocalStorageService} from './contact-local-storage.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {ContactProvider} from '../interfaces/contact-provider';


@Injectable({
  providedIn: 'root'
})
export class ContactService implements ContactProvider {

  contacts: Contact[];

  constructor(private contactLocalStorage: ContactLocalStorageService, private contactProvider: ContactProvider, private route: Router) {
    this.contacts = [];
    this.contacts.push(new Contact(0, 'First', 'Contact', '050-555 1234', 'first.contact@email.com'));
    this.contacts.push(new Contact(1, 'Second', 'Contact', '+358 50-444 1234', 'second.contact@email.com'));
    this.contacts.push(new Contact(2, 'Third', 'Contact', '-', 'third.contact@email.com'));
  }

  get(): Observable<Contact[]> {
    return this.contactProvider.get();
  }

  delete(contact: Contact): Observable<any> {
    return this.contactProvider.delete(contact);
  }

  create(contact: Contact): Observable<Contact> {
    return this.contactProvider.create(contact);
  }

  edit(contact: Contact): Observable<Contact> {
    return this.contactProvider.edit(contact);
  }

  getById(id: string): Observable<Contact> {
    return this.contactProvider.getById(id);
  }
}
