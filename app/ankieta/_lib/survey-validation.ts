import { z } from 'zod';
export const surveyValidationSchema = z
	.object({
		fullName: z.string().min(1, 'Pole wymagane.'),
		email: z.string().email('Niepoprawny format adresu email'),
		phoneNumber: z
			.string()
			.refine((value) => /^\(\+\d{2}\) \d{3}-\d{3}-\d{3}$/.test(value), {
				message: 'Nieprawidłowy format numeru telefonu',
			}),
		dateOfBirth: z
			.date()
			.nullable()
			.refine((value) => value !== null, {
				message: 'Pole wymagane',
			}),
		specialization: z.string().min(1, 'Pole wymagane.'),
		nameOfUniversityOrOccupation: z.string().min(1, 'Pole wymagane.'),
		english_Level: z.string().min(1, 'Pole wymagane.'),
		learningGoals: z.string().min(1, 'Pole wymagane.'),
		goalOfAcademyParticipation: z.string().min(1, 'Pole wymagane.'),
		practicesStart: z.date().nullable(),
		practicesEnd: z.date().nullable(),
	})
	.refine(
		(data) =>
			data?.goalOfAcademyParticipation !== 'praktyki'
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
			data?.goalOfAcademyParticipation !== 'praktyki'
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
