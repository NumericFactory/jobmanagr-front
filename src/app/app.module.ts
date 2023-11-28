import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';

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
import { InputFormTelComponent } from './shared/components/input-form-tel/input-form-tel.component';
import { SearchTalentComponent } from './shared/components/search-talent/search-talent.component';
import { SkillGateway } from './core/ports/skills.gateway';
import { SkillService } from './core/adapters/skill.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UpdateTalentFormComponent } from './views/talents/talent-view/update-talent-form/update-talent-form.component';
import { TalentViewComponent } from './views/talents/talent-view/talent-view.component';
import { TalentResumeComponent } from './views/talents/talent-view/talent-resume/talent-resume.component';
import { TalentNotesComponent } from './views/talents/talent-view/talent-notes/talent-notes.component';
import { TalentContractsComponent } from './views/talents/talent-view/talent-contracts/talent-contracts.component';
import { AddSkillsComponent } from './shared/components/add-skills/add-skills.component';

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
    UpdateTalentFormComponent,
    // views customers
    AddCustomerFormComponent,
    ContextmenuComponent,
    MailtoComponent,
    InputFormTelComponent,
    SearchTalentComponent,
    TalentViewComponent,
    TalentResumeComponent,
    TalentNotesComponent,
    TalentContractsComponent,

  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatChipsModule,
    AddSkillsComponent
  ],
  providers: [
    { provide: JobGateway, useClass: JobService },
    { provide: TalentGateway, useClass: TalentService },
    { provide: SkillGateway, useClass: SkillService },
    { provide: CustomerGateway, useClass: CustomerService },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
