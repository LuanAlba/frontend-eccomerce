import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListaComponent } from './lista/lista.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { ProdutoAppComponent } from './produto.app.component';
import { ProdutoRoutingModule } from './produto.route';
import { ProdutoService } from './services/produto.service';



@NgModule({
  declarations: [
    ProdutoAppComponent,
    ListaComponent,
    DetalhesComponent
  ],
  imports: [
        CommonModule,
        ProdutoRoutingModule,
        FormsModule,
        ReactiveFormsModule,
      ],
  providers: [
        ProdutoService,
      ]
})
export class ProdutoModule { }
