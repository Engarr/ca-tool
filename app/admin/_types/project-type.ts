import { Id } from './member-type';

export type ProjectType = {
  id: Id;
  title: string;
  technologies?: string[];
  assignedPM?: Id;
  assignedLider?: Id;
  note?: string;
};
