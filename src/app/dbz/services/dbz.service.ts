import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {

  private _personajes: Personaje [] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 13000
    },
  ]

  get personajes() {
    return [...this._personajes]; //buena practica de javascript
  }

  constructor () {
    // console.log("Servicio inicializado")
  }

  agregarPersonaje(personaje: Personaje){
    this._personajes.push(personaje);
  }

}
