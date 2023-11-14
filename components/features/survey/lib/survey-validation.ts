import { z } from 'zod';
export const surveyValidationSchema = z
	.object({
		name: z.string().min(1, 'Pole wymagane.'),
		email: z.string().email('Niepoprawny format adresu email'),
		phone: z
			.string()
			.refine((value) => /^\(\+\d{2}\) \d{3}-\d{3}-\d{3}$/.test(value), {
				message: 'Nieprawidłowy format numeru telefonu',
			}),
		birth: z
			.date()
			.nullable()
			.refine((value) => value !== null, {
				message: 'Pole wymagane',
			}),
		specialization: z.string().min(1, 'Pole wymagane.'),
		occupation: z.string().min(1, 'Pole wymagane.'),
		languagelevel: z.string().min(1, 'Pole wymagane.'),
		learningGoals: z.string().min(1, 'Pole wymagane.'),
		goal: z.string().min(1, 'Pole wymagane.'),
		practicesStart: z.date().nullable(),
		practicesEnd: z.date().nullable(),
	})
	.refine(
		(data) =>
			data?.goal !== 'praktyki'
				? true
				: data.practicesStart !== null &&
				  data.practicesEnd !== null &&
				  data.practicesStart < data.practicesEnd,
		{
			message:
				'Data rozpoczęcia praktyk nie może być późniejsza niż data zakończenia',
			path: ['practicesStart'],
		}
	)
	.refine(
		(data) =>
			data?.goal !== 'praktyki'
				? true
				: data.practicesEnd !== null &&
				  data.practicesStart !== null &&
				  data.practicesEnd > data.practicesStart,
		{
			message:
				'Data zakończenia praktyk nie może być wcześniejsza niż data rozpoczęcia',
			path: ['practicesEnd'],
		}
	);
