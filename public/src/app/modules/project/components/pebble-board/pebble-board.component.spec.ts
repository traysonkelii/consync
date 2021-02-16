import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PebbleBoardComponent } from './pebble-board.component';

describe('PebbleBoardComponent', () => {
  let component: PebbleBoardComponent;
  let fixture: ComponentFixture<PebbleBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PebbleBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PebbleBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
