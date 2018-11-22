import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingMaterialComponent } from './using-material.component';

describe('UsingMaterialComponent', () => {
  let component: UsingMaterialComponent;
  let fixture: ComponentFixture<UsingMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsingMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsingMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
