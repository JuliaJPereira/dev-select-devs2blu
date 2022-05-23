import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  ViaCepModel } from 'src/app/models/via-cep-modal/via-cep-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ViaCepService {

  constructor(private http: HttpClient) { }

  getCep(cep: string){
    const urlGet = `${environment.urlGet}${cep}/json`
    return this.http.get<ViaCepModel>(urlGet);
  }

}
