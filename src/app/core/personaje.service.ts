// src/app/core/personaje.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

// 1. Interfaz para definir la estructura de datos del personaje
export interface Personaje {
  nombre: string;
  saludActual: number;
  saludMaxima: number;
  nivel: number;
  experiencia: number;
  genero?: 'hombre' | 'mujer';
  estadisticas: {
    fuerza: number;
    destreza: number;
    inteligencia: number;
    resistencia: number;
  };
  inventario: string[]; // Por ahora, solo nombres de ítems
}

@Injectable({
  providedIn: 'root' // Esto lo hace un servicio "Standalone" disponible globalmente
})
export class PersonajeService {

  // 2. Estado inicial del personaje (cuando el juego inicia o se crea un personaje)
  private estadoInicial: Personaje = {
    nombre: 'Héroe Anónimo',
    saludActual: 100,
    saludMaxima: 100,
    nivel: 1,
    experiencia: 0,
    genero: 'hombre',
    estadisticas: {
      fuerza: 10,
      destreza: 10,
      inteligencia: 10,
      resistencia: 10,
    },
    inventario: ['Poción de Salud', 'Espada Rota'],
  };

  // 3. BehaviorSubject: Almacena el estado actual y emite la última versión a los suscriptores.
  private personajeSubject = new BehaviorSubject<Personaje>(this.estadoInicial);

  // 4. Observable: Es la versión 'pública' y de solo lectura del estado.
  public personaje$: Observable<Personaje> = this.personajeSubject.asObservable();

  constructor() { }

  /**
   * Obtiene el valor actual del objeto Personaje.
   */
  getPersonajeActual(): Personaje {
    return this.personajeSubject.getValue();
  }

  /**
   * Carga o crea un nuevo personaje, actualizando el estado.
   * @param nuevoPersonaje - El nuevo objeto Personaje a establecer.
   */
  setPersonaje(nuevoPersonaje: Personaje): void {
    // Aquí puedes añadir lógica de validación o guardado
    this.personajeSubject.next(nuevoPersonaje);
  }

  /**
   * Ejemplo de función de lógica de juego: Curar al personaje.
   * @param cantidad - Puntos de salud a recuperar.
   */
  curarPersonaje(cantidad: number): void {
    const personaje = this.getPersonajeActual();
    personaje.saludActual = Math.min(personaje.saludMaxima, personaje.saludActual + cantidad);
    
    // 5. Es crucial llamar a next() para emitir el nuevo estado a todos los suscriptores.
    this.personajeSubject.next(personaje);
    console.log(`Personaje curado. Salud actual: ${personaje.saludActual}`);
  }
}