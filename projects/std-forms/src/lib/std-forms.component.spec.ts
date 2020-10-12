import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdFormsComponent } from './std-forms.component';

describe('StdFormsComponent', () => {
  let component: StdFormsComponent;
  let fixture: ComponentFixture<StdFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StdFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
