import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CustomerGateway } from '../ports/customers.gateway';
import { CustomerModel } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService implements CustomerGateway {

  private apiURL: string = environment.apiURL;

  private _customers$$ = new BehaviorSubject<CustomerModel[]>([]);
  public customers$ = this._customers$$.asObservable();

  constructor(private http: HttpClient) { }

  getCustomers(): void {
    this.http
      .get(this.apiURL + '/customers')
      .subscribe((response: any) => this._customers$$.next(response.data));
  }

  getCustomer(customer: CustomerModel): void {
    // this._selectedCustomer$$.next(customer);
  }

  addNewCustomer(customer: CustomerModel): void {
    let customers = this._customers$$.getValue();
    let newcustomers = [...customers, customer];
    this._customers$$.next(newcustomers);
    this.http
      .post(this.apiURL + '/customers', customer)
      .subscribe((data) => console.log(data));
  }

  deleteCustomer(customerId: number): void {
    this.http
      .delete(this.apiURL + '/customers/' + customerId)
      .subscribe((data) => console.log(data));
  }


}
