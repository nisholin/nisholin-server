import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CreateEmployee } from '../models/CreateEmployee';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public data: any = {};
  public createEmpModel: CreateEmployee = {
    firstName: "",
    lastName: "",
    email: "",
    userName: "",
    password: ""
  };

  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

  login(value: any) {
    const {uname , password } = value;
    if(uname && password ) {
      this.loginService.getToken({userName: uname , password: password}).subscribe((res)=> {
        if(res?.jwtToken) {
          console.log(res);
          localStorage.setItem('token', res.jwtToken);
          this.router.navigate(['/employees']);
        }
      })
    }
  }

  public createEmployee() {

  }
}
