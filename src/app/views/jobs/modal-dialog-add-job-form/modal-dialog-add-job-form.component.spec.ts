import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDialogAddJobFormComponent } from './modal-dialog-add-job-form.component';
import { JobGateway } from 'src/app/core/ports/jobs.gateway';
import { JobService } from 'src/app/core/adapters/job.service';
import { FormBuilder } from '@angular/forms';

describe('ModalDialogComponent', () => {
  let component: ModalDialogAddJobFormComponent;
  let fixture: ComponentFixture<ModalDialogAddJobFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalDialogAddJobFormComponent],
      providers: [{ provide: JobGateway, useClass: JobService }, FormBuilder]

    });
    fixture = TestBed.createComponent(ModalDialogAddJobFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
