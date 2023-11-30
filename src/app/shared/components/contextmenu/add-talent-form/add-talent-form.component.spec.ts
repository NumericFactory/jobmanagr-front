import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTalentFormComponent } from './add-talent-form.component';

describe('AddTalentFormComponent', () => {
  let component: AddTalentFormComponent;
  let fixture: ComponentFixture<AddTalentFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTalentFormComponent]
    });
    fixture = TestBed.createComponent(AddTalentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
