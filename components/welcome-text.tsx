import React from 'react';
import { Container, Text, UnstyledButton } from '@mantine/core';

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
        gradient={{ from: 'indigo', to: 'blue', deg: 90 }}>
        CetusAcademy
      </Text>
      <Container mt={60}>
        <Text fw={500} mb={5} size='xl'>
          Cześć,
        </Text>
        <Text mb={5}>miło że do nas trafiłeś🥰 </Text>
        <Text mb={5}>
          Misją Cetus Academy jest rozwijanie i wspieranie nowych talentów na
          ich drodze do świata IT.{' '}
        </Text>
        <Text>
          Wypełnij proszę ankietę która pozwoli nam dobrać dla Ciebie odpowiedni
          program a następnie dołącz do naszego discorda:
        </Text>
        <UnstyledButton
          component='a'
          href='https://discord.gg/ZyXpCwwDKZ'
          c={'blue'}>
          https://discord.gg/ZyXpCwwDKZ
        </UnstyledButton>
      </Container>
    </>
  );
};

export default WelcomeText;
