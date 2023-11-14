import { SurveyValuesType } from '@/components/features/survey/types/survey-value-type';

export const surveyValidation = {
	name: (value: string) => (value.trim() !== '' ? null : 'Pole wymagane'),
	email: (value: string) =>
		/^\S+@\S+$/.test(value) ? null : 'Niepoprawny format adresu email',
	phone: (value: string) =>
		/^\(\+\d{2}\) \d{3}-\d{3}-\d{3}$/.test(value)
			? null
			: 'Nieprawidłowy format numeru telefonu',
	birth: (value: Date | null) => (value !== null ? null : 'Pole wymagane'),
	specialization: (value: string) =>
		value.trim() !== '' ? null : 'Pole wymagane',
	occupation: (value: string) =>
		value.trim() !== '' ? null : 'Pole wymagane',
	languagelevel: (value: string) =>
		value.trim() !== '' ? null : 'Pole wymagane',
	learningGoals: (value: string) =>
		value.trim() !== '' ? null : 'Pole wymagane',
	goal: (value: string) => (value.trim() !== '' ? null : 'Pole wymagane'),
	practicesStart: (value: Date | null, allValues: SurveyValuesType) =>
		allValues?.goal !== 'praktyki'
			? null
			: value !== null &&
			  allValues.practicesEnd !== null &&
			  value < allValues.practicesEnd
			? null
			: 'Data rozpoczęcia praktyk nie może być późniejsza niż data zakończenia',
	practicesEnd: (value: Date | null, allValues: SurveyValuesType) =>
		allValues?.goal !== 'praktyki'
			? null
			: value !== null &&
			  allValues.practicesStart !== null &&
			  value > allValues.practicesStart
			? null
			: 'Data zakończenia praktyk nie może być wcześneijsza niż data zakończenia',
};
