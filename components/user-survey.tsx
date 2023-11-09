'use client';
import React from 'react';
import {
	Container,
	Button,
	Group,
	Grid,
	TextInput,
	InputBase,
	Textarea,
	NativeSelect,
} from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import { IMaskInput } from 'react-imask';
import { useForm } from '@mantine/form';

function UserSurvey() {
	const form = useForm({
		initialValues: {
			name: '',
			email: '',
			phone: '',
			birth: null,
			specialization: '',
			occupation: '',
		},

		validate: {
			name: (value) => (value.trim() !== '' ? null : 'Pole wymagane'),
			email: (value) =>
				/^\S+@\S+$/.test(value)
					? null
					: 'Niepoprawny format adresu email',
			phone: (value) =>
				/^\(\+\d{2}\) \d{3}-\d{3}-\d{3}$/.test(value)
					? null
					: 'Nieprawidłowy format numeru telefonu',
			birth: (value) => (value !== null ? null : 'Pole wymagane'),
			specialization: (value) =>
				value.trim() !== '' ? null : 'Pole wymagane',
			occupation: (value) =>
				value.trim() !== '' ? null : 'Pole wymagane',
		},
	});
	return (
		<Container py={20}>
			<form onSubmit={form.onSubmit((values) => console.log(values))}>
				<Grid>
					<Grid.Col span={{ base: 12, sm: 6 }}>
						<TextInput
							withAsterisk
							label='Imię i Nazwisko'
							placeholder='Wprowadz dane'
							{...form.getInputProps('name')}
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
							{...form.getInputProps('phone')}
						/>
					</Grid.Col>
					<Grid.Col span={{ base: 12, sm: 6 }}>
						<DatePickerInput
							clearable
							withAsterisk
							valueFormat='MMM DD, YYYY'
							label='Data urodzenia'
							placeholder='Wybierz date'
							{...form.getInputProps('birth')}
						/>
					</Grid.Col>
					<Grid.Col span={{ base: 12, sm: 6 }}>
						<NativeSelect
							label='Specjalizacja'
							withAsterisk
							data={[
								{ label: '-', value: '' },
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
							]}
							{...form.getInputProps('specialization')}
						/>
					</Grid.Col>
					<Grid.Col span={{ base: 12, sm: 6 }}>
						<TextInput
							withAsterisk
							label='Szkoła / Uczelnia / Aktualny zawód'
							placeholder='Wprowadz dane'
							{...form.getInputProps('occupation')}
						/>
					</Grid.Col>
					<Grid.Col>
						<TextInput
							label='Konto na github'
							placeholder='Wprowadz dane'
						/>
					</Grid.Col>
					<Grid.Col>
						<Textarea
							label='Jakie znasz języki programowania?'
							placeholder='Wprowadz dane'
							autosize
							minRows={2}
							maxRows={4}
						/>
					</Grid.Col>
					<Grid.Col>
						<Textarea
							label='Gdzie szukasz inspiracji do grafik (Pytanie dla ścieżki UX i Graficznej)?'
							placeholder='Wprowadz dane'
							autosize
							minRows={2}
							maxRows={4}
						/>
					</Grid.Col>
					<Grid.Col>
						<Textarea
							label='Jakie programy graficzne opanowałeś? (Pytanie dla ścieżki UX i Graficznej)?'
							placeholder='Wprowadz dane'
							autosize
							minRows={2}
							maxRows={4}
						/>
					</Grid.Col>
					<Grid.Col>
						<Textarea
							label='Umiejętności i doświadczenie'
							placeholder='Wprowadz dane'
							autosize
							minRows={2}
							maxRows={4}
						/>
					</Grid.Col>
					<Grid.Col>
						<Textarea
							label='Jakie projekty udało Ci się zrealizować?'
							placeholder='Wprowadz dane'
							autosize
							minRows={2}
							maxRows={4}
						/>
					</Grid.Col>
					<Grid.Col span={{ base: 12, sm: 6 }}>
						<NativeSelect
							label='Poziom języka angielskiego'
							withAsterisk
							data={[
								{ label: '-', value: '' },
								{ label: 'B1', value: 'b1' },
								{ label: 'B2', value: 'b2' },
								{ label: 'C1', value: 'c1' },
								{ label: 'C2', value: 'c2' },
							]}
							{...form.getInputProps('specialization')}
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
						/>
					</Grid.Col>
				</Grid>

				<Group justify='flex-end' mt='sm'>
					<Button type='submit'>Submit</Button>
				</Group>
			</form>
		</Container>
	);
}

export default UserSurvey;
