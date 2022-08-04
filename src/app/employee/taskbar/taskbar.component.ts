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
  @Input('data') objective: IGoal = {
    type: 'performance goal',
    fields: {
      development: { status: '', data: [] },
      support: { status: '', data: [] },
      activity: { status: '', data: [] },
      comments: { status: '', data: [] },
      score: 0,
      rating: 0,
    },
  };

  popupDisplay: boolean = false;
  popupData: [string, any] = ['', ''];

  constructor() {}

  ngOnInit(): void {}

  setPopup() {
    this.popupDisplay = !this.popupDisplay;
  }

  setPopupData(data: [string, any]) {
    this.popupData = data;
  }

  onReviewSubmit(objective: IGoal) {
    console.log(objective);
  }

  getEntries(data: IDevelopmentGoal) {
    return Object.entries(data);
  }

  getRatings(data: string) {
    const stars = Array(Number(data)).fill(1);
    const noStars = Array(5 - Number(data)).fill(1);
    return { stars, noStars };
  }
}
