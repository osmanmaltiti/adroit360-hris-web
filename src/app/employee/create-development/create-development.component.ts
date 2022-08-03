import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-development',
  templateUrl: './create-development.component.html',
  styleUrls: ['./create-development.component.css'],
})
export class CreateDevelopmentComponent implements OnInit {
  @Input('setOpen') setOpen: boolean = false;
  @Output('close') setClose: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onClick(id: string, name: string) {
    const target = document.getElementById(id);
    const newInputFeild = document.createElement('input');
    newInputFeild.setAttribute('name', name);
    newInputFeild.setAttribute(
      'class',
      'border-b-2 border-black focus:outline-none py-1'
    );
    target?.appendChild(newInputFeild);
  }

  onClose() {
    this.setClose.emit();
  }
}
