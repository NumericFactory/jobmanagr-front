import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { talentsData } from '../../data';
import { TalentModel } from '../models/talent.model';

@Injectable({
  providedIn: 'root',
})
export class TalentService {
  data = talentsData;
  private talents$ = new BehaviorSubject<TalentModel[]>([]);
  public talents = this.talents$.asObservable();

  constructor() {}

  getTalents() {
    this.talents$.next(this.data);
  }
}
