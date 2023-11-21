import { MemberType } from '../types/member-type';
import { KanbanColumnType } from '../types/kanban-column-type';

export const columnList: KanbanColumnType[] = [
	{ id: '1', title: 'Kandydaci' },
	{ id: '2', title: 'Oczekujący' },
	{ id: '3', title: 'Uczący się' },
	{ id: '4', title: 'Projekty' },
	{ id: '5', title: 'Stażyści' },
	{ id: '6', title: 'Absolwenci' },
];

export const memberList: MemberType[] = [
	{
		id: 1,
		columnId: '1',
		fullName: 'Andrzej Nowicki',
	},
	{
		id: 2,
		columnId: '1',
		fullName: 'Jacek Gregorczyk',
	},
	{
		id: 3,
		columnId: '1',
		fullName: 'Przemek Król',
	},
	{
		id: 17,
		columnId: '1',
		fullName: 'Przemek Tracz',
	},
	{
		id: 16,
		columnId: '1',
		fullName: 'Przemek Michałowicz',
	},
	{
		id: 18,
		columnId: '1',
		fullName: 'Piotr Kowalski',
	},

	{
		id: 4,
		columnId: '2',
		fullName: 'Anna Nowak',
	},
	{
		id: 5,
		columnId: '2',
		fullName: 'Piotr Kowalski',
	},

	{
		id: 6,
		columnId: '3',
		fullName: 'Katarzyna Kowalczyk',
	},
	{
		id: 7,
		columnId: '3',
		fullName: 'Michał Lewandowski',
	},
	{
		id: 19,
		columnId: '3',
		fullName: 'Michał Kuternoga',
	},
	{
		id: 8,
		columnId: '4',
		fullName: 'Magdalena Nowakowska',
	},
	{
		id: 9,
		columnId: '4',
		fullName: 'Grzegorz Dąbrowski',
	},
	{
		id: 10,
		columnId: '5',
		fullName: 'Karolina Wójcik',
	},
	{
		id: 11,
		columnId: '5',
		fullName: 'Marek Jankowski',
	},

	{
		id: 12,

		columnId: '6',
		fullName: 'Ewa Malinowska',
	},
	{
		id: 13,
		columnId: '6',
		fullName: 'Adam Nowak',
	},
	{
		id: 14,
		columnId: '6',
		fullName: 'Ewa Malinowska',
	},
	{
		id: 15,
		columnId: '6',
		fullName: 'Adam Nowak',
	},
	{
		id: 20,
		columnId: '3',
		fullName: 'Adam Małysz',
	},
	{
		id: 21,
		columnId: '3',
		fullName: 'Adam Mickiewicz',
	},
	{
		id: 22,
		columnId: '2',
		fullName: 'Jacek Placek',
	},
	{
		id: 23,
		columnId: '2',
		fullName: 'Eugeniusz Geniusz',
	},
	{
		id: 24,
		columnId: '2',
		fullName: 'Irek Mirek',
	},
	{
		id: 25,
		columnId: '4',
		fullName: 'Józef Betlejem',
	},
	{
		id: 26,
		columnId: '4',
		fullName: 'Mikołaj Kopernik',
	},
	{
		id: 27,
		columnId: '4',
		fullName: 'Janusz Mikke',
	},
	{
		id: 28,
		columnId: '5',
		fullName: 'Człowiek Bardzodługienazwiskodlacelowsprawdzenia',
	},
];
import { MemberType } from '../types/member-type';
import { KanbanColumnType } from '../types/kanban-column-type';

export const columnList: KanbanColumnType[] = [
	{ id: '1', title: 'Kandydaci' },
	{ id: '2', title: 'Oczekujący' },
	{ id: '3', title: 'Uczący się' },
	{ id: '4', title: 'Kandydaci' },
	{ id: '5', title: 'Stażyści' },
	{ id: '6', title: 'Absolwenci' },
];

export const memberList: MemberType[] = [
	{
		id: 1,
		columnId: '1',
		fullName: 'Andrzej Nowicki',
	},
	{
		id: 2,
		columnId: '1',
		fullName: 'Jacek Gregorczyk',
	},
	{
		id: 3,
		columnId: '1',
		fullName: 'Przemek Król',
	},
	{
		id: 17,
		columnId: '1',
		fullName: 'Przemek Tracz',
	},
	{
		id: 16,
		columnId: '1',
		fullName: 'Przemek Michałowicz',
	},
	{
		id: 18,
		columnId: '1',
		fullName: 'Piotr Kowalski',
	},

	{
		id: 4,
		columnId: '2',
		fullName: 'Anna Nowak',
	},
	{
		id: 5,
		columnId: '2',
		fullName: 'Piotr Kowalski',
	},

	{
		id: 6,
		columnId: '3',
		fullName: 'Katarzyna Kowalczyk',
	},
	{
		id: 7,
		columnId: '3',
		fullName: 'Michał Lewandowski',
	},
	{
		id: 19,
		columnId: '3',
		fullName: 'Michał Kuternoga',
	},
	{
		id: 8,
		columnId: '4',
		fullName: 'Magdalena Nowakowska',
	},
	{
		id: 9,
		columnId: '4',
		fullName: 'Grzegorz Dąbrowski',
	},
	{
		id: 10,
		columnId: '5',
		fullName: 'Karolina Wójcik',
	},
	{
		id: 11,
		columnId: '5',
		fullName: 'Marek Jankowski',
	},

	{
		id: 12,

		columnId: '6',
		fullName: 'Ewa Malinowska',
	},
	{
		id: 13,
		columnId: '6',
		fullName: 'Adam Nowak',
	},
	{
		id: 14,
		columnId: '6',
		fullName: 'Ewa Malinowska',
	},
	{
		id: 15,
		columnId: '6',
		fullName: 'Adam Nowak',
	},
	{
		id: 20,
		columnId: '3',
		fullName: 'Adam Małysz',
	},
	{
		id: 21,
		columnId: '3',
		fullName: 'Adam Mickiewicz',
	},
	{
		id: 22,
		columnId: '2',
		fullName: 'Jacek Placek',
	},
	{
		id: 23,
		columnId: '2',
		fullName: 'Eugeniusz Geniusz',
	},
	{
		id: 24,
		columnId: '2',
		fullName: 'Irek Mirek',
	},
	{
		id: 25,
		columnId: '4',
		fullName: 'Józef Betlejem',
	},
	{
		id: 26,
		columnId: '4',
		fullName: 'Mikołaj Kopernik',
	},
	{
		id: 27,
		columnId: '4',
		fullName: 'Janusz Mikke',
	},
	{
		id: 28,
		columnId: '5',
		fullName: 'Człowiek Bardzodługienazwiskodlacelowsprawdzenia',
	},
];
