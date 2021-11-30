import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { User } from '@app/_models';

// Serviços que fazem a ponte com o back-end

@Injectable({ providedIn: 'root' })
export class AccountService {
    loginSucesso: boolean = false;
    private userSubject: BehaviorSubject<User>;
    public user: Observable<User>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
        this.user = this.userSubject.asObservable();
    }

    public get userValue(): User {
        return this.userSubject.value;
    }

    login(username, password) {
        return this.http.post<boolean>(`${environment.apiUrl}/api/login`, { username, password } )
            .pipe(map(login => {
                localStorage.setItem('login', JSON.stringify(login));
                this.loginSucesso = true;
            }));
        if (this.loginSucesso) {
            console.log('Usuário Logado');
        }
    }

    logout() {
        localStorage.removeItem('login');
        this.router.navigate(['/account/login']);
    }

    register(user: User) {
        return this.http.post(`${environment.apiUrl}/api/usuario`, user);
    }
}