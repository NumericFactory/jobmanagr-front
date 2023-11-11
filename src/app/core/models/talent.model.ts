import { SpecialityModel } from './speciality.model';


interface Address {
  address: string;
  complementaddress: string;
  cp: string;
  city: string;
  country: string;
}


export class TalentModel {
  id: number;
  last: string;
  first: string;
  xp: number;
  tjm: number;
  address: string;
  complementaddress: string;
  cp: string;
  city: string;
  country: string;
  remote: true;
  linkedin: string;
  phone: string;
  email: string;
  siren: string;
  nic: string;
  siret: string;
  nda: string;

  specialities: SpecialityModel[];

  constructor(data: any) {
    this.id = data.id;
    this.last = data.last;
    this.first = data.first;
    this.xp = data.xp;
    this.tjm = data.tjm;
    this.address = data.address;
    this.complementaddress = data.complementaddress;
    this.cp = data.cp;
    this.city = data.city;
    this.country = data.country;
    this.remote = data.remote;
    this.linkedin = data.linkedin;
    this.phone = data.phone;
    this.email = data.email;
    this.siren = data.siren;
    this.nic = data.nic;
    this.siret = data.siret;
    this.nda = data.nda;
    this.specialities = data.specialities;
  }

}
