import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css'],
})
export class ManagerComponent implements OnInit {
  @ViewChild('formRef') employeeForm: NgForm | undefined;
  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    this.employeeForm && this.employeeForm.valid
      ? console.log(this.employeeForm.value)
      : null;
  }
}
