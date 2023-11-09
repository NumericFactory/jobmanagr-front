import { TalentModel } from '../models/talent.model';
import { Observable } from 'rxjs';

export abstract class TalentGateway {
  abstract talents$: Observable<TalentModel[]>;
  abstract getTalents(): void;

  //abstract getTalent(talent: TalentModel): void;

  //abstract addNewTalent(talent: TalentModel): void;

  //abstract deleteTalent(talentId: number): void;
}
