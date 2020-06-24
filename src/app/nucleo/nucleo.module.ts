import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { PieComponent } from './pie/pie.component';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';



@NgModule({
  declarations: [EncabezadoComponent, PieComponent, PaginaNoEncontradaComponent],
  imports: [
    CommonModule
  ],
  exports: [EncabezadoComponent, PieComponent]
})
export class NucleoModule { }
