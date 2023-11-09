import { Component, OnInit } from '@angular/core';
import { TalentModel } from 'src/app/core/models/talent.model';
import { JobModel } from 'src/app/core/models/job.model';
import { TalentGateway } from 'src/app/core/ports/talents.gateway';
import { JobGateway } from 'src/app/core/ports/jobs.gateway';

@Component({
  selector: 'app-talents-list',
  templateUrl: './talents-list.component.html',
  styleUrls: ['./talents-list.component.css'],
})
export class TalentsListComponent implements OnInit {
  talents: TalentModel[] = [];
  selectedJob!: JobModel;

  constructor(
    private talentGateway: TalentGateway,
    private jobGateway: JobGateway,
  ) {}

  ngOnInit() {
    // request
    this.talentGateway.getTalents();

    this.talentGateway.talents$.subscribe({
      next: (data: any) => (this.talents = data),
    });

    this.jobGateway.selectedJob$.subscribe({
      next: (job) => (this.selectedJob = job),
    });
  }

  formatPhoneNumber(talent: TalentModel): string {
    let sentence = `Hello ${talent.first}, Je recherche un formateur.trice`;
    let phone = talent.phone.replaceAll(' ', '').replace('0', '33');
    return `https://wa.me/${phone}?text=${sentence}`;
  }

  getText(talent: TalentModel, job: JobModel) {}

  /**
   * compute Margin
   * for a selected job by talent TJM
   */
  computeMarginMinPerDay(talent: TalentModel) {
    if (talent.tjm) {
      return this.selectedJob.tjmin - talent.tjm;
    } else {
      return 0;
    }
  }
  computeMarginMaxPerDay(talent: TalentModel) {
    if (talent.tjm) {
      return this.selectedJob.tjmax - talent.tjm;
    } else {
      return 0;
    }
  }
  computeMarginMinPerJob(talent: TalentModel) {
    if (talent.tjm) {
      let duration = this.selectedJob.duration;
      return this.computeMarginMinPerDay(talent) * duration;
    } else {
      return 0;
    }
  }
  computeMarginMaxPerJob(talent: TalentModel) {
    if (talent.tjm) {
      let duration = this.selectedJob.duration;
      return this.computeMarginMaxPerDay(talent) * duration;
    } else {
      return 0;
    }
  }
}
