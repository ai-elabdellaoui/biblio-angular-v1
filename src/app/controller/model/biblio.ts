import {Achat} from './achat';
import {Stock} from './stock';

export class Biblio {
  public id: number;
  public  ref:string ;
  public nom: string  ;
  public adresse : string  ;
  public achats : Array<Achat>;
  public  stocks: Array<Stock>;

  constructor() {
  this.achats = new Array<Achat>();
  this.stocks = new Array<Stock>();
  }
}
