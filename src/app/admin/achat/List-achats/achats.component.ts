import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../../controller/service/admin.service';
import {AchatService} from '../../../controller/service/achat.service';
import {Achat} from '../../../controller/model/achat';

@Component({
  selector: 'app-achats',
  templateUrl: './achats.component.html',
  styleUrls: ['./achats.component.css']
})
export class AchatsComponent implements OnInit {

  constructor(private  achatService :AchatService) { }

  ngOnInit(): void {
  }


   get achatList() : Array<Achat>{
   return this.achatService.achatList;
  }
}

