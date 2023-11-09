import { JobModel } from '../models/job.model';
import { Subject, BehaviorSubject, Observable } from 'rxjs';

export abstract class JobGateway {
  abstract jobs$: Observable<JobModel[]>;
  abstract selectedJob$: Observable<JobModel>;

  abstract getJobs(): void;

  abstract getJob(job: JobModel): void;

  abstract addNewJob(job: JobModel): void;

  abstract deleteJob(jobId: number): void;
}
