import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VouchersTableComponent } from './vouchers-table.component';

describe('VouchersTableComponent', () => {
  let component: VouchersTableComponent;
  let fixture: ComponentFixture<VouchersTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VouchersTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VouchersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
