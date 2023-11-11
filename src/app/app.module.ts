import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { NavComponent } from './shared/components/nav/nav.component';

import { JobsListComponent } from 'src/app/views/jobs/jobs-list/jobs-list.component';
import { ModalDialogAddJobFormComponent } from 'src/app/views/jobs/add-job-form/add-job-form.component';
import { TalentsListComponent } from 'src/app/views/talents/talents-list/talents-list.component';

import { MailtoComponent } from './shared/components/mailto/mailto.component';
import { ContextmenuComponent } from './shared/components/contextmenu/contextmenu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { JobGateway } from './core/ports/jobs.gateway';
import { JobService } from './core/adapters/job.service';
import { TalentService } from './core/adapters/talent.service';
import { TalentGateway } from './core/ports/talents.gateway';
import { AddTalentFormComponent } from './views/talents/add-talent-form/add-talent-form.component';
import { AddCustomerFormComponent } from './views/customers/add-customer-form/add-customer-form.component';
import { CustomerGateway } from './core/ports/customers.gateway';
import { CustomerService } from './core/adapters/customer.service';

@NgModule({

  declarations: [
    AppComponent,
    NavComponent,
    // views jobs
    JobsListComponent,
    ModalDialogAddJobFormComponent,
    // views talents
    TalentsListComponent,
    AddTalentFormComponent,
    // views customers
    AddCustomerFormComponent,
    ContextmenuComponent,
    MailtoComponent,
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [
    { provide: JobGateway, useClass: JobService },
    { provide: TalentGateway, useClass: TalentService },
    { provide: CustomerGateway, useClass: CustomerService },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
