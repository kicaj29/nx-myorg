import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedButtonComponent } from './advanced-button.component';

describe('AdvancedButtonComponent', () => {
  let component: AdvancedButtonComponent;
  let fixture: ComponentFixture<AdvancedButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
