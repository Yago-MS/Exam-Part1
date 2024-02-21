import { Injectable } from '@angular/core';
import {Employee} from "../Employee";
import EMPLOYEE_LIST from "../employee-list.json";
@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  employeeList:Employee[] = EMPLOYEE_LIST;
  constructor() { }

  add(employee:Employee){
    this.employeeList.push(employee)
    console.log(this.employeeList)
  }
  getEmployeeList(){
    console.log(this.employeeList)
    return this.employeeList;
  }
}
