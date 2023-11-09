import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

import { JobsListComponent } from 'src/app/views/jobs/jobs-list/jobs-list.component';
import { ModalDialogAddJobFormComponent } from 'src/app/views/jobs/modal-dialog-add-job-form/modal-dialog-add-job-form.component';
import { TalentsListComponent } from 'src/app/views/talents/talents-list/talents-list.component';
import { TalentsFormComponent } from 'src/app/views/talents/talents-form/talents-form.component';

import { MailtoComponent } from './shared/components/mailto/mailto.component';
import { ContextmenuComponent } from './shared/components/contextmenu/contextmenu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { JobGateway } from './core/ports/jobs.gateway';
import { JobService } from './core/adapters/job.service';
import { TalentService } from './core/adapters/talent.service';
import { TalentGateway } from './core/ports/talents.gateway';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,

    TalentsListComponent,
    JobsListComponent,

    MailtoComponent,
    ContextmenuComponent,
    ModalDialogAddJobFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
  providers: [
    { provide: JobGateway, useValue: JobService },
    { provide: TalentGateway, useValue: TalentService },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
