import { Component, Input, OnInit } from '@angular/core';
import { IGoals } from '../objectives.service';

@Component({
  selector: 'app-taskbar',
  templateUrl: './taskbar.component.html',
  styleUrls: ['./taskbar.component.css'],
})
export class TaskbarComponent implements OnInit {
  @Input('data') objectives: IGoals | undefined;

  constructor() {}

  ngOnInit(): void {}
}
