import { Id } from './member-type';

export type ProjectType = {
  id: Id;
  title: string;
  technologies?: string[];
};
