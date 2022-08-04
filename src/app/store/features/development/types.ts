export interface IDevelopmentGoal {
  development: { status: string; data: string[] };
  support: { status: string; data: string[] };
  activity: { status: string; data: string[] };
  comments: { status: string; data: string[] };
  score: number;
  rating: number;
}

export interface IGoal {
  type: 'performance goal' | 'development goal';
  fields: IDevelopmentGoal;
}

export interface IInitialState {
  objectives: Array<IGoal>;
}
