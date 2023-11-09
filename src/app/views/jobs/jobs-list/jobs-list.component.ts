import { Component } from '@angular/core';
import { JobModel } from 'src/app/core/models/job.model';
import { JobGateway } from 'src/app/core/ports/jobs.gateway';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.css'],
})
export class JobsListComponent {
  jobs: JobModel[] = [];
  jobSelected!: JobModel;

  constructor(private jobGateway: JobGateway) {}

  ngOnInit() {
    // request
    this.jobGateway.getJobs();

    this.jobGateway.jobs$.subscribe({
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
      this.jobGateway.getJob(this.jobSelected);
    } else {
      this.jobSelected = job;
      this.jobGateway.getJob(job);
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
