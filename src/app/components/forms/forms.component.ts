import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Pessoa } from 'src/app/models/pessoa/pessoa';
import { ViaCepModel } from 'src/app/models/via-cep-modal/via-cep-model';
import { PessoaService } from 'src/app/services/pessoa/pessoa.service';
import { ViaCepService } from 'src/app/services/via-cep/via-cep.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  formCadastro : ViaCepModel = {};

  showForm = new Subject<boolean>();

  formPessoa: Pessoa = new Pessoa({});

  okInsert: boolean = false;


 /* SOFT SKILLS */

 arraySoftSkills = [
  { id: 1, descricao: 'Comunicativo' },
  { id: 2, descricao: 'Criativo' },
  { id: 3, descricao: 'Trabalho em equipe' },
  { id: 4, descricao: 'Quieto' },
  { id: 5, descricao: 'Curioso' },
  { id: 6, descricao: 'Trabalho melhor sozinho' },
  { id: 7, descricao: 'Blablabla' },
];

softSkillsDesejadas = [1, 3, 7];

softSkillsSelecionadas: number[] = [];

/* HARD SKILLS */

arrayHardSkills = [
  { id: 1, descricao: 'HTML' },
  { id: 2, descricao: 'CSS' },
  { id: 3, descricao: 'Bootstrap' },
  { id: 4, descricao: 'Sass' },
  { id: 5, descricao: 'JavaScript' },
  { id: 6, descricao: 'React' },
  { id: 7, descricao: 'Angular' },
  { id: 8, descricao: 'Vue' },
  { id: 9, descricao: 'Java' },
  { id: 10, descricao: 'Spring Boot' },
  { id: 11, descricao: 'Python' },
  { id: 12, descricao: 'C#' },
];

hardSkillsDesejadas = [1, 2, 5, 7, 9];

hardSkillsSelecionadas: number[] = [];



  constructor(private cepService: ViaCepService,
              private pessoaService: PessoaService) { }

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



  onClickSoftSkill(idSkill: number): void {
    if (this.softSkillsSelecionadas.indexOf(idSkill) === -1) {
      this.softSkillsSelecionadas.push(idSkill);
    } else {
      this.softSkillsSelecionadas = this.softSkillsSelecionadas.filter(
        (x) => x !== idSkill
      );
    }
  }



  getSoftSkillStyle(idSkill: number): string {
    if (this.softSkillsSelecionadas.indexOf(idSkill) !== -1) {
      return 'btn-selecionada';
    }

    return 'btn-nao-selecionada';
  }



  /* HARD SKILLS */

  onClickHardSkill(idSkill: number): void {
    if (this.hardSkillsSelecionadas.indexOf(idSkill) === -1) {
      this.hardSkillsSelecionadas.push(idSkill);
    } else {
      this.hardSkillsSelecionadas = this.hardSkillsSelecionadas.filter(
        (x) => x !== idSkill
      );
    }
  }




  getHardSkillStyle(idSkill: number): string {
    if (this.hardSkillsSelecionadas.indexOf(idSkill) !== -1) {
      return 'btn-selecionada';
    }

    return 'btn-nao-selecionada';
  }



  addPessoa()
  {
    this.pessoaService.postPessoa(this.formPessoa).subscribe(
      (pessoa) => {
        if (!(typeof pessoa.idPessoa == 'undefined') && pessoa.idPessoa > 0)
        {
          this.okInsert = true;
          setTimeout(()=>
          {
            this.okInsert = false;
            this.formPessoa = new Pessoa({});
          }, 5000);
        }
      }
    )
  }
  resetForm()
  {
    this.formPessoa = new Pessoa({});
  }


}
