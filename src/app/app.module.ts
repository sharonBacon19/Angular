import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NucleoModule } from './nucleo/nucleo.module';
import { CompartirModule } from './compartir/compartir.module';
import { InformativoModule } from './informativo/informativo.module';
import { UsuarioModule } from './usuario/usuario.module';
import { PeliculaModule } from './pelicula/pelicula.module';
import { ProductoModule } from './producto/producto.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NucleoModule,
    CompartirModule,
    InformativoModule,
    UsuarioModule,
    PeliculaModule,
    ProductoModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
