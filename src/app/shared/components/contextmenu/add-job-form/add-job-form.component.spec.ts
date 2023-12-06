import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJobFormComponent } from './add-job-form.component';
import { JobGateway } from 'src/app/core/ports/jobs.gateway';
import { JobService } from 'src/app/core/adapters/job.service';
import { FormBuilder } from '@angular/forms';

describe('ModalDialogComponent', () => {
  let component: AddJobFormComponent;
  let fixture: ComponentFixture<AddJobFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddJobFormComponent],
      providers: [{ provide: JobGateway, useClass: JobService }, FormBuilder]

    });
    fixture = TestBed.createComponent(AddJobFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
