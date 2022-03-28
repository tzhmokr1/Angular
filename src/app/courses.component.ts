import { Component} from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'app-courses',
    template: `
           {{ text | summary: 10}}
        `
})
export class CoursesComponent {
    text = `
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    `;
}

