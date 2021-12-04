import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { Projeto } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class ProjectService {
    
    private projetoSubject: BehaviorSubject<Projeto>;
    public projeto: Observable<Projeto>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.projetoSubject = new BehaviorSubject<Projeto>(JSON.parse(localStorage.getItem('projeto')));
        this.projeto = this.projetoSubject.asObservable();
    }

    public get projetoValue(): Projeto {
        return this.projetoSubject.value;
    }

    getAll() {
        return this.http.get<Projeto[]>(`${environment.apiUrl}/api/Projeto`);
    }

    delete(id: string) {
        return this.http.delete(`${environment.apiUrl}/api/projeto/${id}`)
            .pipe(map(x => {
                if (id == this.projetoValue.id) { }
                return x;
            }));
    }
}