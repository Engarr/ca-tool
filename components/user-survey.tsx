'use client';
import React from 'react';
import {
	Container,
	Button,
	Group,
	Grid,
	TextInput,
	InputBase,
} from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import { NativeSelect } from '@mantine/core';
import { IMaskInput } from 'react-imask';
import { useForm } from '@mantine/form';

function UserSurvey() {
	const form = useForm({
		initialValues: {
			email: '',
			termsOfService: false,
		},

		validate: {
			email: (value) =>
				/^\S+@\S+$/.test(value) ? null : 'Invalid email',
		},
	});
	return (
		<Container py={20}>
			<form onSubmit={form.onSubmit((values) => console.log(values))}>
				<Grid>
					<Grid.Col span={6}>
						<TextInput
							withAsterisk
							label='Imię i Nazwisko'
							placeholder='Wprowadz dane'
							{...form.getInputProps('email')}
						/>
					</Grid.Col>
					<Grid.Col span={6}>
						<TextInput
							withAsterisk
							label='Email'
							placeholder='Wprowadz email'
							{...form.getInputProps('email')}
						/>
					</Grid.Col>
					<Grid.Col span={6}>
						<InputBase
							withAsterisk
							label='Numer telefonu'
							component={IMaskInput}
							mask='(+00) 000-000-000'
							placeholder='+48 000-000-000'
						/>
					</Grid.Col>
					<Grid.Col span={6}>
						<DatePickerInput
							clearable
							withAsterisk
							valueFormat='MMM DD, YYYY'
							label='Data urodzenia'
							placeholder='Wybierz date'
						/>
					</Grid.Col>
					<Grid.Col span={6}>
						<NativeSelect
							size='md'
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
										{ label: 'Social Media/Marketing', value: 'marketing' },
										{ label: 'PM', value: 'pm' },
										{ label: 'Copywriting', value: 'copywriting' },
									],
								},
							]}
						/>
					</Grid.Col>
				</Grid>
				<Group justify='flex-end' mt='md'>
					<Button type='submit'>Submit</Button>
				</Group>
			</form>
		</Container>
	);
}

export default UserSurvey;
