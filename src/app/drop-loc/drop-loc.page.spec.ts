import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DropLocPage } from './drop-loc.page';

describe('DropLocPage', () => {
  let component: DropLocPage;
  let fixture: ComponentFixture<DropLocPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DropLocPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
