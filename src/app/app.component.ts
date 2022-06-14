import {Component, OnInit} from '@angular/core';
import {Person} from "./person";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular14';
  message = 'Hallo';
  myCombo = 'aaa';
  isStudent = true;
  isTeacher = false;
  country = 'AT';
  students: string[] = [];
  newName: string = "";
  persons: Person[] = [];

  ngOnInit(): void {
    console.log('AppComponent.ngOnInit');
    this.message = 'Hallo Angular';
    this.students = ['Hansi', 'Peter'];
    this.persons.push({firstname: 'Max', lastname: 'Muster'}, {firstname: 'Monika', lastname: 'Muster'}, {firstname: 'Anna', lastname: 'Huber'});
  }

  addName():void{
    this.students.push(this.newName);
    this.newName = "";
  }
}
