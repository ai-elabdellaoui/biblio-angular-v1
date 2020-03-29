import { Injectable } from '@angular/core';
import {Achat} from '../model/achat';
import {Achatdtail} from '../model/achatdtail';

@Injectable({
  providedIn: 'root'
})
export class AchatService {
  private _achat: Achat;
  private _achatDatail: Achatdtail;
  private _achatList: Array<Achat>;
  private _achatDetailList: Array<Achatdtail>;

  constructor() {
  }

  get achat(): Achat {
    if (this._achat == null) {
      this._achat = new Achat();
    }
    return this._achat;
  }

  public save() {
    this.achatList.push(this.cloneAchat(this.achat));
    this.achat= null;
  }

  public validateAchat(): boolean {
    return this.achat.ref != null && this.achat.bibliotheque.nom != null && this.achat.founisseur.reference != null && this.achat.achatDetails.length > 0;
  }

  public saveAchatDetail() {
    this.achatDetailList.push(this.cloneAchatDetail(this.achatDatail));
    this.achat.totale+=this.achatDatail.qte*this.achatDatail.prixUnitaire;
    this._achatDatail=null;
  }

  set achat(value: Achat) {
    this._achat = value;
  }

  get achatDatail(): Achatdtail {
    if (this._achatDatail == null) {
      this._achatDatail = new Achatdtail();
    }
    return this._achatDatail;
  }

  set achatDatail(value: Achatdtail) {
    this._achatDatail = value;
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

  get achatDetailList(): Array<Achatdtail> {
    if (this._achatDetailList == null) {
      this._achatDetailList = new Array<Achatdtail>();
    }
    return this._achatDetailList;
  }

  set achatDetailList(value: Array<Achatdtail>) {
    this._achatDetailList = value;
  }

  private cloneAchat(achat: Achat) {
    const myclone = new Achat();
    myclone.id = achat.id;
    myclone.ref = achat.ref;
    myclone.totale = achat.totale;
    myclone.founisseur=achat.founisseur;
    myclone.bibliotheque=achat.bibliotheque;
    return myclone;
  }

  private cloneAchatDetail(achatDatail: Achatdtail) {
   const myclone1 =new Achatdtail();
    myclone1.livre=achatDatail.livre;
    myclone1.achat= this.achat;
    myclone1.qte=achatDatail.qte;
    myclone1.prixUnitaire=achatDatail.prixUnitaire;

    return  myclone1;
  }
}
