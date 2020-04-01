import {Livre} from './livre';
import {Achat} from './achat';

export class Achatdetail {
  public  id: number;
  public prixUnitaire : number;
  public qte :number;
  public  livre : Livre;

  constructor() {
    this.qte=0;
    this.prixUnitaire=0;
    this.livre= new Livre();
  }

}
