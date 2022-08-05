export interface IFeedback {
  score: number;
  rating: number;
  employee: string;
  appraise: string;
  employeeId: string;
  managerId: string;
  objectiveType: string;
  developmentObjective: any;
  performanceObjective: any;
}

export interface IInitialState {
  allFeedbacks: Array<IFeedback>;
  feedback: IFeedback;
}
