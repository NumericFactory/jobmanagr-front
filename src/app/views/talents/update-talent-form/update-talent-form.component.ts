import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TalentModel } from 'src/app/core/models/talent.model';
import { TalentGateway } from 'src/app/core/ports/talents.gateway';
import { CountrycodephoneService } from 'src/app/shared/services/countrycodephone.service';

@Component({
  selector: 'update-talent-form',
  templateUrl: './update-talent-form.component.html',
  styleUrls: ['./update-talent-form.component.css']
})
export class UpdateTalentFormComponent {

  talentForm!: FormGroup
  editableField: keyof TalentModel | null = null;
  tab: number = 1;

  constructor(
    public dialogRef: MatDialogRef<UpdateTalentFormComponent>,
    @Inject(MAT_DIALOG_DATA) public talent: TalentModel,
    private fb: FormBuilder,
    private countrycodephoneSvc: CountrycodephoneService,
    private talentGateway: TalentGateway) {
    this.talentForm = this.fb.group({
      last: [talent.last],
      first: [talent.first],
      xp: [{ value: talent.xp, disabled: this.editableField != 'xp' }],
      tjm: [{ value: talent.tjm, disabled: this.editableField != 'tjm' }],
      address: fb.group({
        address: [{ value: talent.address.address ? talent.address.address : '', disabled: this.editableField != 'address' }],
        complementaddress: [{ value: talent.address.complementaddress != null ? talent.address.complementaddress : '', disabled: this.editableField != 'address' }],
        cp: [{ value: talent.address.cp ? talent.address.cp : '', disabled: this.editableField != 'address' }],
        city: [{ value: talent.address.city ? talent.address.city : '', disabled: this.editableField != 'address' }],
        country: [{ value: talent.address.country ? talent.address.country : '', disabled: this.editableField != 'address' }],
      }),
      remote: [talent.remote],
      linkedin: [{ value: talent.linkedin, disabled: this.editableField != 'linkedin' }],
      indicatifphone: [],
      phone: [talent.phone],
      email: [{ value: talent.email, disabled: this.editableField != 'email' }],
      siren: [''],
      nic: [''],
      siret: [{ value: talent.siret, disabled: this.editableField != 'siret' }],
      nda: [{ value: talent.nda, disabled: this.editableField != 'nda' }],
    })


  }

  changeTab(ev: Event, tab: number) {
    ev.preventDefault();
    this.tab = tab;
  }

  setEtitableField(field: keyof TalentModel) {
    this.talentForm.disable();
    this.talentForm.controls['phone'].enable();
    if (field === this.editableField) {
      this.editableField = null;
    }
    else {
      this.editableField = field;
      if (field === 'address') {
        const address = this.talentForm.controls['address'] as FormGroup;
        address.controls['address'].disabled ? address.controls['address'].enable() : address.controls['address'].disable();
        address.controls['complementaddress'].disabled ? address.controls['complementaddress'].enable() : address.controls['complementaddress'].disable();
        address.controls['cp'].disabled ? address.controls['cp'].enable() : address.controls['cp'].disable();
        address.controls['city'].disabled ? address.controls['city'].enable() : address.controls['city'].disable();
        address.controls['country'].disabled ? address.controls['country'].enable() : address.controls['country'].disable();
      }
      else {
        this.talentForm.controls[field].disabled ? this.talentForm.controls[field].enable() : this.talentForm.controls[field].disable();
      }
    }
  }

  searchCountryCodePhone(inputText: string) {
    this.countrycodephoneSvc.getCountryCodePhoneByTextInput(inputText);
  }

  selectCountryCode(event: Event) {
    this.talentForm.controls['indicatifphone'].setValue(event);
  }
  updateFieldAction(field: keyof TalentModel) {
    if (!this.talentForm.controls[field]) return;
    if (field !== 'address' && field !== 'skills' && field !== 'resumes') {
      this.talentGateway.updateTalentOneField(this.talent, field, this.talentForm.value[field]);
    }
    if (field === 'address') {
      console.log('address', this.talentForm.value['address']);
      this.talentGateway.updateTalentAddress(this.talent, this.talentForm.value['address']);
    }
  }

}
