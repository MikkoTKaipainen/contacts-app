import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ContactListComponent} from './contact/contact-list/contact-list.component';
import {ContactListItemComponent} from './contact/contact-list-item/contact-list-item.component';
import {ContactService} from './contact/services/contact.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToolbarComponent} from './ui/toolbar/toolbar/toolbar.component';
import {
  MatButtonModule,
  MatCardModule, MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSidenavModule, MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';
import {AvatarModule} from 'ngx-avatar';
import {NgxPaginationModule} from 'ngx-pagination';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RouterModule, Routes} from '@angular/router';
import {ContactDetailComponent} from './contact/contact-detail/contact-detail.component';
import {FormsModule} from '@angular/forms';
import {ToolbarService} from './ui/toolbar/toolbar.service';


const appRoutes: Routes = [
  {path: 'contacts', component: ContactListComponent},
  {path: 'contacts/new', component: ContactDetailComponent},
  {path: 'contacts/edit/:id', component: ContactDetailComponent},
  {path: '', redirectTo: '/contacts', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactListItemComponent,
    ToolbarComponent,
    ContactDetailComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    AvatarModule,
    MatCardModule,
    NgxPaginationModule,
    FlexLayoutModule,
    RouterModule.forRoot(appRoutes),
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatSnackBarModule,
    MatDialogModule,
  ],
  providers: [
    ContactService,
    ToolbarService
  ],

  bootstrap: [AppComponent]
})
export class AppModule {
}
