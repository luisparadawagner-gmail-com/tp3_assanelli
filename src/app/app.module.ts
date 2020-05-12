import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioPeliculaComponent } from './formulario/formulario-pelicula/formulario-pelicula.component';
import { from } from 'rxjs';
import { HijoActorComponent } from './Data-Binding/hijo-actor/hijo-actor.component';
import { PadrePeliculaComponent } from './Data-Binding/padre-pelicula/padre-pelicula.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioPeliculaComponent,
    HijoActorComponent,
    PadrePeliculaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
