import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TalentModel } from 'src/app/core/models/talent.model';

@Component({
  selector: 'app-talent-view',
  templateUrl: './talent-view.component.html',
  styleUrls: ['./talent-view.component.css']
})
export class TalentViewComponent {

  tab: number = 1;

  constructor(
    public dialogRef: MatDialogRef<TalentViewComponent>,
    @Inject(MAT_DIALOG_DATA) public talent: TalentModel,
  ) { }


  changeTab(ev: Event, tab: number) {
    ev.preventDefault();
    this.tab = tab;
  }

}
