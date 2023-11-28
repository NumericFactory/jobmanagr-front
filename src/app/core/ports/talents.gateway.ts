import { SkillModel } from '../models/skill.model';
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

  abstract addTalentSkill(talent: TalentModel, skill: SkillModel): void
  abstract removeTalentSkill(talent: TalentModel, skill: SkillModel): void

  // resume File
  abstract uploadTalentResume(talent: TalentModel, resume: any): void
  abstract downloadTalentResume(talent: TalentModel, resumeId: number): void
  abstract viewTalentResume(talent: TalentModel, resumeId: number): void
  abstract deleteTalentResume(talent: TalentModel, resumeId: number): void

  // contract File
  abstract uploadTalentContract(talent: TalentModel, contract: any): void
  abstract downloadTalentContract(talent: TalentModel, contractId: number): void
  abstract viewTalentContract(talent: TalentModel, contractId: number): void
  abstract deleteTalentContract(talent: TalentModel, contractId: number): void
}
