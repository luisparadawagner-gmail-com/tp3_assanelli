import { Component } from '@angular/core';

import { FormBuilder, FormArray, Validators } from '@angular/forms'

@Component({
  selector: 'app-formulario-pelicula',
  templateUrl: './formulario-pelicula.component.html',
  styleUrls: ['./formulario-pelicula.component.css']
})
export class FormularioPeliculaComponent {

  constructor(private fb: FormBuilder) {}

  peliculaForm = this.fb.group ({
    nombre: [''],
    genero: ['', Validators.required ],
    duracion: [''],
    fecha:[''],
    actores: this.fb.group ({
      cantidad: [''],
      nombreActor: [''],
    }),
    secuelas: this.fb.array ([ this.fb.control('')])
  }) 

  get secuelas() {
    return this.peliculaForm.get('secuelas') as FormArray;
  }

  agregarSecuelas() {
    this.secuelas.push(this.fb.control(''));
  }

  submit() {
    debugger;
    this.peliculaForm.value;
  }

} 