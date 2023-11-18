export interface ISkillModel {
  title: string;
  xp?: number;
}

export class SkillModel implements ISkillModel {
  title: string;
  xp?: number;
  constructor(data: any) {
    this.title = data.title;
    this.xp = this.xp ? data.xp : 0;
  }
}
