import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidirectionalVouchersComponent } from './unidirectional-vouchers.component';

describe('UnidirectionalVouchersComponent', () => {
  let component: UnidirectionalVouchersComponent;
  let fixture: ComponentFixture<UnidirectionalVouchersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnidirectionalVouchersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnidirectionalVouchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
