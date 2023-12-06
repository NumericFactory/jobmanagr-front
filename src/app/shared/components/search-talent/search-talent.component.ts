import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { SkillModel } from 'src/app/core/models/skill.model';
import { ITalentSearch } from 'src/app/core/models/talent-search.model';
import { SkillGateway } from 'src/app/core/ports/skills.gateway';
import { TalentGateway } from 'src/app/core/ports/talents.gateway';

@Component({
  selector: 'app-search-talent',
  templateUrl: './search-talent.component.html',
  styleUrls: ['./search-talent.component.css']
})
export class SearchTalentComponent {

  skills: SkillModel[] = [];

  searchForm!: FormGroup;

  skillControl = new FormControl('');
  cityControl = new FormControl('');
  tjmMaxControl = new FormControl('');

  constructor(
    private talentGateway: TalentGateway,
    public skillGateway: SkillGateway,
  ) {
    this.searchForm = new FormGroup({
      skill: this.skillControl,
      city: this.cityControl,
      tjmMax: this.tjmMaxControl
    });
  }

  ngOnInit(): void {


    this.searchForm.valueChanges
      .pipe(debounceTime(300))
      .subscribe(() => this.searchTalentAction());
  }

  searchTalentAction() {
    let search: ITalentSearch = this.searchForm.value; // {skill: 'Angular', city: 'Paris', tjmMax: 500}
    this.talentGateway.searchTalents(search);
  }

}
