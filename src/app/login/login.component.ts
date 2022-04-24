import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  private readonly EMAIL_KEY = "email";
 
  constructor(private _router:Router,
              private _userService:UsersService) { }


  isAuthentical:boolean = false;

  

  ngOnInit(): void {
    localStorage.clear();
  }

  

  onLogin(data:any) : void{
    this.isAuthentical = true;
    this._userService.login(data.email, data.password)
                      .subscribe((response:any) => {
                        if(response && response[0] && response[0].id){
                          this.isAuthentical = true;
                          localStorage.setItem(this.EMAIL_KEY,data.email);
                          this._router.navigate(['dashboard'])
                        }
                        else{
                          localStorage.clear();
                          this.isAuthentical = false;
                          throw new Error('not authenticated')
                        }
                      });

  }
}
