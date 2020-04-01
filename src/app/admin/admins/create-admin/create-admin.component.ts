import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../../controller/service/admin.service';
import {Admin} from '../../../controller/model/admin.model';

@Component({
  selector: 'app-create-admin',
  templateUrl: './create-admin.component.html',
  styleUrls: ['./create-admin.component.css']
})
export class CreateAdminComponent implements OnInit {

  constructor(private  adminService: AdminService) { }

  ngOnInit(): void {
  }
  get admin(){
    return this.adminService.admin;
  }

 public  save(){
    this.adminService.save();
 }


}
