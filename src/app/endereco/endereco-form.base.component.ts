import { FormGroup } from '@angular/forms';
import { ElementRef } from '@angular/core';

import { FormBaseComponent } from '../base-components/form-base.component';
import { Endereco } from './models/endereco';

export abstract class EnderecoBaseComponent extends FormBaseComponent {
    
    endereco: Endereco;
    errors: any[] = [];
    enderecoForm: FormGroup;

    constructor() {
        super();

        this.validationMessages = {
            logradouro: {
                required: 'Informe a rua',
                minlength: 'Mínimo de 2 caracteres',
                maxlength: 'Máximo de 200 caracteres'
            },
            numero: {
                required: 'Informe o número',
            },
            cidade: {
                required: 'Informe a cidade',
            },
            cep: {
                required: 'Informe o CEP',
            }
        }

        super.configurarMensagensValidacaoBase(this.validationMessages);
    }

    protected configurarValidacaoFormulario(formInputElements: ElementRef[]) {
        super.configurarValidacaoFormularioBase(formInputElements, this.enderecoForm);
    }
}