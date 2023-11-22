import axios from 'axios';
import { SurveyValuesType } from '../types/survey-value-type';
import config from '@/config';

export const getSchoolsName = async () => {
	const response = await axios.get(`${config.apiUrl}/ClickUp/GetAllSchools`);
	return response.data;
};

export const postSurvey = async (sendingDate: SurveyValuesType) => {
	try {
		const response = await axios.post(
			`${config.apiUrl}/ClickUp/CreateUser`,
			sendingDate,
			{
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			}
		);
		console.log(response);
		return response.data;
	} catch (error) {
		console.log(error);
		return error;
	}
};
