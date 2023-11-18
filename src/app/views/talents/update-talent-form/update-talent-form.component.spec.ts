import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTalentFormComponent } from './update-talent-form.component';

describe('AddTalentFormComponent', () => {
  let component: UpdateTalentFormComponent;
  let fixture: ComponentFixture<UpdateTalentFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateTalentFormComponent]
    });
    fixture = TestBed.createComponent(UpdateTalentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
