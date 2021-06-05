import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputcolorComponent } from './inputcolor.component';

describe('InputcolorComponent', () => {
  let component: InputcolorComponent;
  let fixture: ComponentFixture<InputcolorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputcolorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputcolorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
