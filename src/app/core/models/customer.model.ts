interface Contact {
  last: string;
  first: string;
  email?: string;
  phone1?: string;
  phone2?: string;
}

export class CustomerModel {
  name: string;
  contacts?: Contact[];
  constructor(data: any) {
    this.name = data.name;
    this.contacts = data.contacts;
  }
}
