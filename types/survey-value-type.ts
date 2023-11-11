import { FileWithPath } from '@mantine/dropzone';

export type SurveyValuesType = {
	name: string;
	email: string;
	phone: string;
	birth: Date | null;
	specialization: string;
	occupation: string;
	languagelevel: string;
	programingLanguages: string;
	graphicInspiration: string;
	proficientGraphicTools: string;
	experience: string;
	learningGoals: string;
	goal: string;
	practicesStart: Date | null;
	practicesEnd: Date | null;
	files: FileWithPath[];
};
