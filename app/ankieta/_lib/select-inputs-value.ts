import {
	TGoalDataSelect,
	TLanguagelevelDataSelect,
	TSpecializationsDataSelect,
} from '../_types/select-data-types';

export const specializationsDataSelect: TSpecializationsDataSelect = [
	{
		group: 'Frontend',
		items: [
			{
				label: 'React/Next.js',
				value: 'react',
			},
			{
				label: 'Mobile(React Native)',
				value: 'react native',
			},
		],
	},
	{
		group: 'Backend',
		items: [
			{ label: '.Net', value: '.net' },
			{ label: 'Node.js', value: 'node.js' },
		],
	},
	{
		group: 'Others',
		items: [
			{ label: 'UI/UX', value: 'ui/ux' },
			{ label: 'Grafika', value: 'grafika' },
			{
				label: 'Social Media/Marketing',
				value: 'marketing',
			},
			{ label: 'PM', value: 'pm' },
			{
				label: 'Copywriting',
				value: 'copywriting',
			},
		],
	},
];

export const languagelevelDataSelect: TLanguagelevelDataSelect = [
	{ label: 'B1', value: 'b1' },
	{ label: 'B2', value: 'b2' },
	{ label: 'C1', value: 'c1' },
	{ label: 'C2', value: 'c2' },
];
export const goalDataSelect: TGoalDataSelect = [
	{
		label: 'Praktyki zawodowe.',
		value: 'praktyki',
	},
	{
		label: 'Udział w akademii niezwiązany z praktykami.',
		value: 'rozwój',
	},
];
