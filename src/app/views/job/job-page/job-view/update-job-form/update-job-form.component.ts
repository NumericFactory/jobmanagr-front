import { Component, Input, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { JobModel } from 'src/app/core/models/job.model';
import { CustomerGateway } from 'src/app/core/ports/customers.gateway';
import { JobGateway } from 'src/app/core/ports/jobs.gateway';
import { JobViewComponent } from '../job-view.component';
import { CustomerModel } from 'src/app/core/models/customer.model';
import { Observable } from 'rxjs';
import { SkillModel } from 'src/app/core/models/skill.model';
import { SkillGateway } from 'src/app/core/ports/skills.gateway';

@Component({
  selector: 'update-job-form',
  templateUrl: './update-job-form.component.html',
  styleUrls: ['./update-job-form.component.css']
})
export class UpdateJobFormComponent {
  jobForm!: FormGroup;
  customers: CustomerModel[] = [];
  selectedCustomer: CustomerModel | undefined;

  allskills: SkillModel[] = [];

  constructor(
    private fb: FormBuilder,
    private jobGateway: JobGateway,
    public skillSvc: SkillGateway,
    public customerSvc: CustomerGateway,
    public dialogRef: MatDialogRef<UpdateJobFormComponent>,
    @Inject(MAT_DIALOG_DATA) public job: JobModel) { }

  ngOnInit(): void {

    this.customerSvc.customers$.subscribe((customers) => {
      this.customers = customers;
    });

    this.customerSvc.getCustomers();

    this.skillSvc.skills$.subscribe((skills) => {
      this.allskills = skills;
    });


    this.jobForm = this.fb.group({
      title: [this.job.title, Validators.required],
      customer_id: [this.job.customer_id, [Validators.required]],
      duration: [this.job.duration],
      startDate: [this.job.startDate],
      tjmin: [this.job.tjmin],
      tjmax: [this.job.tjmax],
      description: [this.job.description],
      isRemote: [this.job.isRemote, Validators.required],
      city: [this.job.city],
      country: [this.job.country],
      status: [this.job.status],
    });

    this.jobForm.controls['customer_id'].valueChanges.subscribe((value) => {
      this.selectedCustomer = this.customers.find((customer) => customer.id === Number(value));
    });

  }

  updateJobFormAction() {
    this.setUpdatedLocalJob();
    this.jobGateway.updateJob(this.job.id, this.jobForm.value);
  }

  setUpdatedLocalJob() {
    this.job.title = this.jobForm.value.title;
    this.job.customer_id = Number(this.jobForm.value.customer_id);
    this.job.duration = this.jobForm.value.duration;
    this.job.startDate = this.jobForm.value.startDate;
    this.job.tjmin = this.jobForm.value.tjmin;
    this.job.tjmax = this.jobForm.value.tjmax;
    this.job.description = this.jobForm.value.description;
    this.job.isRemote = this.jobForm.value.isRemote;
    this.job.city = this.jobForm.value.city;
    this.job.country = this.jobForm.value.country;
    this.job.status = this.jobForm.value.status;
    this.job.customer = this.selectedCustomer ? this.selectedCustomer : this.job.customer;
  }

  addSkillAction($event: SkillModel) {
    let skill = $event;
    this.job.skills.find(skill => skill.id === $event.id)
      ? console.log('skill already added')
      //: this.talent.skills.push(skill);
      : this.jobGateway.addJobSkill(this.job, skill);
  }

  removeSkillAction(skill: SkillModel) {
    this.jobGateway.removeJobSkill(this.job, skill);
  }


}
