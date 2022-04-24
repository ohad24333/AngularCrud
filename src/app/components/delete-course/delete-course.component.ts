import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-delete-course',
  templateUrl: './delete-course.component.html',
  styleUrls: ['./delete-course.component.css']
})
export class DeleteCourseComponent implements OnInit {

  id:number =0;

  constructor(private route : ActivatedRoute ,
                private courseService:CoursesService,
                private router:Router) {
                       this.route.params.subscribe(params => {
                       this.id=params['id'];
    });

   }

  ngOnInit(): void {
  }

  onDelete(){
    this.courseService
        .deleteCourse(this.id)
        .subscribe((res:any) => {
          this.router.navigate(['courses']);
        })
  }

}
