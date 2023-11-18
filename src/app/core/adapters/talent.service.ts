import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, map } from 'rxjs';
import { AddressModel, TalentModel } from 'src/app/core/models/talent.model';
import { TalentGateway } from 'src/app/core/ports/talents.gateway';
import { ITalentSearch } from '../models/talent-search.model';
// import { talentsData } from '../../data';

@Injectable({
  providedIn: 'root',
})
export class TalentService implements TalentGateway {
  private apiURL: string = environment.apiURL;

  private _talents$$ = new BehaviorSubject<TalentModel[]>([]);
  public talents$ = this._talents$$.asObservable();

  constructor(private http: HttpClient) { }

  getTalents(): void {
    this.http.get(this.apiURL + '/talents')
      .pipe(map((response: any) => response.data.map((talent: any) => new TalentModel(talent))))
      .subscribe((talents) => {
        console.log('talents', talents);
        this._talents$$.next(talents);
      });
  }


  addNewTalent(talent: TalentModel): void {
    let talents = this._talents$$.getValue();
    this.http
      .post(this.apiURL + '/talents', talent)
      .subscribe((response: any) => {
        talents = [...talents, response.data];
        this._talents$$.next(talents)
      });
  }

  deleteTalent(talent: TalentModel): void {
    this.http
      .delete(this.apiURL + '/talents/' + talent.id)
      .subscribe((response: any) => {
        let talents = this._talents$$.getValue();
        talents = talents.filter((talent) => talent.id !== response.data.id);
        this._talents$$.next(talents);
      });
  }

  searchTalents(search: ITalentSearch): void {
    console.log('search', search);
    let params = new HttpParams();
    if (search.skill) params = params.append('skill', search.skill);
    if (search.city) params = params.append('city', search.city);
    if (search.tjmMax) params = params.append('tjmMax', search.tjmMax.toString());
    this.http
      .get(this.apiURL + '/talents/search', { params })
      .pipe(map((response: any) => response.data.map((talent: any) => new TalentModel(talent))))
      .subscribe((talents) => {
        console.log('talents', talents);
        this._talents$$.next(talents);
      });
  }

  updateTalentOneField(talent: TalentModel, field: Omit<keyof TalentModel, 'address' | 'skills'>, value: any): void {
    this.http
      .put(this.apiURL + '/talents/' + talent.id + '/' + field, { value })
      .pipe(map((response: any) => new TalentModel(response.data)))
      .subscribe((updatedTalent: TalentModel) => {
        let talents = this._talents$$.getValue();
        talents = talents.map((talent) => talent.id === updatedTalent.id ? updatedTalent : talent);
        this._talents$$.next(talents);
      });
  }

  updateTalentAddress(talent: TalentModel, address: AddressModel): void {
    const params = new HttpParams()
      .set('address', address.address)
      .set('complementaddress', address.complementaddress)
      .set('cp', address.cp)
      .set('city', address.city)
      .set('country', address.country)
    this.http
      .put(this.apiURL + '/talents/' + talent.id + '/address', params)
      .pipe(map((response: any) => new TalentModel(response.data)))
      .subscribe((updatedTalent: TalentModel) => {
        let talents = this._talents$$.getValue();
        talents = talents.map((talent) => talent.id === updatedTalent.id ? updatedTalent : talent);
        this._talents$$.next(talents);
      });
  }
}
