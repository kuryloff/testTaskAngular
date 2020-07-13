import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalClinicComponent } from './medical-clinic.component';

describe('MedicalClinicComponent', () => {
  let component: MedicalClinicComponent;
  let fixture: ComponentFixture<MedicalClinicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalClinicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalClinicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
