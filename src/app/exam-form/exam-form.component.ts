import {Component} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Employee} from "../../Employee";
import {EmployeesService} from "../employees.service";

@Component({
  selector: 'app-exam-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './exam-form.component.html',
  styleUrl: './exam-form.component.css'
})
export class ExamFormComponent {
  employee: Employee = {
    name: "",
    surname: "",
    position: "",
    salary: 0
  };

  constructor(private employeeService: EmployeesService) {
  }

  submitEmployee() {
    this.employee = {
      name: "",
      surname: "",
      position: "",
      salary: 0
    };
    this.employeeService.add(this.employee);
  }

  validateForm() {
    let valid = true;
    valid = this.employee.name.length >= 4 && valid;
    valid = this.employee.surname.length >= 4 && valid;
    valid = this.employee.position !== "" && valid;
    valid = this.employee.salary >= 1 && valid;
    return valid;
  };
}
