import { Injectable } from '@angular/core';
import {Achat} from "../model/achat";
import {Achatdetail} from "../model/achatdetail";
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class AchatService {
  private _achat: Achat;
  private _achatDetail: Achatdetail;
  private  _achatList :Array<Achat>;


  constructor(private  http : HttpClient) {
  }

  get achatDetail(): Achatdetail {
    if(this._achatDetail == null){
      this._achatDetail = new Achatdetail();
    }
    return this._achatDetail;
  }

  set achatDetail(value: Achatdetail) {
    this._achatDetail = value;
  }



  get achat(): Achat {
    if (this._achat == null) {
      this._achat = new Achat();
    }
    return this._achat;
  }

  public save() {
    console.log(this.achat);
    console .log(this._achatDetail);
    this.http.post<number>('http://localhost:8090/biblio/achat/', this.achat).subscribe(
      data => {
        if (data > 0) {

          this.achatList.push(this.cloneAchat(this.achat));
          this.achat = null;

        }
      }, error => {
        console.log(error);
      }
    );

  }
  public  findByAchatRef(achat : Achat){
    this.http.get<Array<Achatdetail>>('http://localhost:8090/biblio/achatdetail'+ 'ref/' +achat.ref).subscribe(
      data=>{
        this.achat.achatDetail=data;
      },error => {
        console.log(error);
      }

    );
  }
  public findAll()  {
  this.http.get<Array<Achat>>('http://localhost:8090/biblio/achat/').subscribe(

  data=>{
    this.achatList=data;

},error => {
    console.log(error);
    }

  );

}
  public search(search:string){
    console.log(search);
    this.http.get<Achat>('http://localhost:8090/biblio/achat'+/ref/  +search).subscribe(
      data=>{
        if( data == null){
          this.findAll();
        }else{
          return      this.achatList=this.achatList.filter( res=>
            res.ref.toLocaleLowerCase().match(data.ref.toLocaleLowerCase()));
        }

      },error1 => {
        console.log(error1);
      }

    );
  }

public deleteByReffromView(achat: Achat){

   let index= this.achatList.findIndex(a =>a.ref ===achat.ref );
   if(index!==-1){
     this._achatList.splice(index,1);

   }
}
public  deleteByRef(achat : Achat){
    this.http.delete<number>('http://localhost:8090/biblio/achat/'+ 'ref/' +achat.ref).subscribe();
    this.deleteByReffromView(achat);
}
  public validateAchat(): boolean {
    return this.achat.ref != null && this.achat.bibliotheque.nom != null && this.achat.fournisseur.cin != null && this.achat.achatDetail.length > 0;
  }

  public saveAchatDetail() {
    console.log(this.achatDetail);
    console.log(this.achat.achatDetail);
    console.log(this.achat)
    this.achat.achatDetail.push(this.cloneAchatDetail(this.achatDetail));
    this.achat.totale+=this.achatDetail.qte*this.achatDetail.prixUnitaire;
    this._achatDetail=null;
  }

  set achat(value: Achat) {
    this._achat = value;
  }



  get achatList(): Array<Achat> {
    if (this._achatList == null) {
      this._achatList = new Array<Achat>();
    }
    return this._achatList;
  }

  set achatList(value: Array<Achat>) {
    this._achatList = value;
  }



  private cloneAchat(achat: Achat) {
    const myclone = new Achat();
    myclone.id = achat.id;
    myclone.ref = achat.ref;
    myclone.totale = achat.totale;
    myclone.fournisseur=achat.fournisseur;
    myclone.bibliotheque=achat.bibliotheque;
    return myclone;
  }

  private cloneAchatDetail(achatdetail: Achatdetail) {
   const myclone1 =new Achatdetail();
    myclone1.livre=achatdetail.livre;
    myclone1.qte=achatdetail.qte;
    myclone1.prixUnitaire=achatdetail.prixUnitaire;

    return  myclone1;
  }
}
