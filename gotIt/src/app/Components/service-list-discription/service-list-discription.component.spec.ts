import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceListDiscriptionComponent } from './service-list-discription.component';

describe('ServiceListDiscriptionComponent', () => {
  let component: ServiceListDiscriptionComponent;
  let fixture: ComponentFixture<ServiceListDiscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceListDiscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceListDiscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
