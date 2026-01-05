import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CombatePage } from './combate.page';

describe('CombatePage', () => {
  let component: CombatePage;
  let fixture: ComponentFixture<CombatePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CombatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
