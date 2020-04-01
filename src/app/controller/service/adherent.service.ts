import { Injectable } from '@angular/core';
import {Adherent} from '../model/adherent';
import {TypeAdherent} from '../model/type-adherent.model';
import {Admin} from '../model/admin.model';

import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AdherentService {

  constructor(private  http : HttpClient) { }
  private _adherent: Adherent;
  private _listAdherent:Array<Adherent>;
  private _typeAdherent : TypeAdherent;


  get typeAdherent(): TypeAdherent {
    if( this.typeAdherent ==null){
      this.typeAdherent= new TypeAdherent();
    }


    return this._typeAdherent;
  }

  set typeAdherent(value: TypeAdherent) {
    this._typeAdherent = value;
  }

  get adherent(): Adherent {
    if(this._adherent == null){
      this._adherent = new Adherent();
    }
    return this._adherent;
  }

  set adherent(value: Adherent) {
    this._adherent = value;
  }

  get listAdherent(): Array<Adherent> {
    if(this._listAdherent == null){
      this._listAdherent = new Array<Adherent>();
    }
    return this._listAdherent;
  }

  set listAdherent(value: Array<Adherent>) {
    this._listAdherent = value;
  }

  public findAll(){
    this.http.get<Array<Adherent>>('http://localhost:8090/biblio/achat/').subscribe(data=>this.listAdherent=data);
  }
  public search(search:string){
    console.log(search);
    this.http.get<Adherent>('http://localhost:8090/biblio/achat'+ '/cin/' +search).subscribe(
      data=>{
        if( data == null){
          this.findAll();
        }else{
          return      this.listAdherent=this.listAdherent.filter( res=>
            res.cin.toLocaleLowerCase().match(data.cin.toLocaleLowerCase()));
        }

      },error1 => {
        console.log(error1);
      }

    );
  }


}
