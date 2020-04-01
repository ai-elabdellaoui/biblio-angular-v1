import { Injectable } from '@angular/core';
import {Admin} from '../model/admin.model';
import {HttpClient} from '@angular/common/http';
import {error} from '@angular/compiler/src/util';
import {subscribeTo} from 'rxjs/internal-compatibility';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private _admin : Admin;
  private _listadmin:Array<Admin>;
  private _createadmin : Admin ;

  private  url = 'http://localhost:8090/biblio/admin' ;

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
    console.log(this.admin);

    this.http.post(this.url +'/' , this.admin).subscribe(
      data => {
        if( data>0){
          this.listadmin.push(this.cloneAdmin(this.admin));
          this.admin =null;
        }
    },
   error => {
        console.log(error);
    }
    );

  }
  public findAll(){
    this.http.get<Array<Admin>>(this.url+"/").subscribe(admins=>this.listadmin=admins);
  }
  public search(search:string){
    console.log(search);
    this.http.get<Admin>(this.url+ '/cin/' +search).subscribe(
      data=>{
        if( data == null){
          this.findAll();
        }else{
         return      this._listadmin=this._listadmin.filter( res=>
            res.cin.toLocaleLowerCase().match(data.cin.toLocaleLowerCase()));
        }

      },error1 => {
        console.log(error1);
      }

    );
  }

public validatelogin(){
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
