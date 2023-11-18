import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFormTelComponent } from './input-form-tel.component';

describe('InputFormTelComponent', () => {
  let component: InputFormTelComponent;
  let fixture: ComponentFixture<InputFormTelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputFormTelComponent]
    });
    fixture = TestBed.createComponent(InputFormTelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
