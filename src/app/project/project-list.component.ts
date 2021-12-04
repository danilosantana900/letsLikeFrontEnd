import { Component, OnInit } from '@angular/core';
import { User } from '@app/_models';
import { ProjectService } from '@app/_services';
import { first } from 'rxjs/operators';

@Component({ templateUrl: 'project-list.component.html' })
export class ProjectListComponent implements OnInit {
    // user: User;
    projetos = null;

    constructor(private projectService: ProjectService) { }

    ngOnInit() {
        this.projectService.getAll()
            .pipe(first())
            .subscribe(projetos => this.projetos = projetos);
    }

    deleteProjeto(id: string) {
        const projeto = this.projetos.find(x => x.id === id);
        projeto.isDeleting = true;
        this.projectService.delete(id)
            .pipe(first())
            .subscribe(() => this.projetos = this.projetos.filter(x => x.id !== id));
    }
}