import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { TalentModel } from 'src/app/core/models/talent.model';
import { JobGateway } from 'src/app/core/ports/jobs.gateway';
import { TalentGateway } from 'src/app/core/ports/talents.gateway';

@Component({
  selector: 'talent-contracts',
  templateUrl: './talent-contracts.component.html',
  styleUrls: ['./talent-contracts.component.css']
})
export class TalentContractsComponent {
  @Input() talent!: TalentModel;
  TOTAL_RESUMES: number = 3;
  deleteConfirmationDialogRef: DialogRef<ConfirmDeleteDialog> | any;

  constructor(
    private talentGateway: TalentGateway,
    public jobGateway: JobGateway,
    public dialog: MatDialog) { }


  uploadContractAction(event: Event, cvinput: HTMLInputElement) {
    //event.preventDefault();
    const file = cvinput.files?.item(0);
    if (file) {
      this.talentGateway.uploadTalentResume(this.talent, file);
      (event.target as HTMLInputElement).value = '';
    }
  }

  downloadContractAction(talent: TalentModel, resumeId: number) {
    console.log('downloadContractAction', talent, resumeId);
    this.talentGateway.downloadTalentContract(talent, resumeId);
  }

  viewContractAction(talent: TalentModel, contractId: number) {
    this.talentGateway.viewTalentContract(talent, contractId);
  }

  deleteContractAction(talent: TalentModel, resumeId: number) {
    this.openDeleteConfirmationDialog('Supprimer CV', 'Souhaitez-vous vraiment supprimer ce CV ?', resumeId);
    this.deleteConfirmationDialogRef.afterClosed().subscribe((isDeleteConfirmation: boolean) => {
      if (isDeleteConfirmation) {
        this.talentGateway.deleteTalentContract(this.talent, resumeId);
      }
    });
  }

  openDeleteConfirmationDialog(title: string, message: string, resumeId: number): void {
    this.deleteConfirmationDialogRef = this.dialog.open(ConfirmDeleteDialog, {
      width: '250px',
      data: { title, message }
    });
  }
}







@Component({
  selector: 'confirm-delete-dialog',
  template: `<h1 mat-dialog-title>{{data.title}}</h1>
  <div mat-dialog-content>
    {{data.message}}
  </div>
  <div mat-dialog-actions>
    <button mat-button [mat-dialog-close]="false">NON</button>
    <button mat-button [mat-dialog-close]="true" cdkFocusInitial>OUI</button>
  </div>
  `,
  styles: [`.mdc-dialog__title+.mdc-dialog__content, .mdc-dialog__header+.mdc-dialog__content {
    padding-top: 20px;
  }`],
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
})
export class ConfirmDeleteDialog {
  constructor(
    public dialogRef: MatDialogRef<ConfirmDeleteDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }
}
