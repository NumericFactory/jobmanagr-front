import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { JobModel } from '../../models/job.model';

@Component({
  selector: 'app-mailto',
  templateUrl: './mailto.component.html',
  styleUrls: ['./mailto.component.css'],
})
export class MailtoComponent {
  @Input() to!: string;
  @Input() subject!: string;
  @Input() content!: JobModel;

  formattedContent: string = '';

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes['content'].currentValue);
    let mission = changes['content'].currentValue;
    this.formattedContent = `Hello :) %0A
Nous recherchons un.e formateur.trice ${mission.title}%0A%0A
Details :  %0A
- Durée : ${mission.durationInDays} jours %0A
- Modalités : Distanciel %0A
- Lieu : Paris %0A

`;
  }
  ngOnInit() {}
}
