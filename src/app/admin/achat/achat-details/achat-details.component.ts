import { Component, OnInit } from '@angular/core';
import {AchatService} from '../../../controller/service/achat.service';

@Component({
  selector: 'app-achat-details',
  templateUrl: './achat-details.component.html',
  styleUrls: ['./achat-details.component.css']
})
export class AchatDetailsComponent implements OnInit {

  constructor(private achatService:AchatService) { }

  ngOnInit(): void {
  }
  get achatDetail(){
    return this.achatService.achatDatail;
  }
  get achatDetailList(){
    return this.achatService.achatDetailList;
  }
  public saveAchatDetail(){
    this.achatService.saveAchatDetail();
  }
    get achat (){
   return  this.achatService.achat;
  }

}
