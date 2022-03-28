import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title  = 'Mein Titel';
  email = 'me@swiss.com';
  colSpan = 2;
  Courses = ['course1', 'course2', 'course3'];
  tweet = {
    body: "Here is the body of a tweet",
    isLiked: false,
    likesCount: 10
  };

  onKeyUp(eingabe: any) {
    console.log(eingabe);
  }
  onKeyUp2() {
    console.log(this.email);
  }
}
