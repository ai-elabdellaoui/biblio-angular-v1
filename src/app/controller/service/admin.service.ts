import { Injectable } from '@angular/core';
import {Admin} from '../model/admin.model';
import {HttpClient} from '@angular/common/http';
import {error} from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private _admin : Admin;
  private _listadmin:Array<Admin>;
  private _createadmin : Admin ;
  private  url = 'http://localhost:8090/biblio/admin/' ;

  get createadmin(): Admin {
    return this._admin;
  }

  set createadmin(value: Admin) {
    this._createadmin = value;
  }

  get listadmin(): Array<Admin> {
    if (this._listadmin == null){
      this._listadmin=new Array<Admin>();
    }
    return this._listadmin;
  }

  set listadmin(value: Array<Admin>) {
    this._listadmin = value;
  }



  constructor(private http: HttpClient) { }

  public  save() {
    console.log('debut');
    console.log(this._admin);

    this.http.post(this.url + '/', this._admin).subscribe(
      data => {
        console.log(data);
    },
   error => {
        console.log(error);
    }
    );
  }

  addAdmin () {
    this.listadmin.push(this.cloneAdmin(this.admin));
    this._listadmin =null;
  }


  get admin(): Admin {
    if (this._admin == null){
      this._admin= new  Admin();
    }
    return this._admin;
  }

  set admin(value: Admin) {
    this._admin = value;
  }

  private cloneAdmin(admin: Admin) {
    const clondeAdmin = new Admin();
    clondeAdmin.cin = admin.cin;
    clondeAdmin.nom = admin.nom;
    clondeAdmin.prenom = admin.prenom;
    clondeAdmin.email = admin.email;
    clondeAdmin.password = admin.password;
    clondeAdmin.tel = admin.tel;
    clondeAdmin.dateContrat = admin.dateContrat;
    clondeAdmin.adresse = admin.adresse;
    return clondeAdmin;

  }
}
