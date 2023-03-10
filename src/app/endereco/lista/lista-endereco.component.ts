import { Component, OnInit } from '@angular/core';

import { environment } from 'src/environments/environment';
import { EnderecoService } from '../services/endereco.service';
import { Endereco } from '../models/endereco';

@Component({
  selector: 'app-lista-endereco',
  templateUrl: './lista-endereco.component.html'
})
export class ListaComponent implements OnInit {

  public enderecos: Endereco[];
  errorMessage: string;

  constructor(private enderecoService: EnderecoService) { }

  ngOnInit(): void {
    this.enderecoService.obterTodos()
      .subscribe(
        enderecos => this.enderecos = enderecos,
        error => this.errorMessage);
  }
}
