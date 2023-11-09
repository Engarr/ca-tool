import React from 'react';
import { Center, Container, Paper, Title, Text } from '@mantine/core';
import UserSurvey from '@/components/user-survey';

export default function FormPage() {
	return (
		<Container size='md' py={20}>
			<Paper shadow='xl' radius={'lg'}>
				<Center>
					<Title order={1}>CetusAcademy</Title>
				</Center>
				<Container mt={100}>
					<Text>Cześć, </Text>
					<Text>miło że do nas trafiłeś🥰 </Text>
					<Text>
						Misją Cetus Academy jest rozwijanie i wspieranie nowych
						talentów na ich drodze do świata IT.{' '}
					</Text>
					<Text>
						Wypełnij proszę ankietę która pozwoli nam dobrać dla
						Ciebie odpowiedni program a następnie dołącz do naszego
						discorda:{' '}
					</Text>
				</Container>
			</Paper>
			<UserSurvey />
		</Container>
	);
}
