import { IdentifiedEntity } from './basic.models';

export const RISK_I18N: string = 'Risk';

export type Status = 'todo' | 'in-progress' | 'completed';

export enum Categories {
  home = 'Home',
  beauty = 'Beauty',
  work = 'Work',
  food = 'Food',
}

export enum Priority {
  low = 'Low',
  medium = 'Medium',
  high = 'High',
}

export interface ITask extends IdentifiedEntity {
  category?: Categories;
  title?: string;
  priority?: Priority;
  status?: Status;
  description?: string;
}
