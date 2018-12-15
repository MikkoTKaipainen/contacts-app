import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Contact} from '../contact';
import {ContactService} from '../services/contact.service';
import {Router} from '@angular/router';
import {MatDialog, MatSnackBar} from '@angular/material';
import {ConfirmDialogComponent} from '../../ui/confirm-dialog/confirm-dialog.component';

export interface DialogData {
  contact: Contact;
}

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
  }


  onEditItem() {
    this.router.navigate(['contacts/edit', this.contact.id]);
  }

  onDeleteItem() {
    this.confirmDialog();
  }

  confirmDialog(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      height: '300px',
      data: {contact: this.contact}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.removeContact();
      }
    });
  }

  removeContact() {
    this.contactService.delete(this.contact).subscribe(() => {
      this.snackbar.open('Contact removed',
        this.contact.firstName + ' ' + this.contact.lastName,
        {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'center'
        });
      this.contactDeleted.emit(this.contact);
    });
  }

  navigateToMap() {
    this.router.navigate(['contacts/map', {streetAddress: this.contact.streetAddress, city: this.contact.city}]);
  }


}


