import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { JobModel } from 'src/app/core/models/job.model';
import { JobViewComponent } from '../job-view/job-view.component';

@Component({
  selector: 'job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.css']
})
export class JobCardComponent {
  @Input() job!: JobModel;

  constructor(private dialog: MatDialog) { }


  viewJobDetailAction(ev: Event, job: JobModel) {
    ev.preventDefault();
    const dialogRef = this.dialog.open(JobViewComponent, {
      width: '65rem',
      maxWidth: '50vw;',
      minHeight: '85vh',
      data: job,
      position: { top: '20px' },
    });
    dialogRef.afterClosed().subscribe((result) => {
    });
  }

}
