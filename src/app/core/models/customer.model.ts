interface IContact {
  last: string;
  first: string;
  email?: string;
  phone?: string;
  phone2?: string;
  linkedin?: string;
}

interface IAddress {
  address: string;
  complementaddress: string;
  cp: string;
  city: string;
  country: string;
}

export class CustomerModel {
  id: number;
  name: string;
  type: 'ecole' | 'entreprise' | 'organisme public' | 'association' | 'particulier';
  isorganismeformation: boolean;
  siren: string;
  nic: string;
  siret: string;
  address: IAddress;
  contacts?: IContact[];
  constructor(data: any) {
    this.id = data.id;
    this.name = data.name;
    this.type = data.type;
    this.isorganismeformation = data.isorganismeformation;
    this.siren = data.siren;
    this.nic = data.nic;
    this.siret = data.siren + data.nic;
    this.address = data.address;
    this.contacts = data.contacts;
  }
}
