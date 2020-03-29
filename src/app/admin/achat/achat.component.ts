import { Component, OnInit } from '@angular/core';
import {AchatService} from '../../controller/service/achat.service';

@Component({
  selector: 'app-achat',
  templateUrl: './achat.component.html',
  styleUrls: ['./achat.component.css']
})
export class AchatComponent implements OnInit {

  constructor(private achatService :AchatService) { }

  ngOnInit(): void {
  }
  get achat(){
    return this.achatService.achat;
  }
  get achatList(){
    return this.achatService.achatList;
  }
  public save(){
    console.log(this.achat)
    this.achatService.save();
  }
  public validateAchat(){
   return  this.achatService.validateAchat();
  }
}
