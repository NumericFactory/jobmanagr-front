import { CustomerModel } from '../models/customer.model';
import { Subject, BehaviorSubject, Observable } from 'rxjs';

export abstract class CustomerGateway {
    abstract customers$: Observable<CustomerModel[]>;

    abstract getCustomers(): void;

    abstract getCustomer(customer: CustomerModel): void;

    abstract addNewCustomer(customer: CustomerModel): void;

    abstract deleteCustomer(customerId: number): void;
}
