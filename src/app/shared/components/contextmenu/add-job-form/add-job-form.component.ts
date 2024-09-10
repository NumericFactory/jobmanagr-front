import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
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
    public customerSvc: CustomerGateway,
    public dialogRef: MatDialogRef<AddJobFormComponent>

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
    if (this.jobForm.valid) {
      this.jobSvc.addNewJob(this.jobForm.value);
      this.dialogRef.close()
    }
    else {
      console.log("Erreur" + this.jobForm.errors)
    }
  }
}
