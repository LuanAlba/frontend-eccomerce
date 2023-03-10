import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";

import { BaseService } from 'src/app/services/base.service';
import { Endereco } from "../models/endereco";

@Injectable()
export class EnderecoService extends BaseService {

    constructor(private http: HttpClient) { super() }

    obterTodos(): Observable<Endereco[]> {
        return this.http
            .get<Endereco[]>(this.UrlServiceV1 + "/endereco", super.ObterAuthHeaderJson())
            .pipe(catchError(super.serviceError));
    }

    obterPorId(id: string): Observable<Endereco> {
        return this.http
            .get<Endereco>(this.UrlServiceV1 + "/endereco/" + id, super.ObterAuthHeaderJson())
            .pipe(catchError(super.serviceError));
    }

    novoEndereco(produto: Endereco): Observable<Endereco> {
        return this.http
            .post(this.UrlServiceV1 + "/endereco", produto, super.ObterAuthHeaderJson())
            .pipe(
                map(super.extractData),
                catchError(super.serviceError));
    }   
}
