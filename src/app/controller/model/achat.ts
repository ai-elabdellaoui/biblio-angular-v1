import {Fournisseur} from './fournisseur';
import {Achatdetail} from './achatdetail';
import {Biblio} from './biblio';

export class Achat {
public  id : number ;
public ref: string;
public totale:number;
public achatDetail:Array<Achatdetail>;
public fournisseur:Fournisseur;
public bibliotheque:Biblio;


  constructor() {
    this.totale=0;
    this.bibliotheque = new Biblio();
    this.achatDetail = new Array<Achatdetail>();
    this.fournisseur= new Fournisseur();
  }
}
