import {Component, OnInit} from '@angular/core';
import {Contact} from '../contact';
import {ContactService} from '../services/contact.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToolbarService} from '../../ui/toolbar/toolbar.service';
import {ToolbarOptions} from '../../ui/toolbar/toolbar-options';
import {ToolbarAction} from '../../ui/toolbar/toolbar-action';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[];
  p: any;
  searchParam: string;

  constructor(private contactService: ContactService, private router: Router, private toolbar: ToolbarService, private route: ActivatedRoute) {
    this.contacts = [];
  }

  ngOnInit() {
    this.searchParam = this.route.snapshot.paramMap.get('search');
    this.toolbar.setToolbarOptions(new ToolbarOptions('back', 'Search results'));
    if (this.searchParam) {
      this.contactService.search(this.searchParam).subscribe(result => {
        this.contacts = result;
      });
    } else {
      this.toolbar.setToolbarOptions(new ToolbarOptions('menu', 'Contact Application'));
      this.loadContacts();
    }
  }

  onContactCreate(): void {
    this.router.navigate(['/contacts/new']);
  }

  onContactDeleted(contact: Contact) {
    this.loadContacts();
  }

  loadContacts() {
    this.contactService.get().subscribe(result => {
      this.contacts = result;
    });
  }
}
