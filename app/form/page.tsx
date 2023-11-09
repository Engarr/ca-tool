import React from 'react';
import { Container, Paper } from '@mantine/core';
import UserSurvey from '@/components/user-survey';
import WelcomeText from '@/components/welcome-text';
import Logo from '@/components/UI/logo';

export default function FormPage() {
  return (
    <Container size='md' py={10} my={70}>
      <Paper
        shadow='xl'
        bg='#FDFAFA'
        px={{ base: 2, sm: 20 }}
        style={{ position: 'relative' }}>
        <Logo />
        <WelcomeText />
        <UserSurvey />
      </Paper>
    </Container>
  );
}
