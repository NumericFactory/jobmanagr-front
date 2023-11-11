import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { JobModel } from 'src/app/core/models/job.model';
import { JobGateway } from 'src/app/core/ports/jobs.gateway';

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

  getJobs(): void {
    this.http
      .get(this.apiURL + '/jobs')
      .subscribe((response: any) => this._jobs$$.next(response.data));
  }

  getJob(job: JobModel): void {
    this._selectedJob$$.next(job);
  }

  addNewJob(job: JobModel): void {
    let jobs = this._jobs$$.getValue();
    this.http
      .post(this.apiURL + '/jobs', job)
      .subscribe((response: any) => {
        jobs = [...jobs, response.data];
        this._jobs$$.next(jobs)
      });
  }

  deleteJob(jobId: number): void {
    let jobs = this._jobs$$.getValue();
    this.http
      .delete(this.apiURL + '/jobs/' + jobId)
      .subscribe((response: any) => {
        jobs = jobs.filter((job) => job.id !== jobId);
        this._jobs$$.next(jobs);
      });
  }
}
