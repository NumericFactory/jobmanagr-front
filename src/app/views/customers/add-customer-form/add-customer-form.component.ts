import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerModel } from 'src/app/core/models/customer.model';
import { CustomerGateway } from 'src/app/core/ports/customers.gateway';

@Component({
  selector: 'app-add-customer-form',
  templateUrl: './add-customer-form.component.html',
  styleUrls: ['./add-customer-form.component.css']
})
export class AddCustomerFormComponent implements OnInit {

  customerForm!: FormGroup

  constructor(private fb: FormBuilder, private customerGateway: CustomerGateway) {
    this.customerForm = this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      isorganismeformation: [''],
      address: this.fb.group({
        address: [''],
        complementaddress: [''],
        cp: [''],
        city: [''],
        country: [''],
      }),
      siren: [''],
      nic: [''],
      siret: ['']
    })
  }

  submitCustomerForm() {
    let siret = this.customerForm.value.siret;
    this.customerForm.value.siren = siret.substring(0, 9);
    this.customerForm.value.nic = siret.substring(9, 5);
    let customer: CustomerModel = new CustomerModel(this.customerForm.value);
    this.customerGateway.addNewCustomer(customer);
  }

  ngOnInit(): void {

  }

}
