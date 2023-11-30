import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsListComponent } from './talent-page/jobs/jobs-list/jobs-list.component';
import { TalentsListComponent } from './talent-page/talents/talents-list/talents-list.component';
import { UpdateTalentFormComponent } from './talent-page/talents/talent-view/update-talent-form/update-talent-form.component';
import { MailtoComponent } from 'src/app/shared/components/mailto/mailto.component';
import { TalentViewComponent } from './talent-page/talents/talent-view/talent-view.component';
import { TalentResumeComponent } from './talent-page/talents/talent-view/talent-resume/talent-resume.component';
import { TalentNotesComponent } from './talent-page/talents/talent-view/talent-notes/talent-notes.component';
import { TalentContractsComponent } from './talent-page/talents/talent-view/talent-contracts/talent-contracts.component';
import { AddSkillsComponent } from 'src/app/shared/components/add-skills/add-skills.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TalentRoutingModule } from './talent-routing.module';
import { TalentPageComponent } from './talent-page/talent-page.component';

@NgModule({
  declarations: [
    TalentPageComponent,
    // views jobs
    JobsListComponent,
    // views talents
    TalentsListComponent,
    TalentViewComponent,
    UpdateTalentFormComponent,
    TalentResumeComponent,
    TalentNotesComponent,
    TalentContractsComponent,
    // views customers
    MailtoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AddSkillsComponent,
    TalentRoutingModule
  ]
})
export class TalentModule { }
