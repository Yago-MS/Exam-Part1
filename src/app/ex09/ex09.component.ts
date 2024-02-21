import { Component } from '@angular/core';
import {Employee} from "../../Employee";
import {NgForOf} from "@angular/common";
import {EmployeesService} from "../employees.service";

@Component({
  selector: 'app-ex09',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './ex09.component.html'
})
export class Ex09Component {
 employees: Employee[] = this.employeeService.getEmployeeList();

  constructor(private employeeService:EmployeesService) { }

  sortEmployees(type:string){
    if(type=="name")
      this.employees.sort( (a, b) => {return a.name> b.name ? 1 : a.name == b.name ? 0 : -1});
    if(type=="salary")
      this.employees.sort((a, b) => {return a.salary -b.salary});
    if(type=="surname")
      this.employees.sort((a, b) => {return a.surname> b.surname ? 1 : a.surname == b.surname ? 0 : -1});
    else
      this.employees.sort( (a, b) => {return a.position> b.position ? 1 : a.position == b.position ? 0 : -1});
  }
}
