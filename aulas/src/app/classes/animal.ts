export class Animal {
  nome: string;
  nomeDono: string;
  especie: string;
  imagemAnimal: string;
  dataProxConsulta: Date | undefined;

  constructor(nome: string, nomeDono: string, especie: string, imagemAnimal: string)
  {
    this.dataProxConsulta = undefined;
    this.nome = nome;
    this.nomeDono = nomeDono;
    this.especie = especie;
    this.imagemAnimal = imagemAnimal;
  }
}
