import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextmenuComponent } from './contextmenu.component';

describe('ContextmenuComponent', () => {
  let component: ContextmenuComponent;
  let fixture: ComponentFixture<ContextmenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContextmenuComponent]
    });
    fixture = TestBed.createComponent(ContextmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
