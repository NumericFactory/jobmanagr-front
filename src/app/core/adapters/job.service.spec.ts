import { TestBed } from '@angular/core/testing';

import { JobService } from './job.service';

describe('JobService', () => {
  let service: JobService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('should have 0 job at starts', () => {
  //   service.jobs$.subscribe((jobs) => {
  //     expect(jobs.length).toEqual(0);
  //   });
  // });

  // it('should have a jobs when getJobs is called', () => {
  //   service.getJobs();
  //   service.jobs$.subscribe((jobs) => {
  //     expect(jobs.length).toBeGreaterThan(0);
  //   });
  // });


});
