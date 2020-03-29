import {Fournisseur} from './fournisseur';
import {Achatdtail} from './achatdtail';
import {Biblio} from './biblio';

export class Achat {
public  id : number ;
public ref: string;
public totale:number;
public achatDetails:Array<Achatdtail>;
public founisseur:Fournisseur;
public bibliotheque:Biblio;


  constructor() {
    this.totale=0;
    this.bibliotheque = new Biblio();
    this.achatDetails = new Array<Achatdtail>();
    this.founisseur = new Fournisseur();
  }
}
