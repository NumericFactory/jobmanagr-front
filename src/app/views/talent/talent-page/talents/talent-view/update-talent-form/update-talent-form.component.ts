import { Component, Inject, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { TalentModel } from 'src/app/core/models/talent.model';
import { TalentGateway } from 'src/app/core/ports/talents.gateway';
import { CountrycodephoneService } from 'src/app/shared/services/countrycodephone.service';

import { TalentFormFieldNameType } from './talent-form.model';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { TalentViewComponent } from '../talent-view.component';
import { SkillGateway } from 'src/app/core/ports/skills.gateway';
import { SkillModel } from 'src/app/core/models/skill.model';


@Component({
  selector: 'update-talent-form',
  templateUrl: './update-talent-form.component.html',
  styleUrls: ['./update-talent-form.component.css'],
})
export class UpdateTalentFormComponent {

  @Input() talent!: TalentModel;
  talentForm!: FormGroup;
  editableFieldName: TalentFormFieldNameType | null = null;
  skills: SkillModel[] = [];

  constructor(
    private fb: FormBuilder,
    private countrycodephoneSvc: CountrycodephoneService,
    private talentGateway: TalentGateway,
    public skillGateway: SkillGateway,
    private dialogTalentViewRef: MatDialogRef<TalentViewComponent>,
    public dialog: MatDialog) {
  }

  ngOnInit() {

    this.skillGateway.skills$.subscribe((skills: SkillModel[]) => {
      this.skills = skills;
    });

    this.talentForm = this.fb.group({
      last: [this.talent.last],
      first: [this.talent.first],
      xp: [{ value: this.talent.xp, disabled: this.editableFieldName != 'xp' }],
      tjm: [{ value: this.talent.tjm, disabled: this.editableFieldName != 'tjm' }],
      address: this.fb.group({
        address: [{ value: this.talent.address.address ? this.talent.address.address : '', disabled: this.editableFieldName != 'address' }],
        complementaddress: [{ value: this.talent.address.complementaddress != null ? this.talent.address.complementaddress : '', disabled: this.editableFieldName != 'address' }],
        cp: [{ value: this.talent.address.cp ? this.talent.address.cp : '', disabled: this.editableFieldName != 'address' }],
        city: [{ value: this.talent.address.city ? this.talent.address.city : '', disabled: this.editableFieldName != 'address' }],
        country: [{ value: this.talent.address.country ? this.talent.address.country : '', disabled: this.editableFieldName != 'address' }],
      }),
      remote: [this.talent.remote],
      linkedin: [{ value: this.talent.linkedin, disabled: this.editableFieldName != 'linkedin' }],
      indicatifphone: this.talent.indicatifphone,
      phone: [{ value: this.talent.phone, disabled: this.editableFieldName != 'phone' }],
      email: [{ value: this.talent.email, disabled: this.editableFieldName != 'email' }],
      siren: [''],
      nic: [''],
      siret: [{ value: this.talent.siret, disabled: this.editableFieldName != 'siret' }],
      nda: [{ value: this.talent.nda, disabled: this.editableFieldName != 'nda' }],
    });
  }

  addSkillAction($event: SkillModel) {
    let skill = $event;
    this.talent.skills.find(skill => skill.id === $event.id)
      ? console.log('skill already added')
      //: this.talent.skills.push(skill);
      : this.talentGateway.addTalentSkill(this.talent, skill);
  }

  removeSkillAction(skill: SkillModel) {
    this.talentGateway.removeTalentSkill(this.talent, skill);
  }

  /**
   * Manage editableField property
   * @param fieldName : TalentFormFieldNameType
   */
  setEditableField(fieldName: TalentFormFieldNameType): void {
    if (fieldName === this.editableFieldName) {
      this.resetForm();
    }
    else {
      this.resetForm();
      this.enableFormField(fieldName);
    }
  }

  /**
   * Manage phone number input
   */
  searchCountryCodePhone(inputText: string) {
    this.countrycodephoneSvc.getCountryCodePhoneByTextInput(inputText);
  }
  selectCountryCode(event: Event) {
    this.talentForm.controls['indicatifphone'].setValue(event);
    this.updateFieldAction('indicatifphone');
  }

  /**
   * update field value in DB
   * @param field : FieldName
   */
  updateFieldAction(field: TalentFormFieldNameType): void {
    if (!this.talentForm.controls[field]) return;
    switch (field) {
      case 'address':
        this.talentGateway.updateTalentAddress(this.talent, this.talentForm.value['address']);
        this.resetForm();
        break;
      case 'indicatifphone':
        this.talentGateway.updateTalentOneField(this.talent, 'indicatifphone', this.talentForm.controls['indicatifphone'].value);
        break;
      default: //other FieldName - last, first, xp, tjm, remote, linkedin, phone, email, siret, nda
        this.talentGateway.updateTalentOneField(this.talent, field, this.talentForm.value[field]);
        this.resetForm();
    }
  }



  /**
   * utils functions to manage 
   * - editableField property 
   * - talentForm property
  */
  resetForm() {
    this.editableFieldName = null;
    this.talentForm.disable();
  }
  enableFormField(fieldName: TalentFormFieldNameType) {
    this.editableFieldName = fieldName;
    this.talentForm.controls[fieldName].enable();
  }

  deleteTalentAction(talent: TalentModel) {
    let deleteConfirmationDialogRef = this.dialog.open(ConfirmDeleteTalentDialog, {
      width: '250px',
      data: { title: 'Supprimer profil', message: 'Souhaitez-vous vraiment supprimer ce profil ?' }
    });
    deleteConfirmationDialogRef.afterClosed().subscribe((isDeleteConfirmation: boolean) => {
      if (isDeleteConfirmation) {
        this.talentGateway.deleteTalent(talent);
        this.dialogTalentViewRef.close();
      }
    });
  }
}








@Component({
  selector: 'confirm-delete-talent-dialog',
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
export class ConfirmDeleteTalentDialog {
  constructor(
    public dialogRef: MatDialogRef<ConfirmDeleteTalentDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }
}
