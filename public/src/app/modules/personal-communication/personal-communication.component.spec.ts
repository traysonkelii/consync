import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalCommunicationComponent } from './personal-communication.component';

describe('PersonalCommunicationComponent', () => {
  let component: PersonalCommunicationComponent;
  let fixture: ComponentFixture<PersonalCommunicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalCommunicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
