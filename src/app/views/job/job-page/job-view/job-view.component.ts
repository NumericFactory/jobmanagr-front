import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { JobModel } from 'src/app/core/models/job.model';
import { UpdateJobFormComponent } from './update-job-form/update-job-form.component';
import { JobService } from 'src/app/core/adapters/job.service';

type editableForm = 'jobForm' | 'customerForm' | null;

@Component({
  selector: 'app-job-view',
  templateUrl: './job-view.component.html',
  styleUrls: ['./job-view.component.css']
})
export class JobViewComponent {

  editableFormName: editableForm = null;

  constructor(
    public dialogRef: MatDialogRef<JobViewComponent>,
    @Inject(MAT_DIALOG_DATA) public job: JobModel,
    public dialog: MatDialog
  ) { }


  setEditableJob(event: Event, job: JobModel) {
    this.openUpdateJobFormModal(event, this.job);
  }

  setEditableCustomer() {
    this.editableFormName !== 'customerForm'
      ? this.editableFormName = 'customerForm'
      : this.editableFormName = null;
  }

  openUpdateJobFormModal(ev: Event, job: JobModel) {
    ev.preventDefault();
    const dialogRef = this.dialog.open(UpdateJobFormComponent, {
      disableClose: true,
      width: '65rem',
      maxWidth: '50vw;',
      data: this.job,
      position: { top: '20px' },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
    });

  }
}
