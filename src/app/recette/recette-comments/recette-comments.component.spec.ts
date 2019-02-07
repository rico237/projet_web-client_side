import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetteCommentsComponent } from './recette-comments.component';

describe('RecetteCommentsComponent', () => {
  let component: RecetteCommentsComponent;
  let fixture: ComponentFixture<RecetteCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetteCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetteCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
