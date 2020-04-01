import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../../controller/service/admin.service';
import {Admin} from '../../../controller/model/admin.model';

@Component({
  selector: 'app-list-admins',
  templateUrl: './list-admins.component.html',
  styleUrls: ['./list-admins.component.css']
})
export class ListAdminsComponent implements OnInit {

  constructor(private  adminService: AdminService) { }
  searchInput:string = "";
  ngOnInit(): void {
    this.findAll();
  }


  get listadmin(): Array<Admin> {

    return this.adminService.listadmin;
  }

  get admin(): Admin {
    return this.adminService.admin;

}
 public search(){
     this.adminService.search(this.searchInput);
}
public findAll(){
    this.adminService.findAll();
}

}
