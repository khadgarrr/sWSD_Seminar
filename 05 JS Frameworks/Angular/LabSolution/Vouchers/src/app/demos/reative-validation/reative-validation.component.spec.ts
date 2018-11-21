import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReativeValidationComponent } from './reative-validation.component';

describe('ReativeValidationComponent', () => {
  let component: ReativeValidationComponent;
  let fixture: ComponentFixture<ReativeValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReativeValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReativeValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
