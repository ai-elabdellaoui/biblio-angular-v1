import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../controller/service/admin.service';
import {Admin} from '../../controller/model/admin.model';

@Component({
  selector: 'app-admins',
  templateUrl: `./admins.component.html`,
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {

  constructor(private  adminService: AdminService) { }

  ngOnInit(): void {
  }
  get admins(){
    return this.adminService.admin;
  }

}
