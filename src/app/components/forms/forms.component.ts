import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ViaCepModel } from 'src/app/models/via-cep-modal/via-cep-model';
import { ViaCepService } from 'src/app/services/via-cep/via-cep.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  formCadastro : ViaCepModel = {};

  showForm = new Subject<boolean>();

  constructor(private cepService: ViaCepService) { }

  ngOnInit(): void {
  }

  getViaCEP(cep: FocusEvent){
    if ((cep.target as HTMLInputElement)?.value){
      let inputCEP = (cep.target as HTMLInputElement)?.value;
      const cepResponse = this.cepService.getCep(inputCEP);
      cepResponse.subscribe(
        (cepModel) => {
          this.formCadastro = cepModel
          this.showForm.next(true);
        }
      )
    }
  }

}
