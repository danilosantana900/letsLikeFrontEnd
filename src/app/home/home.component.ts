import { Component } from '@angular/core';

// Modulo de tela pincipal da aplicação
// *Dica: Podem implementar a tela pincipal do sistema*

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    projetos = ['Projeto Lets Code .Net', 'Projeto Lets Code Java', 'Projeto Lets Code Angular'];
    constructor() {
    }
}