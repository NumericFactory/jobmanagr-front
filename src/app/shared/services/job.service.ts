import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { jobsData } from '../../data';
import { JobModel } from '../models/job.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  private apiURL: string = environment.apiURL;
  data = [];
  private jobs$ = new BehaviorSubject<JobModel[]>([]);
  public jobs = this.jobs$.asObservable();

  private job$ = new Subject<JobModel>();
  public job = this.job$.asObservable();

  constructor(private http: HttpClient) {}

  getJobs() {
    this.http
      .get(this.apiURL + '/jobs')
      .subscribe((response: any) => this.jobs$.next(response.data));
  }

  getJob(job: JobModel) {
    this.job$.next(job);
  }

  addNewJob(job: JobModel) {
    let jobs = this.jobs$.getValue();
    let newjobs = [...jobs, job];
    return this.http.post(this.apiURL + '/jobs', job);
  }
}
