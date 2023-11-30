import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentContractsComponent } from './talent-contracts.component';

describe('TalentContractsComponent', () => {
  let component: TalentContractsComponent;
  let fixture: ComponentFixture<TalentContractsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TalentContractsComponent]
    });
    fixture = TestBed.createComponent(TalentContractsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
