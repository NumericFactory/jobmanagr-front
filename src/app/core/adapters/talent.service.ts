import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, map, tap } from 'rxjs';
import { AddressModel, ResumeModel, TalentModel } from 'src/app/core/models/talent.model';
import { TalentGateway } from 'src/app/core/ports/talents.gateway';
import { ITalentSearch } from '../models/talent-search.model';
import { ContractModel } from '../models/contract.model';
import { saveAs } from 'file-saver';
import { SkillModel } from '../models/skill.model';
// import { talentsData } from '../../data';

@Injectable({
  providedIn: 'root',
})
export class TalentService implements TalentGateway {
  private apiURL: string = environment.apiURL;
  // store data in memory
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
      .pipe(map((response: any) => new TalentModel(response.data)))
      .subscribe((talent: TalentModel) => {
        talents = [talent, ...talents];
        this._talents$$.next(talents)
      });
  }

  deleteTalent(talent: TalentModel): void {
    this.http
      .delete(this.apiURL + '/talents/' + talent.id)
      .subscribe((response: any) => {
        let talents = this._talents$$.getValue();
        talents = talents.filter((talent) => talent.id !== response.id);
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
      .subscribe((talents: TalentModel[]) => {
        this._talents$$.next(talents);
      });
  }

  updateTalentOneField(talent: TalentModel, field: Omit<keyof TalentModel, 'address' | 'skills'>, value: any): void {
    this.http
      .put(this.apiURL + '/talents/' + talent.id + '/' + field, { value })
      .pipe(
        map((response: any) => new TalentModel(response.data))
      )
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
      .pipe(
        map((response: any) => new TalentModel(response.data))
      )
      .subscribe((updatedTalent: TalentModel) => {
        let talents = this._talents$$.getValue();
        talents = talents.map((talent) => talent.id === updatedTalent.id ? updatedTalent : talent);
        this._talents$$.next(talents);
      });
  }


  addTalentSkill(talent: TalentModel, skill: SkillModel): void {
    this.http.post(this.apiURL + '/talents/' + talent.id + '/skills', { skill_id: skill.id })
      .pipe(
        map((response: any) => response.data.map((skill: any) => new SkillModel(skill)))
      )
      .subscribe((skills: SkillModel[]) => {
        talent.skills = [...skills];
        let talents = this._talents$$.getValue();
        talents = talents.map((t) => t.id === talent.id ? talent : t);
        this._talents$$.next(talents);
      });
  }

  removeTalentSkill(talent: TalentModel, skill: SkillModel): void {
    this.http.delete(this.apiURL + '/talents/' + talent.id + '/skills/' + skill.id)
      .subscribe((response: any) => {
        talent.skills = talent.skills.filter((s) => s.id !== response.id);
        let talents = this._talents$$.getValue();
        talents = talents.map((t) => t.id === talent.id ? talent : t);
        this._talents$$.next(talents);
      });
  }

  uploadTalentResume(talent: TalentModel, resume: File): void {
    const formData = new FormData();
    formData.append('file', resume);
    this.http
      .post(this.apiURL + '/talents/' + talent.id + '/resumes', formData)
      .pipe(
        map((response: any) => {
          let resume: ResumeModel = new ResumeModel(response.data);
          talent.resumes = [resume, ...talent.resumes];
          return talent;
        })
      )
      .subscribe((updatedTalent: TalentModel) => {
        let talents = this._talents$$.getValue();
        talents = talents.map((talent) => talent.id === updatedTalent.id ? updatedTalent : talent);
        this._talents$$.next(talents);
      });
  }

  downloadTalentResume(talent: TalentModel, resumeId: number): void {
    let endpoint = '/talents/' + talent.id + '/resumes/' + resumeId;
    this.http
      .get(this.apiURL + endpoint, { responseType: 'blob' })
      .subscribe((blob: any) => {
        saveAs(blob, `cv-${talent.last.toLowerCase()}-${talent.first.toLowerCase()}`);
      });
  }

  viewTalentResume(talent: TalentModel, resumeId: number): void {
    let endpoint = '/talents/' + talent.id + '/resumes/' + resumeId;
    this.http
      .get(this.apiURL + endpoint, { responseType: 'blob' })
      .subscribe((blob: any) => {
        const url = window.URL.createObjectURL(blob);
        window.open(url);
      });
  }

  deleteTalentResume(talent: TalentModel, resumeId: number): void {
    this.http
      .delete(this.apiURL + '/talents/' + talent.id + '/resumes/' + resumeId)
      .subscribe((response: any) => {
        let deletedResumeId = response.id;
        let talents = this._talents$$.getValue();
        talent.resumes = talent.resumes.filter((resume) => resume.id !== deletedResumeId);
        talents = talents.map((t) => t.id === talent.id ? talent : t);
        this._talents$$.next(talents);
      });
  }



  // contracts

  uploadTalentContract(talent: TalentModel, contract: File): void {
    const formData = new FormData();
    formData.append('file', contract);
    this.http
      .post(this.apiURL + '/talents/' + talent.id + '/contracts', formData)
      .pipe(
        map((response: any) => {
          let contract: ContractModel = new ContractModel(response.data);
          talent.contracts = [contract, ...talent.contracts];
          return talent;
        })
      )
      .subscribe((updatedTalent: TalentModel) => {
        let talents = this._talents$$.getValue();
        talents = talents.map((talent) => talent.id === updatedTalent.id ? updatedTalent : talent);
        this._talents$$.next(talents);
      });
  }

  downloadTalentContract(talent: TalentModel, contractId: number): void {
    let endpoint = '/talents/' + talent.id + '/contracts/' + contractId;
    this.http
      .post(this.apiURL + endpoint, { responseType: 'blob' })
      .subscribe((blob: any) => {
        const url = window.URL.createObjectURL(blob);
        window.open(url);
      });
  }

  viewTalentContract(talent: TalentModel, contractId: number): void {
    let endpoint = '/talents/' + talent.id + '/contracts/' + contractId;
    this.http
      .get(this.apiURL + endpoint, { responseType: 'blob' })
      .subscribe((blob: any) => {
        const url = window.URL.createObjectURL(blob);
        window.open(url);
      });
  }

  deleteTalentContract(talent: TalentModel, contractId: number): void {
    this.http
      .delete(this.apiURL + '/talents/' + talent.id + '/contracts/' + contractId)
      .subscribe((response: any) => {
        let deletedContractId = response.id;
        let talents = this._talents$$.getValue();
        talent.contracts = talent.contracts.filter((contract) => contract.id !== deletedContractId);
        talents = talents.map((t) => t.id === talent.id ? talent : t);
        this._talents$$.next(talents);
      });
  }


}
