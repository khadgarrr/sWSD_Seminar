import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingThirdpartyComponent } from './using-thirdparty.component';

describe('UsingThirdpartyComponent', () => {
  let component: UsingThirdpartyComponent;
  let fixture: ComponentFixture<UsingThirdpartyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsingThirdpartyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsingThirdpartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
