import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { JobModel } from 'src/app/core/models/job.model';
import { TalentModel } from 'src/app/core/models/talent.model';

@Component({
  selector: 'app-mailto',
  templateUrl: './mailto.component.html',
  styleUrls: ['./mailto.component.css'],
})
export class MailtoComponent {
  @Input() to!: TalentModel;
  @Input() subject!: string;
  @Input() content!: JobModel;

  formattedContent: string = '';

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes['content'].currentValue);
    let mission = changes['content'].currentValue;
    let formattedContent = `Hello ${this.to.first} :)
Je recherche un.e formateur.trice / mission de ${mission.title}
Mission 100% distanciel

Details :  
👉 Durée ${mission.duration} jours 
👉 Public 10 apprenants en reconversion professionnelle (niveau intermédiaire)
👉 Début de mission  ${mission.startDate}
👉 Horaires 9h00 - 17h15
👉 Paris

Si intéressé.e, je suis disponible pour en parler de vive voix. Qu'en pensez-vous ?
Frederic Lossignol / Airskill
☎️ 06 88 36 22 55

`;
    this.formattedContent = encodeURI(formattedContent);
  }
  ngOnInit() { }
}
