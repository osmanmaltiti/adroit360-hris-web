import { Component, Input, OnInit } from '@angular/core';
import {
  IDevelopmentGoal,
  IGoal,
} from 'src/app/store/features/development/types';

@Component({
  selector: 'app-taskbar',
  templateUrl: './taskbar.component.html',
  styleUrls: ['./taskbar.component.css'],
})
export class TaskbarComponent implements OnInit {
  @Input('data') objectives: IGoal = {
    type: 'performance goal',
    fields: {
      development: [],
      support: [],
      activity: [],
      comments: [],
      score: 0,
      rating: 0,
    },
  };

  constructor() {}

  ngOnInit(): void {}

  getEntries(data: IDevelopmentGoal) {
    return Object.entries(data);
  }

  getRatings(data: string) {
    const stars = Array(Number(data)).fill(1);
    const noStars = Array(5 - Number(data)).fill(1);
    return { stars, noStars };
  }
}
