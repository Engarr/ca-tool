import React from 'react';
import { Container, Paper } from '@mantine/core';
import UserSurvey from '@/app/ankieta/_components/user-survey/user-survey';
import WelcomeText from '@/app/ankieta/_components/welcome-text/welcome-text';
import classes from './survey.module.css';

export default function FormPage() {
  return (
    <Container size='md' py={{ base: 80, sm: 100 }}>
      <Paper
        shadow='xl'
        className={classes.surveyContainer}
        px={{ base: 2, sm: 20 }}
        style={{ position: 'relative' }}
        py={50}>
        <WelcomeText />
        <UserSurvey />
      </Paper>
    </Container>
  );
}
