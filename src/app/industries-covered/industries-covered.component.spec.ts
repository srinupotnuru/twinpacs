import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustriesCoveredComponent } from './industries-covered.component';

describe('IndustriesCoveredComponent', () => {
  let component: IndustriesCoveredComponent;
  let fixture: ComponentFixture<IndustriesCoveredComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndustriesCoveredComponent]
    });
    fixture = TestBed.createComponent(IndustriesCoveredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
