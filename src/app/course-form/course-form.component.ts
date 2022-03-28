import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CourseFormComponent {
  categories = [
    {id: 1, name: 'Development'},
    {id: 2, name: 'Science'},
    {id: 3, name: 'Personal development'},
    {id: 4, name: 'Architecture'},
    {id: 5, name: 'Economics'},
    {id: 6, name: 'Artificial Inteligence'},
    {id: 7, name: 'Arts'},
    {id: 8, name: 'Design'},
    {id: 9, name: 'Other'}
  ];
  moneyBack: boolean | undefined;

  submit(f: NgForm) {
    console.log(f);
  }
}
