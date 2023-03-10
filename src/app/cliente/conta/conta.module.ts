import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NarikCustomValidatorsModule } from '@narik/custom-validators';

import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { ContaAppComponent } from './conta.app.component';
import { ContaRoutingModule } from './conta.route';
import { ContaService } from './services/conta.service';
import { PerfilComponent } from './perfil/perfil.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';

@NgModule({
  declarations: [
    ContaAppComponent,
    CadastroComponent, 
    LoginComponent,
    PerfilComponent,
    CarrinhoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ContaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NarikCustomValidatorsModule
  ],
  providers: [
    ContaService
  ]
})
export class ContaModule { }
