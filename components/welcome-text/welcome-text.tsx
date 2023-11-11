import React from 'react';
import { Container, Text } from '@mantine/core';
import classes from './welcome-text.module.css';

const WelcomeText = () => {
	return (
		<>
			<Text
				ta={'center'}
				pt={30}
				size='xl'
				fw={900}
				variant='gradient'
				style={{ fontSize: '2.5rem' }}
				gradient={{ from: 'indigo', to: 'blue', deg: 90 }}
			>
				CetusAcademy
			</Text>
			<Container mt={60} mb={30}>
				<Text mb={10} lh={'xl'} size={'lg'}>
					Cześć, miło że do nas trafiłeś. Misją Cetus Academy jest
					rozwijanie i wspieranie nowych talentów na ich drodze do
					świata IT. Wypełnij proszę ankietę która pozwoli nam dobrać
					dla Ciebie odpowiedni program a następnie dołącz do naszego
					discorda:
				</Text>
				<a
					href='https://discord.gg/ZyXpCwwDKZ'
					target='_blank'
					rel='noopener noreferrer'
					className={classes['discord-link']}
				>
					https://discord.gg/ZyXpCwwDKZ
				</a>
			</Container>
		</>
	);
};

export default WelcomeText;
