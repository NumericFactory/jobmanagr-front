
import { Observable } from 'rxjs';
import { SkillModel } from '../models/skill.model';

export abstract class SkillGateway {
    abstract skills$: Observable<SkillModel[]>;
    abstract selectedSkill$: Observable<SkillModel>;

    abstract getSkills(): void;

    abstract selectSkill(skill: string): void;

}
