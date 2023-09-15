import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.css'],
})
export class ModalDialogComponent implements OnInit {
  jobForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private jobSvc: JobService,
  ) {
    this.jobForm = this.fb.group({
      title: [''],
      customer: this.fb.group({
        name: [''],
      }),
      duration: 0,
      startDate: new Date(),
      tjmin: [''],
      tjmax: [''],
      info: [''],
      isRemote: false,
      status: 0,
    });
  }

  ngOnInit() {}

  submitJobForm() {
    console.log(this.jobForm);
    this.jobSvc
      .addNewJob(this.jobForm.value)
      .subscribe((response: any) => console.log(response.data));
  }
}
