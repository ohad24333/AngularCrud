import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoursesComponent } from './courses/courses.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { AddCpurseComponent } from './components/add-cpurse/add-cpurse.component';
import { DeleteCourseComponent } from './components/delete-course/delete-course.component';
import { EditCourseComponent } from './components/edit-course/edit-course.component';
import{HttpClientModule} from '@angular/common/http'
import { AuthGuardService } from './services/auth-guard.service';

const webRoutes:Routes = [
  {path:'' , component : LoginComponent},
  {path:'login' , component : LoginComponent},
  {path:'dashboard' , component : DashboardComponent , canActivate : [AuthGuardService]},
  {path:'courses' , component : CoursesComponent , canActivate : [AuthGuardService]},
  {path:'courses/add-course' , component : AddCpurseComponent , canActivate : [AuthGuardService]} ,
  {path:'courses/delete/:id' , component : DeleteCourseComponent , canActivate : [AuthGuardService]},
  {path:'courses/edit/:id' , component : EditCourseComponent , canActivate : [AuthGuardService]},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CoursesComponent,
    MenuComponent,
    AddCpurseComponent,
    DeleteCourseComponent,
    EditCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(webRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
