import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ObjectiveService {
  data: Array<IGoals> = [
    {
      goalType: 'performance goal',
      goals: [
        {
          field: 'performance goals',
          data: ['Task 1', 'Task 2', 'Task 3', 'Task 4'],
        },
        {
          field: 'key performance measures',
          data: ['measures 1', 'measures 2', 'measures 3', 'measures 4'],
        },
        {
          field: 'job handlers comment',
          data: ['comment 1', 'comment 2', 'comment 3', 'comment 4'],
        },
        {
          field: 'score',
          data: ['score 1', 'score 2', 'score 3', 'score 4'],
        },
        {
          field: 'ratings',
          data: ['ratings 1', 'ratings 2', 'ratings 3', 'ratings 4'],
        },
      ],
    },
    {
      goalType: 'development goal',
      goals: [
        {
          field: 'development goals',
          data: [
            'development 1',
            'development 2',
            'development 3',
            'development 4',
          ],
        },
        {
          field: 'manager support',
          data: ['support 1', 'support 2', 'support 3', 'support 4'],
        },
        {
          field: 'activity to achieve goal',
          data: ['activity 1', 'activity 2', 'activity 3', 'activity 4'],
        },
        {
          field: 'job handlers comment',
          data: ['comment 1', 'comment 2', 'comment 3', 'comment 4'],
        },
        {
          field: 'score',
          data: ['score 1', 'score 2', 'score 3', 'score 4'],
        },
        {
          field: 'ratings',
          data: ['ratings 1', 'ratings 2', 'ratings 3', 'ratings 4'],
        },
      ],
    },
  ];
}

export interface IGoals {
  goalType: 'performance goal' | 'development goal';
  goals: Array<{
    field: string;
    data: Array<any>;
  }>;
}
