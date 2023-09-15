import { TalentModel } from './shared/models/talent.model';
import { JobModel } from './shared/models/job.model';

export let jobsData: JobModel[] = [
  {
    title: 'Formateur Spring',
    description: '',
    isRemote: true,
    duration: 17,
    tjmin: 550,
    tjmax: 850,
    customer_id: 1,
    customer: {
      name: 'Epita',
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
    title: 'Formateur Angular',
    description: '',
    isRemote: true,
    duration: 19,
    tjmin: 700,
    tjmax: 700,
    customer_id: 2,
    customer: {
      name: 'Epita',
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
    last: 'NOVOTNY',
    first: 'Paulin',
    xp: 5,
    tjm: 500,
    city: 'Paris',
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
    last: 'PHILIPPOT',
    first: 'Sebastien',
    xp: 10,
    tjm: 555,
    city: 'Paris',
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
    last: 'DESCHAMPS',
    first: 'Marc',
    xp: 10,
    tjm: 500,
    city: 'Paris',
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
    last: 'CHEKINI',
    first: 'Mahdi',
    xp: 10,
    tjm: 0,
    city: '',
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
    last: 'DESPREAUX',
    first: 'Yoann',
    xp: 10,
    tjm: 0,
    city: 'Montpellier',
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
