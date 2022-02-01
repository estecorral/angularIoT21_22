import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./modules/material/material.module";
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { PeliculasListComponent } from './components/peliculas-list/peliculas-list.component';
import { SeriesListComponent } from './components/series-list/series-list.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { SerieComponent } from './components/serie/serie.component';
import { PeliculasService } from './services/peliculas.service';
import { HttpClientModule } from '@angular/common/http';
import { PuntuacionComponent } from './components/puntuacion/puntuacion.component';
import { FormularioTemplateComponent } from './components/formulario-template/formulario-template.component';
import { FormsModule } from '@angular/forms';
import { RegistroConfirmarComponent } from './components/registro-confirmar/registro-confirmar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PrincipalComponent,
    PeliculasListComponent,
    SeriesListComponent,
    PeliculaComponent,
    SerieComponent,
    PuntuacionComponent,
    FormularioTemplateComponent,
    RegistroConfirmarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    PeliculasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
