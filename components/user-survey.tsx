'use client';
import React from 'react';
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
import { DatePickerInput } from '@mantine/dates';
import { IMaskInput } from 'react-imask';
import { useForm } from '@mantine/form';
import { IconCalendar } from '@tabler/icons-react';
import { rem } from '@mantine/core';

function UserSurvey() {
  const icon = (
    <IconCalendar
      style={{ width: rem(18), height: rem(18), color: '#44639F' }}
      stroke={1.5}
    />
  );

  const form = useForm({
    initialValues: {
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
      practicesStart: '',
      practicesEnd: '',
    },

    validate: {
      name: (value) => (value.trim() !== '' ? null : 'Pole wymagane'),
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : 'Niepoprawny format adresu email',
      phone: (value) =>
        /^\(\+\d{2}\) \d{3}-\d{3}-\d{3}$/.test(value)
          ? null
          : 'Nieprawidłowy format numeru telefonu',
      birth: (value) => (value !== null ? null : 'Pole wymagane'),
      specialization: (value) => (value.trim() !== '' ? null : 'Pole wymagane'),
      occupation: (value) => (value.trim() !== '' ? null : 'Pole wymagane'),
      languagelevel: (value) => (value.trim() !== '' ? null : 'Pole wymagane'),
    },
  });
  console.log(form.values);
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
              data={[
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
                    {
                      label: 'Social Media/Marketing',
                      value: 'marketing',
                    },
                    { label: 'PM', value: 'pm' },
                    {
                      label: 'Copywriting',
                      value: 'copywriting',
                    },
                  ],
                },
              ]}
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
          <Grid.Col>
            <Textarea
              label='Gdzie szukasz inspiracji do grafik ?'
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
          <Grid.Col>
            <Textarea
              label='Umiejętności i doświadczenie'
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
              label='Poziom języka angielskiego'
              withAsterisk
              checkIconPosition='right'
              placeholder='Wybierz poziom języka'
              data={[
                { label: 'B1', value: 'b1' },
                { label: 'B2', value: 'b2' },
                { label: 'C1', value: 'c1' },
                { label: 'C2', value: 'c2' },
              ]}
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
          <Grid.Col>
            <Textarea
              label='Co powinniśmy jeszcze wiedzieć? '
              description='(Hobby, umiejętności i wszystko chciałbyś nam przekazać)'
              placeholder='Wprowadz dane'
              autosize
              minRows={2}
              maxRows={4}
            />
          </Grid.Col>
        </Grid>

        <Group justify='center' mt='lg'>
          <Button variant='filled' color='blue' fullWidth type='submit'>
            Submit
          </Button>
        </Group>
      </form>
    </Container>
  );
}

export default UserSurvey;
