import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { SkillModel } from 'src/app/core/models/skill.model';

// usage <add-skills [allskills]="allskills" [excludeskills]="excludeskills" (selectedSkillEvent)="addSkill($event)"></add-skills>
@Component({
  selector: 'add-skills',
  templateUrl: './add-skills.component.html',
  styleUrls: ['./add-skills.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatChipsModule,
    ReactiveFormsModule,
  ],
})
export class AddSkillsComponent {

  separatorKeysCodes: number[] = [ENTER, COMMA];
  skillCtrl = new FormControl('');
  filteredSkills: Observable<SkillModel[]>;
  skills: SkillModel[] = [];

  @Input() allskills: SkillModel[] = [];
  @Input() excludeskills: SkillModel[] = [];
  @Output() selectedSkillEvent = new EventEmitter<SkillModel>()

  constructor() {
    this.filteredSkills = this.skillCtrl.valueChanges.pipe(
      startWith(''),
      map((skillTitleSearch: string | null) =>
        (skillTitleSearch ? this._filter(skillTitleSearch) : [...this.allskills])
      ));
  }

  private _filter(value: string): SkillModel[] {
    const filterValue = value.toLowerCase();
    return this.allskills.filter(skill => skill.title.toLowerCase().includes(filterValue));
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    let skill: SkillModel | undefined = this.allskills.find(skill => skill.title === event.option.value.toLowerCase());
    if (skill) {
      this.selectedSkillEvent.emit(skill);
      this.excludeskills.push(skill);
      this.skillCtrl.setValue('');
    }
  }

  isSkillInExludedSkills(skill: SkillModel): boolean {
    return this.excludeskills.some(excludeSkill =>
      skill.title.toLowerCase() == excludeSkill.title.toLowerCase()
    );
  }


}

