import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Course } from 'src/app/interfaces/course';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

  course:Course = {} as Course
  id:number = 0;
  constructor(private courseService:CoursesService,
              private activetedRoute:ActivatedRoute,
              private router:Router            
  ) {
                this.activetedRoute.params.subscribe((params:Params)=> {
                    this.id = params['id'];

                }); 
   }

  ngOnInit(): void {
    this.courseService.getSingleCourse(this.id)
                        .subscribe((c:any) => this.course = c);
  }

  onSubmit(){
    this.courseService.updateCourse(this.id,this.course)
                        .subscribe({
                          next: (response:any)=> {
                            this.router.navigate(['courses']);
                          },
                          error: (err:any) => console.error(err),
                          complete: () => console.log('complete')
                        });
  }
}
