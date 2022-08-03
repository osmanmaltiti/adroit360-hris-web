import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-performance',
  templateUrl: './create-performance.component.html',
  styleUrls: ['./create-performance.component.css'],
})
export class CreatePerformanceComponent implements OnInit {
  @Input('setOpen') setOpen: boolean = false;
  @Output('close') setClose: EventEmitter<any> = new EventEmitter();
  performanceForm: FormGroup = new FormGroup({});

  constructor() {}

  ngOnInit(): void {
    this.performanceForm = new FormGroup({
      performance: new FormArray([]),
      measures: new FormArray([]),
      comments: new FormArray([]),
    });
  }

  onClose() {
    this.setClose.emit();
  }

  onSubmit() {
    console.log(this.performanceForm.value);
  }

  onAdd(fieldName: string) {
    (<FormArray>this.performanceForm.get(fieldName)).push(
      new FormControl(null)
    );
  }

  getControls(controlName: string) {
    return (this.performanceForm.get(controlName) as FormArray).controls;
  }
}
