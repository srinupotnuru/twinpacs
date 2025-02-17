import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiringsComponent } from './hirings.component';

describe('HiringsComponent', () => {
  let component: HiringsComponent;
  let fixture: ComponentFixture<HiringsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HiringsComponent]
    });
    fixture = TestBed.createComponent(HiringsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
