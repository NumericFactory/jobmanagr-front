import { Injectable } from '@angular/core';
import { countrycodephonedata } from './countrycode.data';

@Injectable({
  providedIn: 'root'
})
export class CountrycodephoneService {

  countries: any[] = Object.values(countrycodephonedata);

  constructor() { }

  getCountryCodePhoneByTextInput(textInput: string) {
    return this.countries.filter((country: any) => {
      return country.name.toLowerCase().substring(0, textInput.length) === textInput.toLowerCase();
    })
  }
}
