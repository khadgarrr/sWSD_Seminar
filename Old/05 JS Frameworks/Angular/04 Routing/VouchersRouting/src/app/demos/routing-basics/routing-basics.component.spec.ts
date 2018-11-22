import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingBasicsComponent } from './routing-basics.component';

describe('RoutingBasicsComponent', () => {
  let component: RoutingBasicsComponent;
  let fixture: ComponentFixture<RoutingBasicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutingBasicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
