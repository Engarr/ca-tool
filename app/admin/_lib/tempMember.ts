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
  { id: 'notAssigned', projectTitle: 'Nie przypisani' },
  { id: 'ca-tool', projectTitle: 'ca-tool' },
  { id: 'food-tool', projectTitle: 'food-tool' },
  { id: 'rate-tool', projectTitle: 'rate-tool' },
  { id: 'bio-tool', projectTitle: 'bio-tool' },
  { id: 'bio-tool2', projectTitle: 'bio-tool2' },
];

export const memberList: MemberType[] = [
  {
    id: 1,
    columnId: '4',
    fullName: 'Andrzej Nowicki',
    specialization: {
      domain: 'Frontend',
      role: 'React/Next.js',
    },
    note: 'Tekst notatki',
    assignedToProjectId: 'notAssigned',
    range: 3,
  },
  {
    id: 2,
    columnId: '2',
    fullName: 'Jacek Gregorczyk',
    specialization: {
      domain: 'Frontend',
      role: 'React/Next.js',
    },
    range: 2,
  },
  {
    id: 3,
    columnId: '2',
    fullName: 'Przemek Król',
    specialization: {
      domain: 'Frontend',
      role: 'React/Next.js',
    },
    range: 3,
  },
  {
    id: 17,
    columnId: '1',
    fullName: 'Przemek Tracz',
    specialization: {
      domain: 'Frontend',
      role: 'Mobile(React Native)',
    },
    range: 2,
  },
  {
    id: 16,
    columnId: '1',
    fullName: 'Przemek Michałowicz',
    specialization: {
      domain: 'Frontend',
      role: 'Mobile(React Native)',
    },
    range: 0,
  },
  {
    id: 18,
    columnId: '1',
    fullName: 'Piotr Kowalski',
    specialization: {
      domain: 'Frontend',
      role: 'Mobile(React Native)',
    },
    range: 3,
  },

  {
    id: 4,
    columnId: '1',
    fullName: 'Anna Nowak',
    specialization: {
      domain: 'Backend',
      role: '.Net',
    },
    range: 1,
  },
  {
    id: 5,
    columnId: '2',
    fullName: 'Piotr Kowalski',
    specialization: {
      domain: 'Backend',
      role: '.Net',
    },
    range: 1,
  },

  {
    id: 6,
    columnId: '3',
    fullName: 'Katarzyna Kowalczyk',
    specialization: {
      domain: 'Others',
      role: 'Grafika',
    },
    range: 1,
  },
  {
    id: 7,
    columnId: '3',
    fullName: 'Michał Lewandowski',
    specialization: {
      domain: 'Others',
      role: 'Grafika',
    },
    range: 2,
  },
  {
    id: 19,
    columnId: '1',
    fullName: 'Michał Kuternoga',
    specialization: {
      domain: 'Others',
      role: 'Grafika',
    },
    range: 1,
  },
  {
    id: 8,
    columnId: '4',
    fullName: 'Magdalena Nowakowska',
    specialization: {
      domain: 'Backend',
      role: '.Net',
    },
    assignedToProjectId: 'notAssigned',
    range: 3,
  },
  {
    id: 9,
    columnId: '4',
    fullName: 'Grzegorz Dąbrowski',
    specialization: {
      domain: 'Others',
      role: 'UI/UX',
    },
    assignedToProjectId: 'notAssigned',
    range: 3,
  },
  {
    id: 10,
    columnId: '5',
    fullName: 'Karolina Wójcik',
    specialization: {
      domain: 'Frontend',
      role: 'Mobile(React Native)',
    },
    range: 2,
  },
  {
    id: 11,
    columnId: '5',
    fullName: 'Marek Jankowski',
    specialization: {
      domain: 'Backend',
      role: '.Net',
    },
    range: 2,
  },

  {
    id: 12,

    columnId: '6',
    fullName: 'Ewa Malinowska',
    specialization: {
      domain: 'Others',
      role: 'PM',
    },
    range: 2,
  },
  {
    id: 13,
    columnId: '6',
    fullName: 'Adam Nowak',
    specialization: {
      domain: 'Others',
      role: 'Copywriting',
    },
    range: 2,
  },
  {
    id: 14,
    columnId: '6',
    fullName: 'Ewa Malinowska',
    specialization: {
      domain: 'Others',
      role: 'UI/UX',
    },
    range: 0,
  },
  {
    id: 15,
    columnId: '6',
    fullName: 'Adam Nowak',
    specialization: {
      domain: 'Backend',
      role: '.Net',
    },
    range: 0,
  },
  {
    id: 20,
    columnId: '3',
    fullName: 'Adam Małysz',
    specialization: {
      domain: 'Others',
      role: 'Social Media/Marketing',
    },
    range: 0,
  },
  {
    id: 21,
    columnId: '3',
    fullName: 'Adam Mickiewicz',
    specialization: {
      domain: 'Others',
      role: 'Copywriting',
    },
    range: 1,
  },
  {
    id: 22,
    columnId: '1',
    fullName: 'Jacek Placek',
    specialization: {
      domain: 'Backend',
      role: '.Net',
    },
    range: 1,
  },
  {
    id: 23,
    columnId: '2',
    fullName: 'Eugeniusz Geniusz',
    specialization: {
      domain: 'Backend',
      role: 'Node.js',
    },
    range: 1,
  },
  {
    id: 24,
    columnId: '2',
    fullName: 'Irek Mirek',
    specialization: {
      domain: 'Backend',
      role: '.Net',
    },
    range: 2,
  },
  {
    id: 25,
    columnId: '4',
    fullName: 'Józef Betlejem',
    specialization: {
      domain: 'Others',
      role: 'Copywriting',
    },
    assignedToProjectId: 'notAssigned',
    range: 2,
  },
  {
    id: 26,
    columnId: '4',
    fullName: 'Mikołaj Kopernik',
    specialization: {
      domain: 'Frontend',
      role: 'Mobile(React Native)',
    },
    assignedToProjectId: 'notAssigned',
    range: 2,
  },
  {
    id: 27,
    columnId: '4',
    fullName: 'Janusz Mikke',
    specialization: {
      domain: 'Others',
      role: 'Social Media/Marketing',
    },
    assignedToProjectId: 'notAssigned',
    range: 3,
  },
  {
    id: 28,
    columnId: '5',
    fullName: 'Człowiek Bardzodługienazwiskodlacelowsprawdzenia',
    specialization: {
      domain: 'Backend',
      role: 'Node.js',
    },
    range: 3,
  },
];
