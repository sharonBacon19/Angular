import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformativoRoutingModule } from './informativo-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';


@NgModule({
  declarations: [InicioComponent, AcercaDeComponent],
  imports: [
    CommonModule,
    InformativoRoutingModule
  ],
  exports: [InicioComponent, AcercaDeComponent]
})
export class InformativoModule { }
