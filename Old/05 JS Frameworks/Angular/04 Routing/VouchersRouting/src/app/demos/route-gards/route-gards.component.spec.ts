import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteGardsComponent } from './route-gards.component';

describe('RouteGardsComponent', () => {
  let component: RouteGardsComponent;
  let fixture: ComponentFixture<RouteGardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteGardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteGardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
