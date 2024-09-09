import { Component } from '@angular/core';
import { Employee } from './employee';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngforwithobjectarray';
  employees:Employee[]=
  [
   new Employee(1,"user1",101),
   new Employee(2,"user2",102),
   new Employee(3,"user3",103),
   new Employee(4,"user4",104),
   new Employee(5,"user5",105),
   new Employee(6,"user6",106),
   new Employee(7,"user7",107),
   new Employee(8,"user8",108),
   new Employee(9,"user9",109),
   new Employee(10,"user10",110),
   new Employee(11,"user11",111),
   new Employee(12,"user12",112)
  ];
  constructor()
  {
    debugger;
    console.log("employees data array started");
    console.log(this.employees);
    console.log("employees data array ended");
    console.log(10+50);
  }
 
 
}
