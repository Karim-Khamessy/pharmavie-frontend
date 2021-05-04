import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyMapComponent } from './pharmacy-map.component';

describe('PharmacyMapComponent', () => {
  let component: PharmacyMapComponent;
  let fixture: ComponentFixture<PharmacyMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacyMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacyMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
