import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutoAppComponent } from './produto.app.component';
import { ListaComponent } from './lista/lista.component';
import { DetalhesComponent } from './detalhes/detalhes.component';

const produtoRouterConfig: Routes = [
    {
        path: '', component: ProdutoAppComponent,
        children: [
            { path: 'listar-todos', component: ListaComponent },
            { path: 'detalhes/:id', component: DetalhesComponent },
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(produtoRouterConfig)
    ],
    exports: [RouterModule]
})
export class ProdutoRoutingModule { }