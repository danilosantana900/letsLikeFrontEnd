import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { Projeto, User } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class ProjectService {
    
    private projetoSubject: BehaviorSubject<Projeto>;
    public projeto: Observable<Projeto>;

    private userSubject: BehaviorSubject<User>;
    public user: Observable<User>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.projetoSubject = new BehaviorSubject<Projeto>(JSON.parse(localStorage.getItem('projeto')));
        this.projeto = this.projetoSubject.asObservable();
        this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
        this.user = this.userSubject.asObservable();
    }

    public get projetoValue(): Projeto {
        return this.projetoSubject.value;
    }
    
    public get userValue(): User {
        return this.userSubject.value;
    }

    getAll() {
        console.log(`${environment.apiUrl}/api/Projeto/`);
        return this.http.get<Projeto[]>(`${environment.apiUrl}/api/Projeto`);
    }

    getById(id: number) {
        return this.http.get<Projeto>(`${environment.apiUrl}/api/Projeto/${id}`);
    }

    register(projeto: Projeto) {
        // projeto.idUsuarioCadastro = parseInt(this.userValue.id);
        return this.http.post(`${environment.apiUrl}/api/Projeto`, projeto);
    }

    update(id, params) {
        return this.http.put(`${environment.apiUrl}/api/Projeto/${id}`, params)
            .pipe(map(x => {
                if (id == this.projetoValue.id) {
                    const projeto = { ...this.projetoValue, ...params };
                    localStorage.setItem('projeto', JSON.stringify(projeto));
                    this.projetoSubject.next(projeto);
                }
                return x;
            }));
    }

    delete(id: number) {
        return this.http.delete(`${environment.apiUrl}/api/projeto/${id}`)
            .pipe(map(x => {
                if (id === this.projetoValue.id) { }
                return x;
            }));
    }
}