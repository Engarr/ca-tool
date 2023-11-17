import React from 'react';
import { Container, Paper } from '@mantine/core';
import UserSurvey from '@/components/features/survey/user-survey/user-survey';
import WelcomeText from '@/components/features/survey/welcome-text/welcome-text';

export default function FormPage() {
	return (
		<Container size='md' py={{ base: 80, sm: 100 }}>
			<Paper
				shadow='xl'
				bg='#FDFAFA'
				px={{ base: 2, sm: 20 }}
				style={{ position: 'relative' }}
				py={50}
			>
				<WelcomeText />
				<UserSurvey />
			</Paper>
		</Container>
	);
}
