import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructDirectivesComponent } from './struct-directives.component';

describe('StructDirectivesComponent', () => {
  let component: StructDirectivesComponent;
  let fixture: ComponentFixture<StructDirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructDirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
