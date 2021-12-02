import { Component, Input, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

// Modulo de tela pincipal da aplicação
// *Dica: Podem implementar a tela pincipal do sistema*

@Component({ templateUrl: 'project.component.html' })
export class ProjectComponent implements OnInit {
    projetos = ['Projeto Lets Code .Net', 'Projeto Lets Code Java', 'Projeto Lets Code Angular'];
    
    constructor() {
    }

    ngOnInit() {
        
    }
}