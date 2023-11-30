import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TalentModel } from 'src/app/core/models/talent.model';
import { TalentGateway } from 'src/app/core/ports/talents.gateway';
import { CountrycodephoneService } from 'src/app/shared/services/countrycodephone.service';
import { TalentViewComponent } from '../../../../views/talent/talent-page/talents/talent-view/talent-view.component';

@Component({
  selector: 'app-add-talent-form',
  templateUrl: './add-talent-form.component.html',
  styleUrls: ['./add-talent-form.component.css']
})
export class AddTalentFormComponent {

  talentForm!: FormGroup

  constructor(
    private fb: FormBuilder,
    private countrycodephoneSvc: CountrycodephoneService,
    private talentGateway: TalentGateway,
    private dialogTalentViewRef: MatDialogRef<TalentViewComponent>,) {
    this.talentForm = this.fb.group({
      last: [''],
      first: [''],
      xp: [''],
      tjm: [''],
      address: [''],
      complementaddress: [''],
      cp: [''],
      city: [''],
      country: [''],
      remote: [''],
      linkedin: [''],
      indicatifphone: [''],
      phone: [''],
      email: [''],
      siren: [''],
      nic: [''],
      siret: [''],
      nda: [''],
    })
  }

  searchCountryCodePhone(inputText: string) {
    this.countrycodephoneSvc.getCountryCodePhoneByTextInput(inputText);
  }

  selectCountryCode(event: Event) {
    this.talentForm.controls['indicatifphone'].setValue(event);
  }

  submitTalentForm() {
    console.log(this.talentForm.value);
    let siret = this.talentForm.value.siret;
    this.talentForm.value.siren = siret.substring(0, 9);
    this.talentForm.value.nic = siret.substring(9, 5);
    let talent: TalentModel = new TalentModel(this.talentForm.value);
    this.talentGateway.addNewTalent(talent);
    this.dialogTalentViewRef.close();
  }

}
