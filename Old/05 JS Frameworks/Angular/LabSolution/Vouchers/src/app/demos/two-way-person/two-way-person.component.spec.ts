import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayPersonComponent } from './two-way-person.component';

describe('TwoWayPersonComponent', () => {
  let component: TwoWayPersonComponent;
  let fixture: ComponentFixture<TwoWayPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoWayPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoWayPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
