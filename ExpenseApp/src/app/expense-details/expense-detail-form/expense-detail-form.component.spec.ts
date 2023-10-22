import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseDetailFormComponent } from './expense-detail-form.component';

describe('ExpenseDetailFormComponent', () => {
  let component: ExpenseDetailFormComponent;
  let fixture: ComponentFixture<ExpenseDetailFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpenseDetailFormComponent]
    });
    fixture = TestBed.createComponent(ExpenseDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
