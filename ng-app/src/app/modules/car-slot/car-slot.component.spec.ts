import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarSlotComponent } from './car-slot.component';

describe('CarSlotComponent', () => {
  let component: CarSlotComponent;
  let fixture: ComponentFixture<CarSlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarSlotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
