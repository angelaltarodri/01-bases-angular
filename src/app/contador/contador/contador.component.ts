import { Component } from "@angular/core";

@Component({
  selector: 'app-contador',
  template: `
    <h1>Hola Mundos</h1>
    <h1>{{ titulo }}</h1>
    <h3>
      La base es: <strong>{{ base }}</strong>
    </h3>
    <span>{{ undefined }}</span>
    <!-- <button (click)="sumar()">+ 1</button> -->
    <button (click)="acumular(base)">+ {{ base }}</button>
    <span> {{ numero }} </span>
    <button (click)="acumular(-base)">- {{ base }}</button>
    <!-- <button (click)="numero = numero - 1">- 1</button> -->
  `
})
export class ContadorComponent {
  titulo: string = 'Contador App';
  numero: number = 10;

  sumar () {
    this.numero += 1;
  }
  acumular (valor: number) {
    this.numero += valor;
  }
  base: number = 5;
}
