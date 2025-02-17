import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItServicesComponent } from './it-services.component';

describe('ItServicesComponent', () => {
  let component: ItServicesComponent;
  let fixture: ComponentFixture<ItServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItServicesComponent]
    });
    fixture = TestBed.createComponent(ItServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
