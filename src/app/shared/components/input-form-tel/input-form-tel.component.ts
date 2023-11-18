import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { CountrycodephoneService } from '../../services/countrycodephone.service';

@Component({
  selector: 'app-input-form-tel',
  templateUrl: './input-form-tel.component.html',
  styleUrls: ['./input-form-tel.component.css']
})
export class InputFormTelComponent {

  @ViewChild('search') search!: ElementRef;
  @Output() countrySelectedEvent: EventEmitter<any> = new EventEmitter<any>();

  countries: any[] = Object.values(this.countrycodephoneSvc.countries);
  isListCountriesVisible: boolean = false;
  selectedCountry: any;

  constructor(private countrycodephoneSvc: CountrycodephoneService) { }

  ngOnInit(): void {
    this.selectedCountry = this.countries.find((country: any) => country.name.toLowerCase() === 'france');
    this.countrySelectedEvent.emit(this.selectedCountry.phone[0]);
  }

  ngAfterViewInit() {
    // this.search.nativeElement.changes.subscribe((changes: any) => {
    //   this.search.nativeElement.focus();
    // });
  }

  openList() {
    this.isListCountriesVisible = true;
    this.search.nativeElement.focus();
  }

  searchCountryCodePhone(inputText: string) {
    inputText.length > 0
      ? this.isListCountriesVisible = true
      : this.isListCountriesVisible = false;
    this.countries = this.countrycodephoneSvc.getCountryCodePhoneByTextInput(inputText);
  }

  selectCountryCodePhone(country: any) {
    this.isListCountriesVisible = false;
    this.selectedCountry = country;
    this.countrySelectedEvent.emit(country.phone[0]);
  }

}
