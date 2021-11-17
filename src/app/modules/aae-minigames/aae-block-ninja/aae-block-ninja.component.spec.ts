import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AaeBlockNinjaComponent } from './aae-block-ninja.component';

describe('AaeBlockNinjaComponent', () => {
  let component: AaeBlockNinjaComponent;
  let fixture: ComponentFixture<AaeBlockNinjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AaeBlockNinjaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AaeBlockNinjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
