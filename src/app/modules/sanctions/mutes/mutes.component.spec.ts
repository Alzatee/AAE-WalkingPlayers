import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutesComponent } from './mutes.component';

describe('MutesComponent', () => {
  let component: MutesComponent;
  let fixture: ComponentFixture<MutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MutesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
