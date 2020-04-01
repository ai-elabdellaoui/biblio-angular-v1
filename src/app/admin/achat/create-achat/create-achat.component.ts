import { Component, OnInit } from '@angular/core';
import {AchatService} from '../../../controller/service/achat.service';
import {Achatdetail} from '../../../controller/model/achatdetail';
import {Achat} from '../../../controller/model/achat';

@Component({
  selector: 'app-create-achat',
  templateUrl: './create-achat.component.html',
  styleUrls: ['./create-achat.component.css']
})
export class CreateAchatComponent implements OnInit {

  constructor(private achatService: AchatService) {
  }

  ngOnInit(): void {
  }

  get achat(): Achat {
    return this.achatService.achat;
  }

  get achatdetail(): Achatdetail {
    return this.achatService.achatDatail;
  }

  get achatList(): Array<Achat> {
    return this.achatService.achatList;


  }

  public saveAchatDetail() {
    this.achatService.saveAchatDetail();
  }

  public save() {
    this.achatService.save();
  }

}
