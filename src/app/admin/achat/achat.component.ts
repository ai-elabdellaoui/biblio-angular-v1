import { Component, OnInit } from '@angular/core';
import {AchatService} from '../../controller/service/achat.service';
import {Achat} from '../../controller/model/achat';

@Component({
  selector: 'app-achat',
  templateUrl: './achat.component.html',
  styleUrls: ['./achat.component.css']
})
export class AchatComponent implements OnInit {
  searchInput:string="";
  constructor(private achatService : AchatService) { }

  ngOnInit(): void {
    this.findAll();
  }

  get achatList(): Array<Achat> {
   return  this.achatService.achatList;


  }
  get achat() : Achat{
    return   this.achatService.achat;
  }
  public deleteByRef(achat: Achat){
 return    this.achatService.deleteByRef(achat);
  }
public  findByAchatRef(achat :Achat){
  return   this.achatService.findByAchatRef(achat);
}
public  findAll(){
  return   this.achatService.findAll();
}
public search(){
  return   this.achatService.search(this.searchInput);
}
}
