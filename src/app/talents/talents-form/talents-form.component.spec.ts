import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentsFormComponent } from './talents-form.component';

describe('TalentsFormComponent', () => {
  let component: TalentsFormComponent;
  let fixture: ComponentFixture<TalentsFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TalentsFormComponent]
    });
    fixture = TestBed.createComponent(TalentsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
