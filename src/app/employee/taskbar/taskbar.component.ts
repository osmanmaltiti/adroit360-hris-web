import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  IDevelopmentGoal,
  IGoal,
} from 'src/app/store/features/development/types';
import { IPerformanceGoal } from './../../store/features/performance/types';
import { TaskbarService } from './taskbar.service';

@Component({
  selector: 'app-taskbar',
  templateUrl: './taskbar.component.html',
  styleUrls: ['./taskbar.component.css'],
})
export class TaskbarComponent implements OnInit {
  @Output('refresh') refreshApi: EventEmitter<any> = new EventEmitter();
  @Input('data') objective: IGoal = {
    type: 'performance goal',
    fields: {
      development: { status: '', data: [] },
      support: { status: '', data: [] },
      activity: { status: '', data: [] },
      comments: { status: '', data: [] },
    },
  };

  popupDisplay: boolean = false;
  popupData: [string, any] = ['', ''];

  constructor(private taskbarService: TaskbarService) {}

  ngOnInit(): void {}

  setPopup() {
    this.popupDisplay = !this.popupDisplay;
  }

  setPopupData(data: [string, any]) {
    this.popupData = data;
  }

  setComplete(objective: IGoal) {
    this.taskbarService.onComplete(objective).subscribe({
      next: () => this.refreshApi.emit(),
    });
  }

  onReviewSubmit(objective: IGoal) {
    this.taskbarService.onReviewSubmit(objective).subscribe({
      next: (value) => console.log(value),
    });
  }

  canSubmit(objective: any) {
    if (objective.type === 'development goal') {
      return objective.fields.development.status === 'ongoing';
    }
    return objective.fields.performance.status === 'ongoing';
  }

  getEntries(data: IDevelopmentGoal | IPerformanceGoal) {
    return Object.entries(data);
  }

  getRatings(data: string) {
    const stars = Array(Number(data)).fill(1);
    const noStars = Array(5 - Number(data)).fill(1);
    return { stars, noStars };
  }
}
