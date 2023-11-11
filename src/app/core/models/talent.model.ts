import { SpecialityModel } from './speciality.model';

export class TalentModel {
  id: number;
  last: string;
  first: string;
  xp: number;
  tjm: number;
  city: string;
  country: string;
  remote: true;
  linkedin: string;
  phone: string;
  email: string;
  specialities: SpecialityModel[];

  constructor(data: any) {
    this.id = data.id;
    this.last = data.last;
    this.first = data.first;
    this.xp = data.xp;
    this.tjm = data.tjm;
    this.city = data.city;
    this.country = data.country;
    this.remote = data.remote;
    this.linkedin = data.linkedin;
    this.phone = data.phone;
    this.email = data.email;
    this.specialities = data.specialities;
  }
}
