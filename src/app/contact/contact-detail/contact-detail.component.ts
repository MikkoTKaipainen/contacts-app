import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Contact} from '../contact';
import {ContactService} from '../services/contact.service';
import {ToolbarService} from '../../ui/toolbar/toolbar.service';
import {ToolbarOptions} from '../../ui/toolbar/toolbar-options';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  contact: Contact;

  constructor(private router: Router, private route: ActivatedRoute, private contactService: ContactService,
              private toolbar: ToolbarService, private snackbar: MatSnackBar) {
    this.contact = new Contact();
  }

  ngOnInit() {
    const contactId = this.route.snapshot.paramMap.get('id');
    if (contactId != null) {
      this.toolbar.setToolbarOptions(new ToolbarOptions('back', 'Edit Contact'));
      this.contactService.getById(contactId).subscribe(result => {
        this.contact = result;
      }, error => {
        console.error(error);
      });
    } else {
      this.toolbar.setToolbarOptions(new ToolbarOptions('back', 'Create contact'));
    }
  }

  onSave(): void {
    const contactsId = this.route.snapshot.paramMap.get('id');
    if (contactsId) {
      this.contactService.edit(this.contact).subscribe(() => {
        this.router.navigate(['/contacts']);
        this.snackbar.open('Contact Saved', this.contact.firstName + ' ' + this.contact.lastName, {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'center'
        });
      });
    } else {
      this.contactService.create(this.contact).subscribe(() => {
        this.router.navigate(['/contacts']);
        this.snackbar.open('Contact Created', this.contact.firstName + ' ' + this.contact.lastName, {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'center'
        });
      });
    }
  }
}
