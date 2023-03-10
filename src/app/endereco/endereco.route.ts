import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnderecoAppComponent } from './endereco.app.component';
import { ListaComponent } from './lista/lista-endereco.component';
import { EnderecoResolve } from './services/endereco.resolve';
import { NovoComponent } from './novo/novo.component';
import { ExcluirComponent } from './excluir/excluir.component';

const enderecoRouterConfig: Routes = [
    {
        path: '', component: EnderecoAppComponent,
        children: [
            { path: 'listar-enderecos', component: ListaComponent },
            {
                path: 'adicionar-novo', component: NovoComponent,
                data: [{ claim: { nome: 'Endereco', valor: 'Adicionar' } }],
            },
            {
                path: 'excluir/:id', component: ExcluirComponent,
                data: [{ claim: { nome: 'Endereco', valor: 'Excluir' } }],
                resolve: {
                    endereco: EnderecoResolve
                }
            },
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(enderecoRouterConfig)
    ],
    exports: [RouterModule]
})
export class EnderecoRoutingModule { }