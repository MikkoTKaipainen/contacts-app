import {IContactProvider} from './icontact-provider';
import {Observable} from 'rxjs';
import {Contact} from '../contact';

export abstract class ContactProvider implements IContactProvider {
  abstract get(): Observable<Contact[]>;
  abstract getById(id: string): Observable<Contact>;
  abstract edit(contact: Contact): Observable<Contact>;
  abstract create(contact: Contact): Observable<Contact>;
  abstract delete(contact: Contact): Observable<any>;
}
