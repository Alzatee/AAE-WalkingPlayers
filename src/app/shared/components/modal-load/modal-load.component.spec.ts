import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLoadComponent } from './modal-load.component';

describe('ModalLoadComponent', () => {
  let component: ModalLoadComponent;
  let fixture: ComponentFixture<ModalLoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalLoadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
