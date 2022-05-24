import { Endereco } from "../endereco/endereco";

export class Pessoa {
    idPessoa?: number;
    nomePessoa?: string;
    cpfPessoa?: string;
    rgPessoa?: string;
    enderecoPessoa?: Endereco = new Endereco({});
    emailPessoa?: string;
    telefonePessoa?: string;
    idadePessoa?: string;
    generoPessoa?: string;

    constructor(obj: Partial<Pessoa>)
  {
    Object.assign(this, obj);
  }
}