import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailtoComponent } from './mailto.component';

describe('MailtoComponent', () => {
  let component: MailtoComponent;
  let fixture: ComponentFixture<MailtoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MailtoComponent]
    });
    fixture = TestBed.createComponent(MailtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
