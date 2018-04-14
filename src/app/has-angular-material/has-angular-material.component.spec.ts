import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HasAngularMaterialComponent } from './has-angular-material.component';

describe('HasAngularMaterialComponent', () => {
  let component: HasAngularMaterialComponent;
  let fixture: ComponentFixture<HasAngularMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HasAngularMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HasAngularMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
