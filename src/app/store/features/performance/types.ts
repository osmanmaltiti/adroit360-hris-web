export interface IPerformanceGoal {
  performance: { status: string; data: string[] };
  measures: { status: string; data: string[] };
  comments: { status: string; data: string[] };
}

export interface IPerfGoal {
  type: 'performance goal' | 'development goal';
  fields: IPerformanceGoal;
}

export interface IInitialState {
  objectives: Array<IPerfGoal>;
}
