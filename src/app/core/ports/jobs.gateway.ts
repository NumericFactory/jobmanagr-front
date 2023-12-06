import { JobModel } from '../models/job.model';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { SkillModel } from '../models/skill.model';

export interface IparamsGetJobs {
  withCustomer?: boolean;
}

export abstract class JobGateway {
  abstract jobs$: Observable<JobModel[]>;
  abstract selectedJob$: Observable<JobModel>;

  abstract getJobs(params?: IparamsGetJobs): void;

  abstract getJob(job: JobModel): void;

  abstract addNewJob(job: JobModel): void;

  abstract updateJob(jobId: number, job: JobModel): void;

  abstract deleteJob(jobId: number): void;

  abstract addJobSkill(talent: JobModel, skill: SkillModel): void
  abstract removeJobSkill(talent: JobModel, skill: SkillModel): void


}
