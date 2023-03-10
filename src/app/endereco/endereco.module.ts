import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista-endereco.component';
import { EnderecoService } from './services/endereco.service';
import { EnderecoResolve } from './services/endereco.resolve';
import { EnderecoRoutingModule } from './endereco.route';
import { EnderecoAppComponent } from './endereco.app.component';
import { NovoComponent } from './novo/novo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExcluirComponent } from './excluir/excluir.component';


@NgModule({
  declarations: [
    EnderecoAppComponent,
    ListaComponent,
    NovoComponent,
    ExcluirComponent
  ],
  imports: [
    CommonModule,
    EnderecoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers:[
    EnderecoService,
    EnderecoResolve
  ]
})
export class EnderecoModule { }
