import { CustomerModel } from './customer.model';
import { SpecialityModel } from './speciality.model';

export class JobModel {
  id: number;
  title: string;
  description?: string;
  isRemote?: boolean;
  startDate?: Date;
  duration: number;
  tjmin: number;
  tjmax: number;
  customer_id: number;
  customer?: CustomerModel;
  specialities?: SpecialityModel[];
  info?: string;
  status?: number;

  constructor(data: any) {
    this.id = data.id;
    this.title = data.last;
    this.description = data.description;
    this.isRemote = data.isRemote;
    this.startDate = data.startDate;
    this.duration = data.duration;
    this.tjmin = data.xp;
    this.tjmax = data.remote;
    this.customer_id = data.customer_id | 0;
    this.customer = new CustomerModel(data.customer);
    this.specialities = data.phone;
    this.info = data.info;
    this.status = data.status;
  }
}
