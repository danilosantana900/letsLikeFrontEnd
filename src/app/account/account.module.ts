import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { AccountRoutingModule } from './account-routing.module';
import { LayoutComponent } from './layout.component';
import { LoginComponent } from './login.component';
import { MyMaterialModule } from '@app/material';
import { RecoverPasswordComponent } from './recoverPassword.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AccountRoutingModule,
        MyMaterialModule
    ],
    declarations: [
        LayoutComponent,
        LoginComponent,
        RegisterComponent,
        RecoverPasswordComponent
    ]
})
export class AccountModule { }