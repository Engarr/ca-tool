import axios from 'axios';
import config from '@/config';

export const getSchoolsName = async () => {
	const response = await axios.get(`${config.apiUrl}/ClickUp/GetAllSchools`);
	return response.data;
};

export const postSurvey = async (sendingDate: FormData) => {
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
		// console.log(error);
		return error;
	}
};
