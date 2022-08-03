import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-performance',
  templateUrl: './create-performance.component.html',
  styleUrls: ['./create-performance.component.css'],
})
export class CreatePerformanceComponent implements OnInit {
  @Input('setOpen') setOpen: boolean = false;
  @Output('close') setClose: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onClick(id: string, name: string) {
    const target = document.getElementById(id);
    const newInputField = document.createElement('input');
    newInputField.setAttribute('name', name);
    newInputField.setAttribute(
      'class',
      'border-b-2 border-black focus:outline-none py-1'
    );
    target?.appendChild(newInputField);
  }

  onClose() {
    this.setClose.emit();
  }
}
