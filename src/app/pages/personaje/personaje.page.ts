import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonGrid,      // <-- AÑADIDO
  IonRow,       // <-- AÑADIDO
  IonCol, IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonListHeader, IonButton, IonToggle
} from '@ionic/angular/standalone';
import { Observable } from 'rxjs';
import { Personaje, PersonajeService } from 'src/app/core/personaje.service';
import { Router } from '@angular/router';
import { EstadisticasChartComponent } from 'src/app/components/estadisticas-chart/estadisticas-chart.component';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.page.html',
  styleUrls: ['./personaje.page.scss'],
  standalone: true,
  imports: [
    CommonModule, // Resuelve el error NG8103 (*ngIf y async pipe)
    FormsModule, // Aunque no se usa todavía, está bien si lo mantienes
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonListHeader,
    IonButton,
    // ELEMENTOS FALTANTES:
    IonGrid,      // <-- AÑADIDO
    IonRow,       // <-- AÑADIDO
    IonCol,       // <-- AÑADIDO
    // COMPONENTE FALTANTE:
    EstadisticasChartComponent, // <-- AÑADIDO
    IonToggle,
  ]
})
export class PersonajePage implements OnInit {

  // Almacenará el Observable del personaje.
  personaje$!: Observable<Personaje>;

  constructor(private personajeService: PersonajeService, private router: Router) { }

  ngOnInit() {
    // 1. Suscribirse al Observable para obtener el personaje
    this.personaje$ = this.personajeService.personaje$;

    // Ejemplo de uso:
    this.personajeService.curarPersonaje(5); // Llama a la función del servicio
  }

  // Ejemplo de acción (puedes usar este método para guardar la creación o avanzar)
  iniciarAventura() {
    // Navegar al mapa o a la siguiente pantalla del juego
    this.router.navigate(['/mapa']);
  }

  guardarPersonaje() {
    // Lógica de validación
    const nuevoPersonaje: Personaje = {
      nombre: '',
      saludActual: 0,
      saludMaxima: 0,
      nivel: 1,
      experiencia: 0,
      estadisticas: {
        fuerza: 0,
        destreza: 0,
        inteligencia: 0,
        resistencia: 0
      },
      inventario: []
    };
    this.personajeService.setPersonaje(nuevoPersonaje);
  }

  cambiarGenero(isMujer: boolean) {
    // Obtenemos la versión actual del personaje
    const personajeActual = this.personajeService.getPersonajeActual();

    // Cambiamos la propiedad 'genero' según el estado del toggle
    // Si el toggle está checked (true), el género es 'mujer'.
    personajeActual.genero = isMujer ? 'mujer' : 'hombre';

    // Usamos el servicio para notificar el cambio de estado (clave para la reactividad)
    this.personajeService.setPersonaje(personajeActual);
  }

}
