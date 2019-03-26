import {Observable} from 'rxjs';
import {Contact} from '../contact';

export interface IContactProvider {
  get(): Observable<Contact[]>;
  getById(id: string): Observable<Contact>;
  edit(contact: Contact): Observable<Contact>;
  create(contact: Contact): Observable<Contact>;
  delete(contact: Contact): Observable<any>;
}
