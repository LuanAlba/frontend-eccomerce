import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Produto } from '../models/produto';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html'
})
export class DetalhesComponent {

  produto: Produto;

  constructor(private route: ActivatedRoute,
    private produtoService: ProdutoService) {

    this.produto = this.route.snapshot.data['produto'];
  }

}
