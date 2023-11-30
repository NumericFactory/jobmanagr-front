import { NgModule } from '@angular/core';
import { MaterialModule } from './modules/material/material.module';
import { AddJobFormComponent } from './components/contextmenu/add-job-form/add-job-form.component';
import { AddTalentFormComponent } from './components/contextmenu/add-talent-form/add-talent-form.component';
import { AddCustomerFormComponent } from './components/contextmenu/add-customer-form/add-customer-form.component';
import { SearchTalentComponent } from './components/search-talent/search-talent.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputFormTelComponent } from './components/input-form-tel/input-form-tel.component';
import { CommonModule } from '@angular/common';
import { AddSkillsComponent } from './components/add-skills/add-skills.component';



@NgModule({
  declarations: [
    AddJobFormComponent,
    AddTalentFormComponent,
    AddCustomerFormComponent,
    SearchTalentComponent,
    InputFormTelComponent,

  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    AddSkillsComponent,
  ],
  exports: [
    MaterialModule,
    ReactiveFormsModule,
    AddTalentFormComponent,
    AddCustomerFormComponent,
    SearchTalentComponent,
    InputFormTelComponent,

  ]
})
export class SharedModule { }
