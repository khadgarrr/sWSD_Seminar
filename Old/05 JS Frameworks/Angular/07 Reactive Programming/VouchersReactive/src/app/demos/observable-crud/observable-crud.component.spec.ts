import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableCrudComponent } from './observable-crud.component';

describe('ObservableCrudComponent', () => {
  let component: ObservableCrudComponent;
  let fixture: ComponentFixture<ObservableCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservableCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
