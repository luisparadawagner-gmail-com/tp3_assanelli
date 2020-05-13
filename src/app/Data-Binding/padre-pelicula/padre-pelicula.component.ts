import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre-pelicula',
  templateUrl: './padre-pelicula.component.html',
  styleUrls: ['./padre-pelicula.component.css']
})
export class PadrePeliculaComponent implements OnInit {
  varPelicula : string = 'Con Air';
  otraPeliculaFavorita : string = '60 segundos';



  constructor() {}

  ngOnInit(): void {}

  onCambioPelicula(peliculaNueva) {
    this.otraPeliculaFavorita = peliculaNueva;
  }

}
