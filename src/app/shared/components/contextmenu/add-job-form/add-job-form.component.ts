import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerGateway } from 'src/app/core/ports/customers.gateway';
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
    public customerSvc: CustomerGateway

  ) {
    this.jobForm = this.fb.group({
      title: ['', Validators.required],
      customer_id: ['', Validators.required],
      duration: [''],
      startDate: [''],
      tjmin: [''],
      tjmax: [''],
      description: [''],
      isRemote: ['', Validators.required],
      city: [''],
      country: [''],
      status: [''],
    });
  }

  ngOnInit(): void {
    this.customerSvc.getCustomers();
  }

  submitNewJobFormAction() {
    this.jobSvc.addNewJob(this.jobForm.value);
  }
}
