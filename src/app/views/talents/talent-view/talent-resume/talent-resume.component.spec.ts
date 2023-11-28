import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentResumeComponent } from './talent-resume.component';

describe('TalentResumeComponent', () => {
  let component: TalentResumeComponent;
  let fixture: ComponentFixture<TalentResumeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TalentResumeComponent]
    });
    fixture = TestBed.createComponent(TalentResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
