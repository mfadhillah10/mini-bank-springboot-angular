import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerComboComponent } from './customer-combo.component';

describe('CustomerComboComponent', () => {
  let component: CustomerComboComponent;
  let fixture: ComponentFixture<CustomerComboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerComboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerComboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
