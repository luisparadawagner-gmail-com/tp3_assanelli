import { Component, OnInit } from '@angular/core';
import { Actor } from './../clase/Actor';

@Component({
  selector: 'app-hijo-actor',
  templateUrl: './hijo-actor.component.html',
  styleUrls: ['./hijo-actor.component.css']
})
export class HijoActorComponent implements OnInit {

  nombreActor: string;
  pelicula: string = "La Roca";

  imagenActor: string = 'https://vignette.wikia.nocookie.net/doblaje/images/4/46/Nicolas_cage.jpg/revision/latest?cb=20190207035634&path-prefix=es';
  anchoImg = '200';
  altoImg = '250';
  tooltip = 'Cage';

  actor: Actor = {
    nombre: 'Nicolas Cage',
    pelicula: 'La Roca',
    protagonista: true,
    edad: 56,
    lugarNac: 'California, EEUU'
    
  };

  constructor() { 
    this.nombreActor = " Nicolas Cage"
  }

  ngOnInit(): void {}

  verActor(actor : any) {
    alert('Actor:' + actor);
  }

}
