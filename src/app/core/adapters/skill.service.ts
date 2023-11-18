import { Injectable } from '@angular/core';
import { SkillGateway } from '../ports/skills.gateway';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { SkillModel } from '../models/skill.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SkillService implements SkillGateway {

  private apiURL: string = environment.apiURL;
  private _skills$$ = new BehaviorSubject<SkillModel[]>([]);
  skills$: Observable<SkillModel[]> = this._skills$$.asObservable();
  private _selectedSkill$$ = new BehaviorSubject<SkillModel>(new SkillModel({}));
  selectedSkill$: Observable<SkillModel> = this._selectedSkill$$.asObservable();

  constructor(private http: HttpClient) { }

  getSkills(): void {
    this.http.get(this.apiURL + '/skills')
      .pipe(map((response: any) => response.data.map((skill: any) => new SkillModel(skill))))
      .subscribe((skills: SkillModel[]) => {
        console.log('skills', skills);
        this._skills$$.next(skills);
      });
  }

  selectSkill(skillTitle: string): void {
    let skill: SkillModel | undefined = this._skills$$.getValue().find((skill: SkillModel) => skill.title == skillTitle);
    if (!skill) {
      skill = new SkillModel({});
    }
    this._selectedSkill$$.next(skill);
  }
}
