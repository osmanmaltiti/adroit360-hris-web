import {
  Directive,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appClickOutside]',
})
export class ClickOutsideDirective {
  @Output('close') close: EventEmitter<any> = new EventEmitter();
  @Input('appClickOutside') elementRef: any;

  constructor() {}

  @HostListener('click', ['$event.target']) closeDialog(event: Event) {
    if (this.elementRef === event) {
      this.close.emit();
    }
  }
}
