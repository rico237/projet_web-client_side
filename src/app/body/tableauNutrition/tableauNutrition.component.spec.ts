import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { tableauNutrition } from './tableauNutrition.component';

describe('tableauNutrition', () => {
  let component: tableauNutrition;
  let fixture: ComponentFixture<tableauNutrition>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ tableauNutrition ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(tableauNutrition);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
