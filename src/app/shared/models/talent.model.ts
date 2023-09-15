import { SpecialityModel } from './speciality.model';

export class TalentModel {
  last: string;
  first: string;
  xp: number;
  tjm?: number;
  specialities: SpecialityModel[];
  city: string;
  remote: true;
  linkedin: string;
  phone: string;
  email: string;

  constructor(data: any) {
    this.last = data.last;
    this.first = data.first;
    this.xp = data.xp;
    this.tjm = data.tjm;
    this.specialities = data.specialities;
    this.city = data.city;
    this.remote = data.remote;
    this.linkedin = data.linkedin;
    this.phone = data.phone;
    this.email = data.email;
  }
}
