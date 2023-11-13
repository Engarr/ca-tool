'use client';
import React, { useState, useRef } from 'react';
import {
  Container,
  Button,
  Group,
  Grid,
  TextInput,
  InputBase,
  Textarea,
  Text,
  Select,
} from '@mantine/core';
import { Dropzone, FileWithPath } from '@mantine/dropzone';
import { DatePickerInput } from '@mantine/dates';
import { IMaskInput } from 'react-imask';
import { useForm } from '@mantine/form';
import { IconCalendar } from '@tabler/icons-react';
import { rem } from '@mantine/core';
import DropzoneChildren from './dropzone/dropzone-children';
import { SurveyValuesType } from '@/types/survey-value-type';
import { surveyValidation } from '@/lib/survey-validation';
import {
  goalDataSelect,
  languagelevelDataSelect,
  specializationsDataSelect,
} from '@/lib/select-data';

function UserSurvey() {
  const openRef = useRef<() => void>(null);
  const [specialization, setSpecialization] = useState(false);
  const [isAddingFile, setIsAddingFile] = useState(false);
  const [showPracticesDataPicker, setShowPracticesDataPicker] = useState(false);
  const icon = (
    <IconCalendar
      style={{ width: rem(18), height: rem(18), color: '#44639F' }}
      stroke={1.5}
    />
  );
  const initialValues: SurveyValuesType = {
    name: '',
    email: '',
    phone: '',
    birth: null,
    specialization: '',
    occupation: '',
    languagelevel: '',
    programingLanguages: '',
    graphicInspiration: '',
    proficientGraphicTools: '',
    experience: '',
    learningGoals: '',
    goal: '',
    practicesStart: null,
    practicesEnd: null,
    files: [],
  };

  const form = useForm({
    initialValues,
    validate: surveyValidation,
  });

  const checkSpecialization = (value: string) => {
    if (value === 'grafika' || value === 'ui/ux') {
      setSpecialization(true);
    } else {
      setSpecialization(false);
    }
  };
  const checkGoal = (value: string) => {
    if (value === 'praktyki') {
      setShowPracticesDataPicker(true);
    } else {
      setShowPracticesDataPicker(false);
    }
  };

  const dropzoneText = form.values.files.length
    ? form.values.files[0]?.name
    : 'Wybierz plik bądź przeciągnij go tutaj';

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
              leftSection={icon}
              label='Data urodzenia'
              placeholder='Wybierz date'
              {...form.getInputProps('birth')}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <Select
              label='Specjalizacja'
              checkIconPosition='right'
              placeholder='Wybierz swoją specializację'
              withAsterisk
              onOptionSubmit={(value) => {
                checkSpecialization(value);
              }}
              data={specializationsDataSelect}
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
            <TextInput label='Konto na github' placeholder='Wprowadz dane' />
          </Grid.Col>
          <Grid.Col>
            <Textarea
              label='Jakie znasz języki programowania?'
              placeholder='Wprowadz dane'
              autosize
              minRows={2}
              maxRows={4}
              {...form.getInputProps('programingLanguages')}
            />
          </Grid.Col>
          {specialization && (
            <>
              <Grid.Col>
                <Textarea
                  label='Gdzie szukasz inspiracji do grafik?'
                  description='(Pytanie dla ścieżki UX i Graficznej)'
                  placeholder='Wprowadz dane'
                  autosize
                  minRows={2}
                  maxRows={4}
                  {...form.getInputProps('graphicInspiration')}
                />
              </Grid.Col>
              <Grid.Col>
                <Textarea
                  label='Jakie programy graficzne opanowałeś?'
                  description='(Pytanie dla ścieżki UX i Graficznej)'
                  placeholder='Wprowadz dane'
                  autosize
                  minRows={2}
                  maxRows={4}
                  {...form.getInputProps('proficientGraphicTools')}
                />
              </Grid.Col>
            </>
          )}
          <Grid.Col>
            <Textarea
              label='Umiejętności i doświadczenie.'
              placeholder='Wprowadz dane'
              autosize
              minRows={2}
              maxRows={4}
              {...form.getInputProps('experience')}
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
            <Select
              label='Poziom języka angielskiego.'
              withAsterisk
              checkIconPosition='right'
              placeholder='Wybierz poziom języka'
              data={languagelevelDataSelect}
              {...form.getInputProps('languagelevel')}
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
              {...form.getInputProps('learningGoals')}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <Select
              label='Cel udziału w akademii.'
              withAsterisk
              checkIconPosition='right'
              placeholder='Wybierz cel'
              onOptionSubmit={(value) => {
                checkGoal(value);
              }}
              data={goalDataSelect}
              {...form.getInputProps('goal')}
            />
          </Grid.Col>
          {showPracticesDataPicker && (
            <>
              <Text pl={7} my={10}>
                Data odbywania praktyki (od - do ) jeśli realizujesz praktyki ze
                szkoły / uczelni
              </Text>
              <Grid.Col span={{ base: 12, sm: 6 }}>
                <DatePickerInput
                  clearable
                  withAsterisk
                  valueFormat='MMM DD, YYYY'
                  leftSection={icon}
                  label='Data rozpoczęcia'
                  placeholder='Wybierz date'
                  {...form.getInputProps('practicesStart')}
                />
              </Grid.Col>
              <Grid.Col span={{ base: 12, sm: 6 }}>
                <DatePickerInput
                  clearable
                  withAsterisk
                  valueFormat='MMM DD, YYYY'
                  leftSection={icon}
                  label='Data zakończenia'
                  placeholder='Wybierz date'
                  {...form.getInputProps('practicesEnd')}
                />
              </Grid.Col>
            </>
          )}
          <Grid.Col>
            <Textarea
              label='Co powinniśmy jeszcze wiedzieć?'
              description='(Hobby, umiejętności i wszystko chciałbyś nam przekazać).'
              placeholder='Wprowadz dane'
              autosize
              minRows={2}
              maxRows={4}
            />
          </Grid.Col>
          <Grid.Col span={12}>
            <Text mb={10} fw={500}>
              Dodaj swoje CV
            </Text>
            <Dropzone
              h={{ base: 150, sm: 100 }}
              openRef={openRef}
              onDrop={(files: FileWithPath[]) => {
                setIsAddingFile(true);
                form.setFieldValue('files', files);
                setIsAddingFile(false);
              }}
              loading={isAddingFile}>
              <DropzoneChildren openRef={openRef} fileName={dropzoneText} />
            </Dropzone>
          </Grid.Col>
        </Grid>
        <Group justify='center' mt={40}>
          <Button
            variant='filled'
            size='md'
            color='blue'
            fullWidth
            type='submit'>
            Wyślij
          </Button>
        </Group>
      </form>
    </Container>
  );
}

export default UserSurvey;
