import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService, ProjectService } from '@app/_services';

@Component({ templateUrl: 'add-edit.component.html' })
export class AddEditComponent implements OnInit {
    form: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private pojectService: ProjectService,
        private alertService: AlertService
    ){}

    get f() { return this.form.controls; }

    ngOnInit() {
        this.form = this.formBuilder.group ({
            nome: ['', Validators.required],
            url: ['', Validators.required],
            image: ['', Validators.required]
        })
    }

    onSubmit() {

    }

    cancelar() {

    }
}