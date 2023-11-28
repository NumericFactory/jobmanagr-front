interface TalentFormFields {
    last: string;
    first: string;
    xp: number;
    tjm: number;
    address: string;
    complementaddress: string;
    cp: string;
    city: string;
    country: string;
    remote: boolean;
    linkedin: string;
    indicatifphone: string;
    phone: string;
    email: string;
    siret: string;
    nda: string;
}
export type TalentFormFieldNameType = keyof TalentFormFields;