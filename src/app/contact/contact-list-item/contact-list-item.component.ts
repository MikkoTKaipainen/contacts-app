import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Contact} from '../contact';
import {ContactService} from '../services/contact.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-contact-list-item',
  templateUrl: './contact-list-item.component.html',
  styleUrls: ['./contact-list-item.component.css']
})
export class ContactListItemComponent implements OnInit {

  @Input() contact: Contact;
  @Output() contactSelect: EventEmitter<any>;

  constructor(private contactService: ContactService, private router: Router) {
    this.contactSelect = new EventEmitter();
  }

  ngOnInit() {
    // console.log(this.contact);
  }

  onContactSelect() {
    this.contactSelect.emit();
  }

  onDeleteContact() {
    this.contactService.deleteContact(this.contact);
  }

  editItem() {
    this.router.navigate(['contacts/edit', this.contact.id]);
  }


}


