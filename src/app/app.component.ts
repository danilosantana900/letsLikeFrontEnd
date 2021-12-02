import { Component } from '@angular/core';
import { AccountService, ProjectService } from './_services';
import { User } from './_models';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    user: User;

    constructor(
        private accountService: AccountService,
        private projetoService: ProjectService,
        ) {
        this.accountService.user.subscribe(x => this.user = x);
        this.projetoService.user.subscribe(x => this.user = x);

    }

    logout() {
        
    }
}