import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'src/app/interfaces/menuItem';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items:MenuItem[]=[];

  constructor(private _router:Router,
              public _userService:UsersService) {
      this.setMenuItems();
   }

  ngOnInit(): void {
  }

  setMenuItems(){
    this.items.push({title:'Home',link:'dashboard'})
    this.items.push({title:'Courses',link:'courses'})
  }

  logout(){
    localStorage.clear();
    this._router.navigate(['login']);
  }

}
