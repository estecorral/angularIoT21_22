import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioTemplateComponent } from './components/formulario-template/formulario-template.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { PeliculasListComponent } from './components/peliculas-list/peliculas-list.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { RegistroConfirmarComponent } from './components/registro-confirmar/registro-confirmar.component';
import { SerieComponent } from './components/serie/serie.component';
import { SeriesListComponent } from './components/series-list/series-list.component';

const routes: Routes = [
  {path: '', component: PrincipalComponent},
  {path: 'peliculas', component: PeliculasListComponent},
  {path: 'series', component: SeriesListComponent},
  {path: 'pelicula', component: PeliculaComponent},
  {path: 'serie', component: SerieComponent},
  {path: 'template', component: FormularioTemplateComponent},
  {path: 'confirmar', component: RegistroConfirmarComponent},
  {path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
