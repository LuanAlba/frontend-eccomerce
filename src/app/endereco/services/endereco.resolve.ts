import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Endereco } from '../models/endereco';
import { EnderecoService } from './endereco.service';

@Injectable()
export class EnderecoResolve implements Resolve<Endereco> {

    constructor(private enderecoService: EnderecoService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.enderecoService.obterPorId(route.params['id']);
    }
}