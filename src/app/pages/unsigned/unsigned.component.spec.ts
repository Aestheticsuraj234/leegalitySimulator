import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsignedComponent } from './unsigned.component';

describe('UnsignedComponent', () => {
  let component: UnsignedComponent;
  let fixture: ComponentFixture<UnsignedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnsignedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnsignedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
