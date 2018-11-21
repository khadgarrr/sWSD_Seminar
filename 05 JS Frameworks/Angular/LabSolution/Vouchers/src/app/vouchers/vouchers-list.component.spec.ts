import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VouchersListComponent } from './vouchers-list.component';

describe('VouchersComponent', () => {
  let component: VouchersListComponent;
  let fixture: ComponentFixture<VouchersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VouchersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VouchersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
