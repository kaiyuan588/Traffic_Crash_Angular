import { Component } from '@angular/core';
@Component({
    selector: 'courses', // <courses>
    template: `
            <h2>{{ title }}</h2>
            <ul>
                <li *ngFor="let course of courses">
                    {{ course }}
                </li>
            </ul>
    `
    // template: '<h2>{{ getTitle() }}</h2>'
})
export class CoursesComponent {
    title = "List of courses";
    courses = ["course1", "course2", "course3"]; 

    getTitle() {
        return this.title;
    }
}