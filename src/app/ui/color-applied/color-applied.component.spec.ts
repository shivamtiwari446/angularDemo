import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorAppliedComponent } from './color-applied.component';

describe('ColorAppliedComponent', () => {
  let component: ColorAppliedComponent;
  let fixture: ComponentFixture<ColorAppliedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorAppliedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorAppliedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
