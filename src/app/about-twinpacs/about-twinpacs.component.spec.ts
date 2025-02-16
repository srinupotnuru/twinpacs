import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTwinpacsComponent } from './about-twinpacs.component';

describe('AboutTwinpacsComponent', () => {
  let component: AboutTwinpacsComponent;
  let fixture: ComponentFixture<AboutTwinpacsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutTwinpacsComponent]
    });
    fixture = TestBed.createComponent(AboutTwinpacsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
