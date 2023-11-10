import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentsListComponent } from './talents-list.component';
import { TalentGateway } from 'src/app/core/ports/talents.gateway';
import { TalentService } from 'src/app/core/adapters/talent.service';

describe('TalentsListComponent', () => {
  let component: TalentsListComponent;
  let fixture: ComponentFixture<TalentsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TalentsListComponent],
      providers: [{ provide: TalentGateway, useClass: TalentService }]
    });
    fixture = TestBed.createComponent(TalentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
