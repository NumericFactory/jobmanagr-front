import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobPageComponent } from './job-page/job-page.component';
import { JobRoutingModule } from './job-routing.module';
import { JobCardComponent } from './job-page/job-card/job-card.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import { JobViewComponent } from './job-page/job-view/job-view.component';
import { UpdateJobFormComponent } from './job-page/job-view/update-job-form/update-job-form.component';
import { JobStatusLineComponent } from './job-page/job-view/job-status-line/job-status-line.component';
import { AddSkillsComponent } from 'src/app/shared/components/add-skills/add-skills.component';



@NgModule({
  declarations: [
    JobPageComponent,
    JobCardComponent,
    JobViewComponent,
    UpdateJobFormComponent,
    JobStatusLineComponent
  ],
  imports: [
    CommonModule,
    JobRoutingModule,
    SharedModule,
    AddSkillsComponent,
    CdkDropList, CdkDrag
  ]
})
export class JobModule { }
