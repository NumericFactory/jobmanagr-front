export interface ISkillModel {
  id: number;
  title: string;
  xp?: number;

}

export class SkillModel implements ISkillModel {
  id: number;
  title: string;
  xp?: number;
  constructor(data: any) {
    this.id = data.id;
    this.title = data.title;
    this.xp = this.xp ? data.xp : 0;
  }
}
