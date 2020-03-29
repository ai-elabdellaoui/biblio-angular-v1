import {Livre} from './livre';
import {Achat} from './achat';

export class Achatdtail {
  public prixUnitaire : number;
  public qte :number;
  public  livre : Livre;
  public achat:Achat;
  constructor() {
    this.qte=0;
    this.prixUnitaire=0;
    this.livre= new Livre();
    this.achat = new Achat();
  }

}
