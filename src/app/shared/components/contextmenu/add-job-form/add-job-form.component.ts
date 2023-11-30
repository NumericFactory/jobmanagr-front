import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JobGateway } from 'src/app/core/ports/jobs.gateway';

@Component({
  selector: 'app-job-form',
  templateUrl: './add-job-form.component.html',
  styleUrls: ['./add-job-form.component.css'],
})
export class AddJobFormComponent {
  jobForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private jobSvc: JobGateway,
  ) {
    this.jobForm = this.fb.group({
      title: ['', Validators.required],
      customer_id: ['', Validators.required],
      duration: [''],
      startDate: [''],
      tjmin: [''],
      tjmax: [''],
      info: [''],
      isRemote: ['', Validators.required],
      city: [''],
      country: [''],
      status: [''],
    });
  }

  submitJobForm() {
    this.jobSvc.addNewJob(this.jobForm.value);
  }
}
