import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, map } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { JobModel } from 'src/app/core/models/job.model';
import { IparamsGetJobs, JobGateway } from 'src/app/core/ports/jobs.gateway';
import { SkillModel } from '../models/skill.model';

@Injectable({
  providedIn: 'root',
})
export class JobService implements JobGateway {
  private apiURL: string = environment.apiURL;

  private _jobs$$ = new BehaviorSubject<JobModel[]>([]);
  public jobs$ = this._jobs$$.asObservable();

  private _selectedJob$$ = new Subject<JobModel>();
  public selectedJob$ = this._selectedJob$$.asObservable();

  constructor(private http: HttpClient) { }

  getJobs(options: IparamsGetJobs): void {
    let params = new HttpParams();
    if (options.withCustomer) params = params.append('withcustomer', options.withCustomer);
    this.http
      .get(this.apiURL + '/jobs', { params })
      .pipe(
        map(
          (response: any) => response.data.map((job: any) => new JobModel(job)))
      )
      .subscribe((jobs: JobModel[]) => this._jobs$$.next(jobs));
  }

  getJob(job: JobModel): void {
    this._selectedJob$$.next(job);
  }

  addNewJob(job: JobModel): void {
    let jobs = this._jobs$$.getValue();
    this.http
      .post(this.apiURL + '/jobs', job)
      .pipe(map(
        (response: any) => response.data.map((job: any) => new JobModel(job)))
      )
      .subscribe((job: JobModel) => {
        jobs = [...jobs, job];
        this._jobs$$.next(jobs)
      });
  }

  updateJob(jobId: number, jobData: JobModel) {
    let jobs = this._jobs$$.getValue();
    this.http
      .patch(this.apiURL + `/jobs/${jobId}`, jobData)
      .pipe(
        map((response: any) => new JobModel(response.data) as JobModel)
      )
      .subscribe((updatedJob: JobModel) => {
        jobs = jobs.map(job => job.id === updatedJob.id ? job = updatedJob : job);
        this._jobs$$.next(jobs);
      });
  }


  deleteJob(jobId: number): void {
    let jobs = this._jobs$$.getValue();
    this.http
      .delete(this.apiURL + '/jobs/' + jobId)
      .subscribe((response: any) => {
        if (response.id) {
          jobs = jobs.filter((job) => job.id !== jobId);
          this._jobs$$.next(jobs);
        }
      });
  }

  addJobSkill(job: JobModel, skill: SkillModel): void {
    this.http.post(this.apiURL + '/jobs/' + job.id + '/skills', { skill_id: skill.id })
      .pipe(
        map((response: any) => response.data.map((skill: any) => new SkillModel(skill)))
      )
      .subscribe((skills: SkillModel[]) => {
        job.skills = [...skills];
        let jobs = this._jobs$$.getValue();
        jobs = jobs.map((item) => item.id === job.id ? job : item);
        this._jobs$$.next(jobs);
      });
  }

  removeJobSkill(job: JobModel, skill: SkillModel): void {
    this.http.delete(this.apiURL + '/jobs/' + job.id + '/skills/' + skill.id)
      .subscribe((response: any) => {
        job.skills = job.skills.filter((s) => s.id !== response.id);
        let jobs = this._jobs$$.getValue();
        jobs = jobs.map((item) => item.id === job.id ? job : item);
        this._jobs$$.next(jobs);
      });
  }


}
