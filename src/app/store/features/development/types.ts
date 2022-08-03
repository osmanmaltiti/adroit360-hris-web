export interface IDevelopmentGoal {
  development: Array<string>;
  support: Array<string>;
  activity: Array<string>;
  comments: Array<string>;
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
