import { Component, OnInit, ViewChildren, ElementRef } from '@angular/core';
import { FormBuilder, Validators, FormControlName } from '@angular/forms';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { EnderecoService } from '../services/endereco.service';
import { EnderecoBaseComponent } from '../endereco-form.base.component';


@Component({
  selector: 'app-novo-endereco',
  templateUrl: './novo.component.html'
})
export class NovoComponent extends EnderecoBaseComponent implements OnInit {

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

  constructor(private fb: FormBuilder,
    private enderecoService: EnderecoService,
    private router: Router,
    private toastr: ToastrService) { super(); }

  ngOnInit(): void {
    this.enderecoForm = this.fb.group({
      logradouro: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(200)]],
      cep: ['', [Validators.required]],
      bairro: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(1000)]],
      numero: ['', [Validators.required]],
      complemento: [''],
      nomeRecebedor: [[''], [Validators.required]],
      ehEnderecoPadrao: [[false]]
    });
  }

  ngAfterViewInit(): void {
    super.configurarValidacaoFormulario(this.formInputElements);
  }

  adicionarEndereco() /* Acionando a API */ {
    if (this.enderecoForm.dirty && this.enderecoForm.valid) {
      this.endereco = Object.assign({}, this.endereco, this.enderecoForm.value);

      this.enderecoService.novoEndereco(this.endereco)
        .subscribe({
          next: (sucesso: any) => { this.processarSucesso(sucesso) },
          error: (falha: any) => { this.processarFalha(falha) }
        });

      this.mudancasNaoSalvas = false;
    }
  }

  processarSucesso(response: any) {
    this.enderecoForm.reset();
    this.errors = [];

    let toast = this.toastr.success('Endereco cadastrado com sucesso!', 'Sucesso!');
    if (toast) {
      toast.onHidden.subscribe(() => {
        this.router.navigate(['/enderecos/listar-todos']);
      });
    }
  }

  processarFalha(fail: any) {
    this.errors = fail.error.errors;
    this.toastr.error('Ocorreu um erro!', 'Opa :(');
  }
}

