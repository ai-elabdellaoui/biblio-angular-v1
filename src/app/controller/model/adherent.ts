import { TypeAdherent} from './type-adherent.model';
import {Emprunt} from './emprunt';


export class Adherent {
  public id: number;
  public  cin:string ;
  public  nom:string ;
  public  prenom:string ;
  public email :string ;
  public  tel :string ;
  public  password :string ;
  public  login :string ;
  public  dateInscription: Date;
  public typeAdherent : TypeAdherent ;
}
