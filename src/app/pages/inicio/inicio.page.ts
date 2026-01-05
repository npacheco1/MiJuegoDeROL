import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonButton, IonToolbar } from '@ionic/angular/standalone';
import { Router , RouterModule} from '@angular/router'; // Importar el Router de Angular
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonButton, IonToolbar, CommonModule, FormsModule , RouterModule]
})
export class InicioPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navegarACrearPersonaje() {
    console.log('Navegando a la creación de personaje...');
    this.router.navigate(['/personaje']);
  }

  // 3. Métodos placeholder para otros botones
  cargarPartida() {
    console.log('Funcionalidad de Cargar Partida aún no implementada.');
    // Aquí podrías mostrar un Toast o un Alert de Ionic.
  }

  mostrarOpciones() {
    console.log('Funcionalidad de Opciones aún no implementada.');
  }

}
