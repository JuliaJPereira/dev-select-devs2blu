import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pessoa } from 'src/app/models/pessoa/pessoa';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  urlApiPaciente = `${environment.urlApi}/pessoa`;

  constructor(private http: HttpClient) { }

  postPessoa(pessoa: Pessoa)
  {
    return this.http.post<Pessoa>(this.urlApiPaciente, pessoa);
  }

}