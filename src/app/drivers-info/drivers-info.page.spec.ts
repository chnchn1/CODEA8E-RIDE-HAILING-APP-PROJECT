import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DriversInfoPage } from './drivers-info.page';

describe('DriversInfoPage', () => {
  let component: DriversInfoPage;
  let fixture: ComponentFixture<DriversInfoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DriversInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
