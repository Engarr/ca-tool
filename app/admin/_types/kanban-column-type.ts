import { Id } from './member-type';

export type KanbanColumnType = {
  id: Id;
  title: string;
  notes?: string;
};
