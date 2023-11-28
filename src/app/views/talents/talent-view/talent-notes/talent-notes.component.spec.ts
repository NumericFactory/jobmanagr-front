import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentNotesComponent } from './talent-notes.component';

describe('TalentNotesComponent', () => {
  let component: TalentNotesComponent;
  let fixture: ComponentFixture<TalentNotesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TalentNotesComponent]
    });
    fixture = TestBed.createComponent(TalentNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
