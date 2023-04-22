import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewChangeRateDialogComponent } from './new-change-rate-dialog.component';

describe('NewChangeRateDialogComponent', () => {
  let component: NewChangeRateDialogComponent;
  let fixture: ComponentFixture<NewChangeRateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewChangeRateDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewChangeRateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
