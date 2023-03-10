import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContaAppComponent } from './conta.app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';

const contaRouterConfig: Routes = [
    {
        path: '', component: ContaAppComponent,
        children: [
            { path: 'cadastro', component: CadastroComponent},
            { path: 'login', component: LoginComponent},
            { path: 'perfil', component: PerfilComponent },
            { path: 'carrinho', component: CarrinhoComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(contaRouterConfig)
    ],
    exports: [RouterModule]
})
export class ContaRoutingModule { }