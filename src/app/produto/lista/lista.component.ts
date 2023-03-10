import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/produto';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html'
})
export class ListaComponent implements OnInit {

  public produtos: Produto[];
  errorMessage: string;

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.produtos = [
      {
        id: 1,
        nome: 'Galaxy S10+',
        marca: 'Samsung',
        categoria: 'Smartphones',
        valor: 3000,
        valorPromo: 0,
        promocao: false,
        imagem: 'celular.jpg',
        ativo: true
      },
      {
        id: 2,
        nome: 'Go Pro 8',
        marca: 'Amazon',
        categoria: 'Casa inteligente',
        valor: 300,
        valorPromo: 224,
        promocao: true,
        imagem: 'gopro.jpg',
        ativo: true
      },
      {
        id: 3,
        nome: 'Monitor Ulrawide 29"',
        marca: 'Amazon',
        categoria: 'Dispositivos Kindle e eBooks',
        valor: 849.99,
        valorPromo: 0,
        promocao: false,
        imagem: 'monitor.jpg',
        ativo: true
      },
      {
        id: 4,
        nome: 'Mouse Microsoft',
        marca: 'Amazon',
        categoria: 'Dispositivos Kindle e eBooks',
        valor: 98.99,
        valorPromo: 0,
        promocao: false,
        imagem: 'mouse.jpg',
        ativo: true
      },
      {
        id: 5,
        nome: 'Notebook Asus',
        marca: 'Amazon',
        categoria: 'Dispositivos Kindle e eBooks',
        valor: 2899,
        valorPromo: 0,
        promocao: false,
        imagem: 'laptop.jpg',
        ativo: true
      },
      {
        id: 6,
        nome: 'Webcam Logitech',
        marca: 'Amazon',
        categoria: 'Dispositivos Kindle e eBooks',
        valor: 284,
        valorPromo: 200,
        promocao: true,
        imagem: 'webcam.jpg',
        ativo: false
      }
    ]
  }
}
