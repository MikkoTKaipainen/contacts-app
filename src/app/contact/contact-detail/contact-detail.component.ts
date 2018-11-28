import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Contact} from '../contact';
import {ContactService} from '../services/contact.service';
import {ToolbarService} from '../../ui/toolbar/toolbar.service';
import {ToolbarOptions} from '../../ui/toolbar/toolbar-options';

@Component({
  selector: 'app-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  contact: Contact;

  constructor(private router: Router, private route: ActivatedRoute, private contactService: ContactService,
              private toolbar: ToolbarService) {
    this.contact = new Contact();
  }

  ngOnInit() {
    this.toolbar.setToolbarOptions(new ToolbarOptions('back', 'Edit Contact'));
    const contactId = this.route.snapshot.paramMap.get('id');
    if (contactId) {
      this.contact = this.contactService.getContactById(contactId);
    }
  }

  onSave(): void {
    console.log('onSave: Contact saved');
    if (this.contact.id) {
      this.contactService.addContact(this.contact);
    }
    this.router.navigate(['/contacts']);
  }
}
