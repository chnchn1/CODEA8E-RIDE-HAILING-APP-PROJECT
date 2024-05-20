import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrebookPage } from './prebook.page';

describe('PrebookPage', () => {
  let component: PrebookPage;
  let fixture: ComponentFixture<PrebookPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PrebookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
