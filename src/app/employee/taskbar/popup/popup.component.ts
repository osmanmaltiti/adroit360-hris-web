import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
})
export class PopupComponent implements OnInit {
  @Input('popupDisplay') popupDisplay: boolean = false;
  @Input('popupData') popupData: [string, any] = ['', ''];
  @Output('closePopup') closePopUp: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClose() {
    this.closePopUp.emit();
  }
}
