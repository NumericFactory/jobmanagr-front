import { Component } from '@angular/core';
import { JobModel } from 'src/app/shared/models/job.model';
import { JobService } from 'src/app/shared/services/job.service';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.css'],
})
export class JobsListComponent {
  jobs: JobModel[] = [];
  jobSelected!: JobModel;

  constructor(private jobSvc: JobService) {}

  ngOnInit() {
    // request
    this.jobSvc.getJobs();

    this.jobSvc.jobs.subscribe({
      next: (data) => (this.jobs = data),
    });
  }

  selectJob(job: JobModel) {
    if (this.jobSelected == job) {
      this.jobSelected = {
        title: '',
        duration: 0,
        tjmin: 0,
        tjmax: 0,
        customer_id: 0,
        customer: { name: '', contacts: [] },
        specialities: [],
        status: 0,
      };
      this.jobSvc.getJob(this.jobSelected);
    } else {
      this.jobSelected = job;
      this.jobSvc.getJob(job);
    }
  }

  getStatusTitleText(job: JobModel) {
    let text = '';
    switch (job.status) {
      case 0:
        text = 'à traiter';
        break;
      case 1:
        text = 'en cours';
        break;
      case 2:
        text = 'contractualisé';
        break;
      case 3:
        text = 'mission terminée';
        break;
      default:
        text = 'à traiter';
    }
    return text;
  }
}
