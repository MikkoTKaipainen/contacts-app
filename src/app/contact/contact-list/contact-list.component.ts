import {Component, OnInit} from '@angular/core';
import {Contact} from '../contact';
import {ContactService} from '../services/contact.service';
import {Router} from '@angular/router';
import {ToolbarService} from '../../ui/toolbar/toolbar.service';
import {ToolbarOptions} from '../../ui/toolbar/toolbar-options';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[];

  constructor(private contactService: ContactService, private router: Router, private toolbar: ToolbarService) {
    this.contacts = [];
  }

  ngOnInit() {
    this.toolbar.setToolbarOptions(new ToolbarOptions('menu', 'Contact Application'));
    // this.contacts = this.contactService.getContacts();
    this.loadContacts();
  }

  onContactSelect(contact: Contact) {
    // console.log('Contact selected: ' + contact.id);
    // this.contacts = this.contactService.getContacts();
  }

  onContactCreate(): void {
    console.log('Contact created');
    this.router.navigate(['/contacts/new']);
  }

  onContactDeleted(contact: Contact) {
    console.log('Contact selected: ' + contact.id);
    this.loadContacts();
  }

  loadContacts() {
    this.contactService.get().subscribe(result => {
      this.contacts = result;
      console.log('Contacts loaded');
    });
  }
}
