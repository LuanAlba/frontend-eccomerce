import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './navegacao/home/home.component';
import { NotFoundComponent } from './navegacao/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/produtos/listar-todos', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'conta',
    loadChildren: () => import('./cliente/conta/conta.module')
      .then(m => m.ContaModule)
  },
  {
    path: 'produtos',
    loadChildren: () => import('./produto/produto.module')
      .then(m => m.ProdutoModule)
  },
  {
    path: 'enderecos',
    loadChildren: () => import('./endereco/endereco.module')
      .then(m => m.EnderecoModule)
  },

  { path: 'nao-encontrado', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
