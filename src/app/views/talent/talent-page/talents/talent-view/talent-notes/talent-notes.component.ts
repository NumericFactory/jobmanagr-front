import { Component, Input } from '@angular/core';
import { TalentModel } from 'src/app/core/models/talent.model';

@Component({
  selector: 'talent-notes',
  templateUrl: './talent-notes.component.html',
  styleUrls: ['./talent-notes.component.css']
})
export class TalentNotesComponent {

  @Input() talent!: TalentModel;

}
