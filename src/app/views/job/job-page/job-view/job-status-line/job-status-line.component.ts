import { Component, Input } from '@angular/core';

@Component({
  selector: 'job-status-line',
  templateUrl: './job-status-line.component.html',
  styleUrls: ['./job-status-line.component.css']
})
export class JobStatusLineComponent {

  @Input() jobStatus!: number;

  constructor() { }

  ngOnInit(): void {
    this.jobStatus = Number(this.jobStatus);
  }


}
