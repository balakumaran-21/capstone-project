import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageLicenseComponent } from './manage-license.component';

describe('ManageLicenseComponent', () => {
  let component: ManageLicenseComponent;
  let fixture: ComponentFixture<ManageLicenseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageLicenseComponent]
    });
    fixture = TestBed.createComponent(ManageLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
