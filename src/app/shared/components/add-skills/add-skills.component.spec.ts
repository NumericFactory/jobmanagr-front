import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSkillsComponent } from './add-skills.component';

describe('AddSkillsComponent', () => {
  let component: AddSkillsComponent;
  let fixture: ComponentFixture<AddSkillsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSkillsComponent]
    });
    fixture = TestBed.createComponent(AddSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
