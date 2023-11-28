import { JobModel } from '../models/job.model';
import { Subject, BehaviorSubject, Observable } from 'rxjs';

export interface IparamsGetJobs {
  withCustomer?: boolean;
}

export abstract class JobGateway {
  abstract jobs$: Observable<JobModel[]>;
  abstract selectedJob$: Observable<JobModel>;

  abstract getJobs(params?: IparamsGetJobs): void;

  abstract getJob(job: JobModel): void;

  abstract addNewJob(job: JobModel): void;

  abstract deleteJob(jobId: number): void;
}
