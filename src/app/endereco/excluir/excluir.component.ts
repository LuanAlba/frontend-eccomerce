import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Endereco } from '../models/endereco';
import { EnderecoService } from '../services/endereco.service';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html'
})
export class ExcluirComponent  {

  endereco: Endereco;

  constructor(private enderecoService: EnderecoService,
    private route: ActivatedRoute,
    private router: Router) {

    this.endereco = this.route.snapshot.data['endereco'];
  }

}

