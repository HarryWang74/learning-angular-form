import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoAngularMaterialComponent } from './no-angular-material.component';

describe('NoAngularMaterialComponent', () => {
  let component: NoAngularMaterialComponent;
  let fixture: ComponentFixture<NoAngularMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoAngularMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoAngularMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
