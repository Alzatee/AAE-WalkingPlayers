import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkingShopComponent } from './walking-shop.component';

describe('WalkingShopComponent', () => {
  let component: WalkingShopComponent;
  let fixture: ComponentFixture<WalkingShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalkingShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkingShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
