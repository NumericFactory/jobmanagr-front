import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsListComponent } from './jobs-list.component';
import { JobGateway } from 'src/app/core/ports/jobs.gateway';
import { JobService } from 'src/app/core/adapters/job.service';

describe('JobsListComponent', () => {
  let component: JobsListComponent;
  let fixture: ComponentFixture<JobsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobsListComponent],
      providers: [{ provide: JobGateway, useClass: JobService }]
    });
    fixture = TestBed.createComponent(JobsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should not have any job', () => {
    expect(fixture.nativeElement.textContent).toContain('No jobs!');
  });
});
