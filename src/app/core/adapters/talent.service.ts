import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TalentModel } from 'src/app/core/models/talent.model';
import { TalentGateway } from 'src/app/core/ports/talents.gateway';
import { talentsData } from '../../data';

@Injectable({
  providedIn: 'root',
})
export class TalentService implements TalentGateway {
  data = talentsData;
  private _talents$$ = new BehaviorSubject<TalentModel[]>([]);
  public talents$ = this._talents$$.asObservable();

  constructor() {}

  getTalents(): void {
    this._talents$$.next(this.data);
  }
}
