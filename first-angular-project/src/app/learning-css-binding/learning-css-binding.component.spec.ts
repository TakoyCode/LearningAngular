import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningCSSBindingComponent } from './learning-css-binding.component';

describe('LeariningBindingComponent', () => {
  let component: LearningCSSBindingComponent;
  let fixture: ComponentFixture<LearningCSSBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearningCSSBindingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LearningCSSBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
