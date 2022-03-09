import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsgDutyComponent } from './asg-duty.component';

describe('AsgDutyComponent', () => {
  let component: AsgDutyComponent;
  let fixture: ComponentFixture<AsgDutyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsgDutyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsgDutyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
