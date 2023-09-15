import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { TalentsListComponent } from './talents/talents-list/talents-list.component';
import { TalentsFormComponent } from './talents/talents-form/talents-form.component';
import { JobsListComponent } from './jobs/jobs-list/jobs-list.component';
import { JobsFormComponent } from './jobs/jobs-form/jobs-form.component';
import { MailtoComponent } from './shared/components/mailto/mailto.component';
import { ContextmenuComponent } from './shared/components/contextmenu/contextmenu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalDialogComponent } from './shared/components/modal-dialog/modal-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TalentsListComponent,
    TalentsFormComponent,
    JobsListComponent,
    JobsFormComponent,
    MailtoComponent,
    ContextmenuComponent,
    ModalDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
