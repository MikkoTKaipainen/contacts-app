import {Injectable} from '@angular/core';
import {Contact} from '../contact';


@Injectable({
  providedIn: 'root'
})
export class ContactLocalStorageService {

  localStorageKey = 'contacts-app';

  contacts: Contact[];

  constructor() {
    if (!localStorage.getItem(this.localStorageKey)) {
      localStorage.setItem(this.localStorageKey, JSON.stringify([]));
    }
  }

  getContacts(): Contact[] {
    const storageElement = localStorage.getItem(this.localStorageKey);
    const contacts = JSON.parse(storageElement);
    return contacts as Contact[];
  }
}
