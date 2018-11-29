import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Contact} from '../contact';
import {ContactService} from '../services/contact.service';
import {Router} from '@angular/router';
import {MatDialog, MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-contact-list-item',
  templateUrl: './contact-list-item.component.html',
  styleUrls: ['./contact-list-item.component.css']
})
export class ContactListItemComponent implements OnInit {

  @Input() contact: Contact;
  @Output() contactDeleted: EventEmitter<any>;

  constructor(private contactService: ContactService, private router: Router, private snackbar: MatSnackBar, private dialog: MatDialog) {
    this.contactDeleted = new EventEmitter();
  }

  ngOnInit() {
    // console.log(this.contact);
  }


  editItem() {
    this.router.navigate(['contacts/edit', this.contact.id]);
  }

  deleteItem() {
    this.removeContact();
  }

  removeContact() {
    this.contactService.deleteContact(this.contact).subscribe(() => {
      this.snackbar.open('Contact removed',
        this.contact.firstName + ' ' + this.contact.lastName,
        {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'center'
        });
      this.contactDeleted.emit(this.contact);
    });
  }


}


