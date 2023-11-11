import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-talent-form',
  templateUrl: './add-talent-form.component.html',
  styleUrls: ['./add-talent-form.component.css']
})
export class AddTalentFormComponent {

  talentForm!: FormGroup

  constructor(private fb: FormBuilder) {
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

  submitTalentForm() {
    console.log(this.talentForm.value);
    // let siret = this.customerForm.value.siret;
    // this.customerForm.value.siren = siret.substring(0, 9);
    // this.customerForm.value.nic = siret.substring(9, 5);
    // let customer: CustomerModel = new CustomerModel(this.customerForm.value);
    // this.customerGateway.addNewCustomer(customer);
  }

}
