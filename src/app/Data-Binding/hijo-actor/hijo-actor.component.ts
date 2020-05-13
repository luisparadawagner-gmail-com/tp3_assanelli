import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Actor } from './../clase/Actor';

@Component({
  selector: 'app-hijo-actor',
  templateUrl: './hijo-actor.component.html',
  styleUrls: ['./hijo-actor.component.css']
})
export class HijoActorComponent implements OnInit {

  @Input () peliculaHijo: string;
  @Output () peliculaHijoEvento = new EventEmitter<string>();

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

  actor1 : Actor[] = [{
    nombre: 'Sean Connery',
    pelicula: 'La Roca',
    protagonista: true,
    edad: 89,
    lugarNac: 'Edimburgo, Reino Unido'
  },
  {
  nombre: 'Ed Harris',
    pelicula: 'La Roca',
    protagonista: true,
    edad: 69,
    lugarNac: 'Nueva Jersey, EEUU'
  },
  {
    nombre: 'David Morse',
      pelicula: 'La Roca',
      protagonista: false,
      edad: 66,
      lugarNac: 'Massachusetts, EEUU'
    },
];

  constructor() { 
    this.nombreActor = " Nicolas Cage"
  }

  ngOnInit(): void {}

  verActor(actor : any) {
    alert('Actor:' + actor);
  }

  cambioPelicula() {
    this.peliculaHijoEvento.emit('Con Air');
  }

}
