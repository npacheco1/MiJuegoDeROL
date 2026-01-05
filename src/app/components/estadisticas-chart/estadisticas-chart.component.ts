import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ChartConfiguration,ChartData, ChartType } from 'chart.js/dist/types/index';
import { BaseChartDirective } from 'ng2-charts';
import { Personaje } from 'src/app/core/personaje.service';

@Component({
  selector: 'app-estadisticas-chart',
  templateUrl: './estadisticas-chart.component.html',
  styleUrls: ['./estadisticas-chart.component.scss'],
  standalone: true,
  imports: [CommonModule, BaseChartDirective], // BaseChartDirective es esencial
})
export class EstadisticasChartComponent  implements OnInit {

  @Input() personaje!: Personaje | null; // El personaje será una entrada (Input)

  constructor() { }

public radarChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      r: {
        angleLines: { color: 'rgba(255, 255, 255, 0.5)' },
        grid: { color: 'rgba(255, 255, 255, 0.5)' },
        pointLabels: { color: 'white' },
        ticks: { display: false },
        suggestedMax: 20, // Asumiendo un máximo de 20
      },
    },
    plugins: {
      legend: { display: false },
    },
    elements: {
      line: { backgroundColor: 'rgba(100, 255, 100, 0.2)' } // Color de fondo del área
    }
  };
  public radarChartLabels: string[] = ['Fuerza', 'Destreza', 'Inteligencia', 'Resistencia'];
  public radarChartData: ChartData<'radar'> = { labels: [], datasets: [] };
  public radarChartType: ChartType = 'radar';

  ngOnInit(): void {
    if (this.personaje) {
      this.cargarDatosChart(this.personaje);
    }
  }

  cargarDatosChart(personaje: Personaje): void {
    // Extrae los valores de las estadísticas en el orden de radarChartLabels
    const dataValues = [
      personaje.estadisticas.fuerza,
      personaje.estadisticas.destreza,
      personaje.estadisticas.inteligencia,
      personaje.estadisticas.resistencia,
    ];

    this.radarChartData = {
      labels: this.radarChartLabels,
      datasets: [
        { 
          data: dataValues, 
          label: 'Stats', 
          borderColor: '#4CAF50', // Verde vibrante
          pointBackgroundColor: '#4CAF50',
          pointBorderColor: '#fff',
        }
      ],
    };
  }

}
