import { Component, OnInit, AfterViewInit, ViewChildren, ElementRef } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { CustomValidators } from '@narik/custom-validators';
import { ToastrService } from 'ngx-toastr';

import { Usuario } from '../../models/usuario';
import { ContaService } from '../services/conta.service';

import { FormBaseComponent } from 'src/app/base-components/form-base.component';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent extends FormBaseComponent implements OnInit, AfterViewInit {

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

  errors: any[] = [];
  cadastroForm: FormGroup;
  usuario: Usuario;

  constructor(private fb: FormBuilder,
    private contaService: ContaService,
    private router: Router,
    private toastr: ToastrService) {

    super();

    this.validationMessages = {
      nome: {
        required: "Informe o nome",
        minlength: "O nome deve possuir mais de 3 caracteres"
      },
      email: {
        required: 'Informe o e-mail',
        email: 'Email inválido'
      },
      password: {
        required: 'Informe a senha',
        rangeLength: 'A senha deve possuir entre 6 e 15 caracteres'
      },
      confirmPassword: {
        required: 'Informe a senha novamente',
        rangeLength: 'A senha deve possuir entre 6 e 15 caracteres',
        equalTo: 'As senhas não conferem'
      }
    };

    super.configurarMensagensValidacaoBase(this.validationMessages);
  }

  ngOnInit(): void {

    let senha = new FormControl('', [Validators.required, CustomValidators.rangeLength([6, 15])]);
    let senhaConfirm = new FormControl('', [Validators.required, CustomValidators.rangeLength([6, 15]), CustomValidators.equalTo(senha)]);
    let nome = new FormControl('', [Validators.required, Validators.minLength(3)]);

    this.cadastroForm = this.fb.group({
      nome: nome,
      email: ['', [Validators.required, Validators.email]],
      password: senha,
      confirmPassword: senhaConfirm
    });
  }

  ngAfterViewInit(): void {
    super.configurarValidacaoFormularioBase(this.formInputElements, this.cadastroForm);
  }

  adicionarConta() {
    if (this.cadastroForm.dirty && this.cadastroForm.valid) {
      this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value);

      console.log(this.usuario)

      this.processarSucesso(this.usuario)
      // CHAMANDO A API
      // this.contaService.registrarUsuario(this.usuario)
      // .subscribe({
      //   next(usuario) {
      //     this.processarSucesso(usuario)
      //   },
      //   error(error){
      //     this.processarFalha(error)
      //   }
      // })
      this.mudancasNaoSalvas = false;
    }
  }

  processarSucesso(response: any) {
    if(this.errors.length > 0)
    {
      this.processarFalha(this.errors)
    }
    
    this.cadastroForm.reset();
    this.errors = [];

    this.contaService.LocalStorage.salvarUsuario(response);

    let toast = this.toastr.success('Registro realizado com Sucesso!', 'Bem vindo!!!');
    if (toast) {
      toast.onHidden.subscribe(() => {
        this.router.navigate(['/home']);
      });
    }
  }

  processarFalha(fail: any) {
    this.errors = fail.error.errors;
  }
}
