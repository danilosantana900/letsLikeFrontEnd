import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService, ProjectService } from '@app/_services';

@Component({ templateUrl: 'project-add-edit.component.html' })
export class ProjectAddEditComponent implements OnInit {
    form: FormGroup;
    submitted = false;
    loading = false;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private pojectService: ProjectService,
        private alertService: AlertService
    ) { }

    ngOnInit() {
        this.form = this.formBuilder.group ({
            nome: ['', Validators.required],
            url: ['', Validators.required],
            image: ['', Validators.required]
        })
    }

    get f() { return this.form.controls; }

    onSubmit() {

    }

    cancelar() {
        this.router.navigate(['projects']);
    }
}