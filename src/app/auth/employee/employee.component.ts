import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  @ViewChild('formRef') employeeForm: NgForm | undefined;
  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    this.employeeForm && this.employeeForm.valid
      ? console.log(this.employeeForm.value)
      : null;
  }
}
