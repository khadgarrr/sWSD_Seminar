import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingBootstrapComponent } from './using-bootstrap.component';

describe('UsingBootstrapComponent', () => {
  let component: UsingBootstrapComponent;
  let fixture: ComponentFixture<UsingBootstrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsingBootstrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsingBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
