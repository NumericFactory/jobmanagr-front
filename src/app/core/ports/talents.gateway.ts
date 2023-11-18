import { ITalentSearch } from '../models/talent-search.model';
import { AddressModel, TalentModel } from '../models/talent.model';
import { Observable } from 'rxjs';

export abstract class TalentGateway {
  abstract talents$: Observable<TalentModel[]>;

  abstract getTalents(): void;

  abstract addNewTalent(talent: TalentModel): void;

  abstract deleteTalent(talent: TalentModel): void;

  abstract searchTalents(search: ITalentSearch): void;

  abstract updateTalentOneField(talent: TalentModel, field: Omit<keyof TalentModel, 'address' | 'skills'>, value: any): void

  abstract updateTalentAddress(talent: TalentModel, address: AddressModel): void
}
