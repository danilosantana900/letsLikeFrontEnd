import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AccountService, AlertService } from '@app/_services';
import { Alert, User } from '@app/_models';

@Component({ templateUrl: 'register.component.html' })
export class RegisterComponent implements OnInit {
    form: FormGroup;
    loading = false;
    submitted = false;
    user: User;

    constructor(
        private formBuilder: FormBuilder,
        private accountService: AccountService,
        private alertService: AlertService,
        private router: Router
    ) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            nome: ['', Validators.required],
            username: ['', Validators.required],
            email: ['', Validators.required],
            senha: ['', Validators.required],
            confirmeSenha: ['', Validators.required]
        });       
    }

    // getter para facilitar o acesso aos campos do formulário
    get f() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;

        this.alertService.clear();

        if (this.form.invalid) {
            return;
        }

        if ((this.f.senha.value != '') &&
            (this.f.confirmeSenha.value != '') && 
            (this.f.senha.value != this.f.confirmeSenha.value)) {
            console.log('Senha não são iguais!');            
        }

        this.loading = true;

        this.user.nome = this.f.nome.value;
        this.user.username = this.f.username.value;
        this.user.email = this.f.email.value;
        this.user.senha = this.f.senha.value;
        
        this.accountService.register(this.user);              
    }

    cancelar() {
        this.router.navigate(['login']);
    }
}