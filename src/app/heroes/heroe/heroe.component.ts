import { Component } from '@angular/core';
@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html'
})
export class HeroeComponent{
  nombre: string = 'Spiderman';
  edad: number = 25;

  get nombreCapitalizado() {
    return this.nombre.toUpperCase();
  }

  obtenerNombre ():string {
    return `${this.nombre} - ${this.edad}`
  }

  cambiarNombre ():void {
    this.nombre = 'Iron Man'
  }
  cambiarEdad ():void {
    this.edad += 10
  }
}
