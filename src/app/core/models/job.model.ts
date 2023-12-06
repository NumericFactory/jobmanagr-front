import { CustomerModel } from './customer.model';
import { SkillModel } from './skill.model';

export class JobModel {
  id: number;
  title: string;
  description?: string;
  isRemote?: boolean;
  startDate?: Date;
  duration: number;
  tjmin: number;
  tjmax: number;
  city?: string;
  country?: string;
  customer_id: number;
  customer?: CustomerModel;
  skills: SkillModel[];
  status?: number;

  constructor(data: any) {
    this.id = data.id;
    this.title = data.title;
    this.description = data.description;
    this.isRemote = data.isRemote;
    this.startDate = data.startDate;
    this.duration = data.duration;
    this.tjmin = data.tjmin;
    this.tjmax = data.tjmax;
    this.city = data.city;
    this.country = data.country;
    this.customer_id = data.customer_id | 0;
    this.customer = new CustomerModel(data.customer);
    this.skills = data.skills ? data.skills.map((skill: any) => new SkillModel(skill)) : [];
    this.status = data.status;
  }
}
