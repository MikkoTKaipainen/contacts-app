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
    const contactId = this.route.snapshot.paramMap.get('id');
    if (contactId != null) {
      this.toolbar.setToolbarOptions(new ToolbarOptions('back', 'Edit Contact'));
      /*this.contact = this.contactService.getContactById(contactId);*/
      /*if(this.contactService.getContactById(contactId) !== undefined){
        this.contact = this.contactService.getContactById(contactId);
        } else { this.router.navigate(['/contacts']);
        }*/
      this.contactService.getContactById(contactId).subscribe(result => {
        this.contact = result;
      }, error => {
        console.error(error);
      });
    } else {
      this.toolbar.setToolbarOptions(new ToolbarOptions('back', 'Create contact'));
    }
  }

  onSave(): void {
    let msgInfo = '';
    console.log('onSave: Contact saved');
    if (this.contact.id == null) {
      this.contactService.addContact(this.contact);
      msgInfo = 'Contact saved';
    } else {
      this.router.navigate(['/contacts']);
    }
  }
}
