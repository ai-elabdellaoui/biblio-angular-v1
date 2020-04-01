import { Component, OnInit } from '@angular/core';
import {Adherent} from '../../controller/model/adherent';
import {AdherentService} from '../../controller/service/adherent.service';
import {TypeAdherent} from '../../controller/model/type-adherent.model';

@Component({
  selector: 'app-adherent',
  templateUrl: './adherent.component.html',
  styleUrls: ['./adherent.component.css']
})
export class AdherentComponent implements OnInit {
  searchInput:string = "";
  constructor(private adherentService :AdherentService) { }

  ngOnInit(): void {
    this.findAll();
  }
  get adherent(): Adherent {
    return this.adherentService.adherent;
  }
  get listAdherent(): Array<Adherent> {

    return this.adherentService.listAdherent;


}
  get typeAdherent(): TypeAdherent {


    return this.adherentService.typeAdherent;
  }
  public  findAll(){
    this.adherentService.findAll();
  }
  public search(){
    this.adherentService.search(this.searchInput);
  }
}
