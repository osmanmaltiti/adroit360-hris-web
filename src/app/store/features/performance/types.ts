export interface IPerformanceGoal {
  performance: Array<string>;
  measures: Array<string>;
  comments: Array<string>;
  score: number;
  rating: number;
}

export interface IGoal {
  type: 'performance goal' | 'development goal';
  fields: IPerformanceGoal;
}

export interface IInitialState {
  objectives: Array<IGoal>;
}
