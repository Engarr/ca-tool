'use client';
import React from 'react';
import { Container, Button, Group, Grid, TextInput } from '@mantine/core';
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
		<Container  py={20}>
			<form onSubmit={form.onSubmit((values) => console.log(values))}>
				<Grid>
					<Grid.Col span={6}>
						<TextInput
							withAsterisk
							label='Email'
							placeholder='your@email.com'
							{...form.getInputProps('email')}
						/>
					</Grid.Col>
					<Grid.Col span={6}>
						<TextInput
							withAsterisk
							label='Email'
							placeholder='your@email.com'
							{...form.getInputProps('email')}
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
