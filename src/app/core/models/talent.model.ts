import { SkillModel } from './skill.model';
import { ContractModel } from './contract.model';

interface IAddress {
  address: string;
  complementaddress: string;
  cp: string;
  city: string;
  country: string;
}

export class ResumeModel {
  id: number;
  link: string;
  created_at: string;
  constructor(data: any) {
    this.id = data.id;
    this.link = data.link;
    this.created_at = data.created_at;
  }
}

export class AddressModel implements IAddress {
  address: string;
  complementaddress: string;
  cp: string;
  city: string;
  country: string;
  constructor(data: any) {
    this.address = data.address;
    this.complementaddress = data.complementaddress;
    this.cp = data.cp;
    this.city = data.city;
    this.country = data.country;
  }
}

export class TalentModel {
  id: number;
  last: string;
  first: string;
  xp: number;
  tjm: number;
  address: AddressModel;
  remote: true;
  linkedin: string;
  indicatifphone: string;
  phone: string;
  email: string;
  siren: string;
  nic: string;
  siret: string;
  nda: string;
  skills: SkillModel[];
  resumes: ResumeModel[];
  contracts: ContractModel[];

  constructor(data: any) {
    this.id = data.id;
    this.last = data.last;
    this.first = data.first;
    this.xp = data.xp;
    this.tjm = data.tjm;
    this.address = new AddressModel(data);
    this.remote = data.remote;
    this.linkedin = data.linkedin;
    this.indicatifphone = data.indicatifphone;
    this.phone = data.phone;
    this.email = data.email;
    this.siren = data.siren;
    this.nic = data.nic;
    this.siret = data.siret;
    this.nda = data.nda;
    this.skills = data.skills
      ? data.skills.map((skill: any) => new SkillModel(skill))
      : [];
    this.resumes = data.resumes
      ? data.resumes.map((resume: any) => new ResumeModel(resume))
      : [];
    this.contracts = data.contracts
      ? data.contracts.map((contract: any) => new ContractModel(contract))
      : [];
  }

}
