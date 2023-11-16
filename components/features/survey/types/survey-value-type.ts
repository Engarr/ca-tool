import { FileWithPath } from '@mantine/dropzone';

export type SurveyValuesType = {
	fullName: string;
	email: string;
	phoneNumber: string;
	dateOfBirth: Date | null;
	specialization: string;
	nameOfUniversityOrOccupation: string;
	githubAccount: string;
	programingLanguages: string;
	graphicInspiration: string;
	proficientGraphicTools: string;
	experience: string;
	finishedProject: string;
	englishLevel_Id: string;
	learningGoals: string;
	goalOfAcademyParticipation: string;
	practicesStart: Date | null;
	practicesEnd: Date | null;
	additionalInformation: '';
	file: FileWithPath[];
	specializationGroup?: string;
};