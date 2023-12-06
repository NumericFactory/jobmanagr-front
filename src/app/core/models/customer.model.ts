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

class Address {
  address: string;
  complementaddress: string;
  cp: string;
  city: string;
  country: string;
  constructor(customerData: any) {
    if (customerData) {
      this.address = customerData.address ? customerData.address : '';
      this.complementaddress = customerData.complementaddress ? customerData.complementaddress : '';
      this.cp = customerData.cp ? customerData.cp : '';
      this.city = customerData.city ? customerData.city : '';
      this.country = customerData.country ? customerData.country : '';
    }
    else {
      this.address = '';
      this.complementaddress = '';
      this.cp = '';
      this.city = '';
      this.country = '';
    }
  }
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
    this.address = new Address(data);
  }
}
