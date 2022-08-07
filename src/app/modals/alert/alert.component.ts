import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { store } from 'src/app/store/store';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent implements OnInit {
  @Input('alert') open: boolean = false;
  @Input('type') alertType: string = '';
  @Input('message') message: string = '';

  constructor(private stores: Store<typeof store>) {}

  ngOnInit(): void {
    this.stores.select('alertReducer').subscribe({
      next: (value) => {
        const assertType = value as unknown as {
          open: boolean;
          message: string;
        };
        this.open = assertType.open;
        this.message = assertType.message;
      },
    });
  }
}
