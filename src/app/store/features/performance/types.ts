export interface IPerformanceGoal {
  performance: { status: string; data: string[] };
  measures: { status: string; data: string[] };
  comments: { status: string; data: string[] };
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
