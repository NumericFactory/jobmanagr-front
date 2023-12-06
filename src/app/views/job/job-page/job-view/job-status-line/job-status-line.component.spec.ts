import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobStatusLineComponent } from './job-status-line.component';

describe('JobStatusLineComponent', () => {
  let component: JobStatusLineComponent;
  let fixture: ComponentFixture<JobStatusLineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobStatusLineComponent]
    });
    fixture = TestBed.createComponent(JobStatusLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
