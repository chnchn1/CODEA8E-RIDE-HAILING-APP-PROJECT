import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PickUpLocPage } from './pick-up-loc.page';

describe('PickUpLocPage', () => {
  let component: PickUpLocPage;
  let fixture: ComponentFixture<PickUpLocPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PickUpLocPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
