import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstCpmComponent } from './first-cpm.component';

describe('FirstCpmComponent', () => {
  let component: FirstCpmComponent;
  let fixture: ComponentFixture<FirstCpmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstCpmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstCpmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
