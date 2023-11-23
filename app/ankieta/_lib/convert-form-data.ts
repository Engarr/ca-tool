import { SurveyValuesType } from '../_types/survey-value-type';

export function convertFormData(initialValues: SurveyValuesType) {
	const formData = new FormData();

	for (const key in initialValues) {
		if (initialValues.hasOwnProperty(key)) {
			const value = initialValues[key as keyof SurveyValuesType];

			if (value !== null && value !== undefined) {
				if (value instanceof Date) {
					formData.append(key, value.toISOString());
				} else {
					formData.append(key, value.toString());
				}
			}
		}
	}
	return formData;
}
