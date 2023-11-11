import { TalentModel } from './core/models/talent.model';
import { JobModel } from './core/models/job.model';

export let jobsData: JobModel[] = [
  {
    id: 1,
    title: 'Formateur Spring',
    description: '',
    isRemote: true,
    duration: 17,
    tjmin: 550,
    tjmax: 850,
    customer_id: 1,
    customer: {
      id: 1,
      name: 'BlablaCar',
      type: 'entreprise',
      isorganismeformation: true,
      address: {
        address: '152 Boulevard de Grenelle',
        complementaddress: '',
        cp: '75015',
        city: 'Paris',
        country: 'France',
      },
      siren: '810 909 807',
      nic: '00028',
      siret: '810 909 807 00028',

      contacts: [],
    },
    specialities: [
      {
        title: 'java',
      },
      {
        title: 'spring',
      },
    ],
    status: 1,
  },

  {
    id: 2,
    title: 'Formateur Angular',
    description: '',
    isRemote: true,
    duration: 19,
    tjmin: 700,
    tjmax: 700,
    customer_id: 2,
    customer: {
      id: 2,
      name: '3W Academy',
      type: 'entreprise',
      isorganismeformation: true,
      address: {
        address: '184 Boulevard Saint-Denis',
        complementaddress: '',
        cp: '75018',
        city: 'Paris',
        country: 'France',
      },
      siren: '784 393 530',
      nic: '00040',
      siret: '784 393 530 00040',

      contacts: [],
    },
    specialities: [
      {
        title: 'html css',
      },
      {
        title: 'javascript',
      },
      {
        title: 'angular',
      },
    ],
    status: 0,
  },
];

export let talentsData: TalentModel[] = [
  {
    id: 1,
    last: 'NOVOTNY',
    first: 'Paulin',
    xp: 5,
    tjm: 500,
    city: 'Paris',
    country: 'France',
    remote: true,
    linkedin: 'https://www.linkedin.com/in/paulin-novotny-7688047a/',
    phone: '06 88 01 50 86',
    email: 'paulin.novotny@gmail.com',
    specialities: [
      { title: 'Java', xp: 5 },
      { title: 'Spring', xp: 5 },
    ],
  },
  {
    id: 2,
    last: 'PHILIPPOT',
    first: 'Sebastien',
    xp: 10,
    tjm: 555,
    city: 'Paris',
    country: 'France',
    remote: true,
    linkedin: 'https://www.linkedin.com/in/sebastien-philippot/',
    phone: '06 59 89 97 98',
    email: '',
    specialities: [
      { title: 'Java', xp: 10 },
      { title: 'Spring', xp: 10 },
    ],
  },
  {
    id: 3,
    last: 'DESCHAMPS',
    first: 'Marc',
    xp: 10,
    tjm: 500,
    city: 'Paris',
    country: 'France',
    remote: true,
    linkedin: 'https://www.linkedin.com/in/deschampsmarc/',
    phone: '06 72 15 50 97',
    email: '',
    specialities: [
      { title: 'Java', xp: 10 },
      { title: 'Spring', xp: 8 },
      { title: 'Agular', xp: 8 },
    ],
  },
  {
    id: 4,
    last: 'CHEKINI',
    first: 'Mahdi',
    xp: 10,
    tjm: 0,
    city: '',
    country: 'France',
    remote: true,
    linkedin: '',
    phone: '06 95 56 25 43',
    email: '',
    specialities: [
      { title: 'Java', xp: 6 },
      { title: 'Spring', xp: 6 },
    ],
  },
  {
    id: 5,
    last: 'DESPREAUX',
    first: 'Yoann',
    xp: 10,
    tjm: 0,
    city: 'Montpellier',
    country: 'France',
    remote: true,
    linkedin: 'https://www.linkedin.com/in/yoann-despreaux-6394a89b/',
    phone: '',
    email: '',
    specialities: [
      { title: 'Java', xp: 6 },
      { title: 'Spring', xp: 6 },
    ],
  },
];
