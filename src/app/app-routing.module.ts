import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PaginaNoEncontradaComponent} from './nucleo/pagina-no-encontrada/pagina-no-encontrada.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', component: PaginaNoEncontradaComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
