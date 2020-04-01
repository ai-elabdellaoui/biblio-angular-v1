import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../controller/service/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
  }
  public save() {
    this.adminService .save();
  }
  public get admin() {
    return this.adminService.admin;
  }
public  set admin(value) {
    this.adminService.admin = value;
}
public  validatelogin(){
    this.adminService.validatelogin();
}
}
