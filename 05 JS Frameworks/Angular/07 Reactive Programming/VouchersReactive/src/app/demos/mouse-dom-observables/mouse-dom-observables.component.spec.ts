import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseDomObservablesComponent } from './mouse-dom-observables.component';

describe('MouseDomObservablesComponent', () => {
  let component: MouseDomObservablesComponent;
  let fixture: ComponentFixture<MouseDomObservablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MouseDomObservablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MouseDomObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
