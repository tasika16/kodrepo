import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeRateComponent } from './change-rate.component';

describe('ChangeRateComponent', () => {
  let component: ChangeRateComponent;
  let fixture: ComponentFixture<ChangeRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeRateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
