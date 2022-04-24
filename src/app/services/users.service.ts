import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _client:HttpClient) {

   }

   login(email:string,password:string){
     let httpOptions = {
        params:{
          email,
          password
        }
     }
     return this._client.get('http://localhost:3000/users', httpOptions)
   }

   public isAuthenticated() :boolean {
     const email = localStorage.getItem('email');
     return (email !== null);
   }
}
