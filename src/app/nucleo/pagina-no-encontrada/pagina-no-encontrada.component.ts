import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-no-encontrada',
  templateUrl: './pagina-no-encontrada.component.html',
  styleUrls: ['./pagina-no-encontrada.component.css']
})

export class PaginaNoEncontradaComponent implements OnInit {

  constructor(private router: Router) {}
    ngOnInit(): void {}
    irInicio() {
    // Redireccionar a la ruta raíz
    this.router.navigate(['/']);
  }
}
