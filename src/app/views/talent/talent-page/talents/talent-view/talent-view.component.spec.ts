import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentViewComponent } from './talent-view.component';

describe('TalentViewComponent', () => {
  let component: TalentViewComponent;
  let fixture: ComponentFixture<TalentViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TalentViewComponent]
    });
    fixture = TestBed.createComponent(TalentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
