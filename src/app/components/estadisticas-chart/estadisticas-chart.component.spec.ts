import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EstadisticasChartComponent } from './estadisticas-chart.component';

describe('EstadisticasChartComponent', () => {
  let component: EstadisticasChartComponent;
  let fixture: ComponentFixture<EstadisticasChartComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [EstadisticasChartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EstadisticasChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
