'use client';
import { useRef, useState, useEffect } from 'react';
import {
	Container,
	Button,
	Group,
	Grid,
	TextInput,
	InputBase,
	Textarea,
	Text,
	Select,
	Modal,
	Autocomplete,
} from '@mantine/core';
import { useRouter } from 'next/navigation';
import { calendarIcon } from '@/components/UI/icons/calendar-icon';
import { Dropzone } from '@mantine/dropzone';
import { DatePickerInput } from '@mantine/dates';
import { IMaskInput } from 'react-imask';
import { useForm, zodResolver } from '@mantine/form';
import DropzoneChildren from '../dropzone/dropzone-children';
import { SurveyValuesType } from '@/app/ankieta/_types/survey-value-type';
import { surveyValidationSchema } from '@/app/ankieta/_lib/survey-validation';
import {
	goalDataSelect,
	languagelevelDataSelect,
	specializationsDataSelect,
} from '@/app/ankieta/_lib/select-inputs-value';
import { UseQueryResult, useMutation, useQuery } from '@tanstack/react-query';
import ModalChildrenLoader from '@/components/UI/modal-children-loader/modal-children-loader';
import ModalChildrenError from '@/components/UI/modal-children-error/modal-children-error';
import {
	getGraphicSpecialization,
	getShouldShowPracticesDataPicker,
	getSpecializationGroup,
} from '../../_lib/survey-conditions';
import { getSchoolsName, postSurvey } from '../../_lib/api-survey';
import { convertFormData } from '../../_lib/convert-form-data';

type SchoolsNameType = {
	id_School: number;
	name: string;
};

function UserSurvey() {
	const openRef = useRef<() => void>(null);
	const router = useRouter();

	const [formFile, setFormFile] = useState<File>();

	const { data: schoolsNameData }: UseQueryResult<SchoolsNameType[]> =
		useQuery({
			queryKey: ['surveyData'],
			queryFn: getSchoolsName,
		});
	const {
		data: sendSurveyResponseData,
		mutate: sendSurvey,
		isPending,
		isSuccess,
		isError,
		reset,
	} = useMutation({
		mutationFn: async (sendingDate: FormData) => {
			postSurvey(sendingDate);
		},
	});

	const schoolsName = schoolsNameData
		? Object.values(schoolsNameData).map((item) => item.name)
		: [];

	useEffect(() => {
		if (isSuccess) console.log(sendSurveyResponseData);

		// router.push(`/test?testId=1&userId=`);
	}, [isSuccess, router, sendSurveyResponseData]);

	const initialValues: SurveyValuesType = {
		fullName: '',
		email: '',
		phoneNumber: '',
		dateOfBirth: null,
		specialization: '',
		nameOfUniversityOrOccupation: '',
		githubAccount: '',
		programingLanguages: '',
		graphicInspiration: '',
		proficientGraphicTools: '',
		experience: '',
		finishedProject: '',
		english_Level: '',
		learningGoals: '',
		goalOfAcademyParticipation: '',
		practicesStart: null,
		practicesEnd: null,
		additionalInformation: '',
	};

	const form = useForm({
		initialValues,
		validate: zodResolver(surveyValidationSchema),
	});
	const { specialization, goalOfAcademyParticipation } = form.values;

	const specializationGroup = getSpecializationGroup(specialization);
	const graphicSpecialization = getGraphicSpecialization(specialization);
	const shouldShowPracticesDataPicker = getShouldShowPracticesDataPicker(
		goalOfAcademyParticipation
	);

	const dropzoneText = formFile
		? formFile?.name
		: 'Wybierz plik bądź przeciągnij go tutaj';

	const handleSurveySubmit = async (values: SurveyValuesType) => {
		const formData = convertFormData(values);
		if (formFile) {
			formData.append('formFile', formFile);
		}
		sendSurvey(formData);
	};

	const modalChildren = isPending ? (
		<ModalChildrenLoader loaderText='Przesyłanie ankiety...' />
	) : isError ? (
		<ModalChildrenError errorText='Wystąpił błąd wysyłania ankiety, spóbuj ponownie później' />
	) : null;

	return (
		<Container py={20}>
			<Modal
				opened={isPending || isError}
				onClose={() => reset()}
				withCloseButton={isError}
				centered
			>
				{modalChildren}
			</Modal>
			<form
				onSubmit={form.onSubmit((values) => {
					console.log(values);
					handleSurveySubmit(values);
				})}
			>
				<Grid>
					<Grid.Col span={{ base: 12, sm: 6 }}>
						<TextInput
							withAsterisk
							label='Imię i Nazwisko'
							placeholder='Wprowadz dane'
							{...form.getInputProps('fullName')}
						/>
					</Grid.Col>
					<Grid.Col span={{ base: 12, sm: 6 }}>
						<TextInput
							withAsterisk
							label='Email'
							placeholder='Wprowadz email'
							{...form.getInputProps('email')}
						/>
					</Grid.Col>
					<Grid.Col span={{ base: 12, sm: 6 }}>
						<InputBase
							withAsterisk
							label='Numer telefonu'
							component={IMaskInput}
							mask='(+00) 000-000-000'
							placeholder='+48 000-000-000'
							{...form.getInputProps('phoneNumber')}
						/>
					</Grid.Col>
					<Grid.Col span={{ base: 12, sm: 6 }}>
						<DatePickerInput
							clearable
							withAsterisk
							valueFormat='MMM DD, YYYY'
							leftSection={calendarIcon}
							label='Data urodzenia'
							placeholder='Wybierz date'
							{...form.getInputProps('dateOfBirth')}
						/>
					</Grid.Col>
					<Grid.Col span={{ base: 12, sm: 6 }}>
						<Select
							label='Specjalizacja'
							checkIconPosition='right'
							placeholder='Wybierz swoją specializację'
							withAsterisk
							data={specializationsDataSelect}
							{...form.getInputProps('specialization')}
						/>
					</Grid.Col>
					<Grid.Col span={{ base: 12, sm: 6 }}>
						<Autocomplete
							withAsterisk
							label='Szkoła / Uczelnia / Aktualny zawód'
							placeholder='Wprowadz dane'
							{...form.getInputProps(
								'nameOfUniversityOrOccupation'
							)}
							data={schoolsName}
						/>
					</Grid.Col>
					{(specializationGroup === 'frontend' ||
						specializationGroup === 'backend') && (
						<>
							<Grid.Col>
								<TextInput
									label='Konto na github'
									placeholder='Wprowadz dane'
									{...form.getInputProps('githubAccount')}
								/>
							</Grid.Col>
							<Grid.Col>
								<Textarea
									label='Jakie znasz języki programowania?'
									placeholder='Wprowadz dane'
									autosize
									minRows={2}
									maxRows={4}
									{...form.getInputProps(
										'programingLanguages'
									)}
								/>
							</Grid.Col>
						</>
					)}
					{graphicSpecialization && (
						<>
							<Grid.Col>
								<Textarea
									label='Gdzie szukasz inspiracji do grafik?'
									description='(Pytanie dla ścieżki UX i Graficznej)'
									placeholder='Wprowadz dane'
									autosize
									minRows={2}
									maxRows={4}
									{...form.getInputProps(
										'graphicInspiration'
									)}
								/>
							</Grid.Col>
							<Grid.Col>
								<Textarea
									label='Jakie programy graficzne opanowałeś?'
									description='(Pytanie dla ścieżki UX i Graficznej)'
									placeholder='Wprowadz dane'
									autosize
									minRows={2}
									maxRows={4}
									{...form.getInputProps(
										'proficientGraphicTools'
									)}
								/>
							</Grid.Col>
						</>
					)}
					<Grid.Col>
						<Textarea
							label='Umiejętności i doświadczenie.'
							placeholder='Wprowadz dane'
							autosize
							minRows={2}
							maxRows={4}
							{...form.getInputProps('experience')}
						/>
					</Grid.Col>
					<Grid.Col>
						<Textarea
							label='Jakie projekty udało Ci się zrealizować?'
							placeholder='Wprowadz dane'
							autosize
							minRows={2}
							maxRows={4}
							description='(Jeśli jest możliwość link do projektu plus opis)'
							{...form.getInputProps('finishedProject')}
						/>
					</Grid.Col>
					<Grid.Col span={{ base: 12, sm: 6 }}>
						<Select
							label='Poziom języka angielskiego.'
							withAsterisk
							checkIconPosition='right'
							placeholder='Wybierz poziom języka'
							data={languagelevelDataSelect}
							{...form.getInputProps('english_Level')}
						/>
					</Grid.Col>
					<Grid.Col>
						<Textarea
							label='Czego chciałbyś się nauczyć podczas udziału w akademii?'
							withAsterisk
							placeholder='Wprowadz dane'
							autosize
							minRows={2}
							maxRows={4}
							{...form.getInputProps('learningGoals')}
						/>
					</Grid.Col>
					<Grid.Col span={{ base: 12, sm: 6 }}>
						<Select
							label='Cel udziału w akademii.'
							withAsterisk
							checkIconPosition='right'
							placeholder='Wybierz cel'
							data={goalDataSelect}
							{...form.getInputProps(
								'goalOfAcademyParticipation'
							)}
						/>
					</Grid.Col>
					{shouldShowPracticesDataPicker && (
						<>
							<Text pl={7} my={10}>
								Data odbywania praktyki (od - do ) jeśli
								realizujesz praktyki ze szkoły / uczelni
							</Text>
							<Grid.Col span={{ base: 12, sm: 6 }}>
								<DatePickerInput
									clearable
									withAsterisk
									valueFormat='MMM DD, YYYY'
									leftSection={calendarIcon}
									label='Data rozpoczęcia'
									placeholder='Wybierz date'
									{...form.getInputProps('practicesStart')}
								/>
							</Grid.Col>
							<Grid.Col span={{ base: 12, sm: 6 }}>
								<DatePickerInput
									clearable
									withAsterisk
									valueFormat='MMM DD, YYYY'
									leftSection={calendarIcon}
									label='Data zakończenia'
									placeholder='Wybierz date'
									{...form.getInputProps('practicesEnd')}
								/>
							</Grid.Col>
						</>
					)}
					<Grid.Col>
						<Textarea
							label='Co powinniśmy jeszcze wiedzieć?'
							description='(Hobby, umiejętności i wszystko chciałbyś nam przekazać).'
							placeholder='Wprowadz dane'
							autosize
							minRows={2}
							maxRows={4}
							{...form.getInputProps('additionalInformation')}
						/>
					</Grid.Col>
					<Grid.Col span={12}>
						<Text mb={10} fw={500}>
							Dodaj swoje CV
						</Text>
						<Dropzone
							h={{ base: 150, sm: 100 }}
							openRef={openRef}
							onDrop={(file) => {
								setFormFile(file[0]);
							}}
						>
							<DropzoneChildren
								openRef={openRef}
								fileName={dropzoneText}
							/>
						</Dropzone>
					</Grid.Col>
				</Grid>
				<Group justify='center' mt={40}>
					<Button
						variant='filled'
						size='md'
						color='blue'
						fullWidth
						disabled={isPending}
						type='submit'
					>
						Wyślij
					</Button>
				</Group>
			</form>
		</Container>
	);
}

export default UserSurvey;
