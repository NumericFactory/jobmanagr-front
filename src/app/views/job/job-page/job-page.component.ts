import {
  CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag,
  CdkDropList
} from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { JobModel } from 'src/app/core/models/job.model';
import { JobGateway } from 'src/app/core/ports/jobs.gateway';


@Component({
  selector: 'app-job-page',
  templateUrl: './job-page.component.html',
  styleUrls: ['./job-page.component.css']
})
export class JobPageComponent {

  jobs: JobModel[] = [];
  step_0: JobModel[] = [];
  step_1: JobModel[] = [];
  step_2: JobModel[] = [];
  step_3: JobModel[] = [];
  step_4: JobModel[] = [];

  idCdkListsToStatusId = ['cdk-drop-list-0', 'cdk-drop-list-1', 'cdk-drop-list-2', 'cdk-drop-list-3', 'cdk-drop-list-4'];

  constructor(private jobGateway: JobGateway) { }

  ngOnInit(): void {
    this.jobGateway.getJobs({ withCustomer: true });
    this.jobGateway.jobs$.subscribe({

      next: (data) => {
        this.jobs = data;
        this.step_0 = this.jobs.filter((job) => job.status == 0);
        this.step_1 = this.jobs.filter((job) => job.status == 1);
        this.step_2 = this.jobs.filter((job) => job.status == 2);
        this.step_3 = this.jobs.filter((job) => job.status == 3);
        this.step_4 = this.jobs.filter((job) => job.status == 4);
      }
    });
  }


  drop(event: CdkDragDrop<JobModel[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {

      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      let jobId = event.container.data[event.currentIndex].id;
      let status: number = this.getListIndex(jobId);
      event.container.data[event.currentIndex].status = status;

      this.jobGateway.updateJob(
        event.container.data[event.currentIndex].id,
        event.container.data[event.currentIndex]);
    }
  }


  getListIndex(jobId: number): number {
    if (this.step_0.find((job) => job.id === jobId)) return 0;
    if (this.step_1.find((job) => job.id === jobId)) return 1;
    if (this.step_2.find((job) => job.id === jobId)) return 2;
    if (this.step_3.find((job) => job.id === jobId)) return 3;
    if (this.step_4.find((job) => job.id === jobId)) return 4;
    return 0;
  }


}
