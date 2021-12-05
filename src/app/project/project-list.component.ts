import { Component, OnInit } from '@angular/core';
import { AccountService, ProjectService } from '@app/_services';
import { first } from 'rxjs/operators';

@Component({ templateUrl: 'project-list.component.html' })
export class ProjectListComponent implements OnInit {    
    projetos: any;

    constructor(
        private accountService: AccountService,
        private projectService: ProjectService
    ) {}

    ngOnInit() {
        console.log('ngOnInit');
        this.projectService.getAll()
            .pipe(first())
            .subscribe(projetos => this.projetos = projetos);
    }

    deleteProjeto(id: number) {
        const projeto = this.projetos.find(x => x.id == id);
        projeto.isDeleting = true;
        this.projectService.delete(id)
            .pipe(first())
            .subscribe(() => this.projetos = this.projetos.filter(x => x.id !== id));
    }
}