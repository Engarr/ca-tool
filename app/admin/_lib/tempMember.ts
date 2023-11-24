import { MemberType } from '../_types/member-type';
import { KanbanColumnType } from '../_types/kanban-column-type';
import { ProjectType } from '../_types/project-type';

export const columnList: KanbanColumnType[] = [
  { id: '1', title: 'Kandydaci' },
  { id: '2', title: 'Oczekujący na decyzję' },
  { id: '3', title: 'Uczący się' },
  { id: '4', title: 'Projekty' },
  { id: '5', title: 'Stażyści' },
  { id: '6', title: 'Absolwenci' },
];

export const confirmedProjectList: ProjectType[] = [
  { id: '0', projectTitle: 'Brak projektu' },
  { id: '1', projectTitle: 'ca-tool' },
  { id: '2', projectTitle: 'food-tool' },
  { id: '3', projectTitle: 'rate-tool' },
];

export const memberList: MemberType[] = [
  {
    id: 1,
    columnId: '4',
    fullName: 'Andrzej Nowicki',
    specialization: {
      domain: 'Frontednd',
      role: 'React/Next.js',
    },
    note: 'Tekst notatki',
    assignedToProjectId: '0',
  },
  {
    id: 2,
    columnId: '1',
    fullName: 'Jacek Gregorczyk',
    specialization: {
      domain: 'Frontednd',
      role: 'React/Next.js',
    },
  },
  {
    id: 3,
    columnId: '1',
    fullName: 'Przemek Król',
    specialization: {
      domain: 'Frontednd',
      role: 'React/Next.js',
    },
  },
  {
    id: 17,
    columnId: '1',
    fullName: 'Przemek Tracz',
    specialization: {
      domain: 'Frontednd',
      role: 'Mobile(React Native)',
    },
  },
  {
    id: 16,
    columnId: '1',
    fullName: 'Przemek Michałowicz',
    specialization: {
      domain: 'Frontednd',
      role: 'Mobile(React Native)',
    },
  },
  {
    id: 18,
    columnId: '1',
    fullName: 'Piotr Kowalski',
    specialization: {
      domain: 'Frontednd',
      role: 'Mobile(React Native)',
    },
  },

  {
    id: 4,
    columnId: '2',
    fullName: 'Anna Nowak',
    specialization: {
      domain: 'Backend',
      role: '.Net',
    },
  },
  {
    id: 5,
    columnId: '2',
    fullName: 'Piotr Kowalski',
    specialization: {
      domain: 'Backend',
      role: '.Net',
    },
  },

  {
    id: 6,
    columnId: '3',
    fullName: 'Katarzyna Kowalczyk',
    specialization: {
      domain: 'Others',
      role: 'Grafika',
    },
  },
  {
    id: 7,
    columnId: '3',
    fullName: 'Michał Lewandowski',
    specialization: {
      domain: 'Others',
      role: 'Grafika',
    },
  },
  {
    id: 19,
    columnId: '3',
    fullName: 'Michał Kuternoga',
    specialization: {
      domain: 'Others',
      role: 'Grafika',
    },
  },
  {
    id: 8,
    columnId: '4',
    fullName: 'Magdalena Nowakowska',
    specialization: {
      domain: 'Backend',
      role: '.Net',
    },
    assignedToProjectId: '2',
  },
  {
    id: 9,
    columnId: '4',
    fullName: 'Grzegorz Dąbrowski',
    specialization: {
      domain: 'Others',
      role: 'UI/UX',
    },
    assignedToProjectId: '3',
  },
  {
    id: 10,
    columnId: '5',
    fullName: 'Karolina Wójcik',
    specialization: {
      domain: 'Frontednd',
      role: 'Mobile(React Native)',
    },
  },
  {
    id: 11,
    columnId: '5',
    fullName: 'Marek Jankowski',
    specialization: {
      domain: 'Backend',
      role: '.Net',
    },
  },

  {
    id: 12,

    columnId: '6',
    fullName: 'Ewa Malinowska',
    specialization: {
      domain: 'Others',
      role: 'PM',
    },
  },
  {
    id: 13,
    columnId: '6',
    fullName: 'Adam Nowak',
    specialization: {
      domain: 'Others',
      role: 'Copywriting',
    },
  },
  {
    id: 14,
    columnId: '6',
    fullName: 'Ewa Malinowska',
    specialization: {
      domain: 'Others',
      role: 'UI/UX',
    },
  },
  {
    id: 15,
    columnId: '6',
    fullName: 'Adam Nowak',
    specialization: {
      domain: 'Backend',
      role: '.Net',
    },
  },
  {
    id: 20,
    columnId: '3',
    fullName: 'Adam Małysz',
    specialization: {
      domain: 'Others',
      role: 'Social Media/Marketing',
    },
  },
  {
    id: 21,
    columnId: '3',
    fullName: 'Adam Mickiewicz',
    specialization: {
      domain: 'Others',
      role: 'Copywriting',
    },
  },
  {
    id: 22,
    columnId: '2',
    fullName: 'Jacek Placek',
    specialization: {
      domain: 'Backend',
      role: '.Net',
    },
  },
  {
    id: 23,
    columnId: '2',
    fullName: 'Eugeniusz Geniusz',
    specialization: {
      domain: 'Backend',
      role: 'Node.js',
    },
  },
  {
    id: 24,
    columnId: '2',
    fullName: 'Irek Mirek',
    specialization: {
      domain: 'Backend',
      role: '.Net',
    },
  },
  {
    id: 25,
    columnId: '4',
    fullName: 'Józef Betlejem',
    specialization: {
      domain: 'Others',
      role: 'Copywriting',
    },
    assignedToProjectId: '1',
  },
  {
    id: 26,
    columnId: '4',
    fullName: 'Mikołaj Kopernik',
    specialization: {
      domain: 'Frontednd',
      role: 'Mobile(React Native)',
    },
    assignedToProjectId: '3',
  },
  {
    id: 27,
    columnId: '4',
    fullName: 'Janusz Mikke',
    specialization: {
      domain: 'Others',
      role: 'Social Media/Marketing',
    },
    assignedToProjectId: '',
  },
  {
    id: 28,
    columnId: '5',
    fullName: 'Człowiek Bardzodługienazwiskodlacelowsprawdzenia',
    specialization: {
      domain: 'Backend',
      role: 'Node.js',
    },
  },
];
