import React from 'react';
import { Container, Paper } from '@mantine/core';
import UserSurvey from '@/components/user-survey';
import WelcomeText from '@/components/welcome-text/welcome-text';
import Logo from '@/components/logo/logo';

export default function FormPage() {
  return (
    <Container size='md' py={{ base: 80, sm: 100 }}>
      <Paper
        shadow='xl'
        bg='#FDFAFA'
        px={{ base: 2, sm: 20 }}
        style={{ position: 'relative' }}
        py={50}>
        <Logo />
        <WelcomeText />
        <UserSurvey />
      </Paper>
    </Container>
  );
}
