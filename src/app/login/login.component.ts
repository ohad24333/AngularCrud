import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  private readonly EMAIL_KEY = "email";
 
  constructor(private _router:Router) { }


  isAuthentical:boolean = false;

  

  ngOnInit(): void {
  }

  

  onLogin(data:any) : void{
    if(data.email === "abc@gmail.com" 
      && data.password === "a12345" ){
          this.isAuthentical = true;
          localStorage.setItem(this.EMAIL_KEY, data.email);
          this._router.navigate(['dashboard']);
      }else{
        this.isAuthentical = false;
      }

  }
}
