import React, { useEffect, useState } from 'react';
import {
  Button,
  Center,
  TextInput,
  Modal,
  Paper,
  Autocomplete,
  Group,
  rem,
  Text,
} from '@mantine/core';
import { useProjectListContext } from '@/context/project-list-context';
import { ProjectType } from '@/app/admin/_types/project-type';
import { Id } from '@/app/admin/_types/member-type';
import { IconPlus, IconX } from '@tabler/icons-react';
import classes from './project-form.module.css';

type ProjectFormType = {
  closeModal: () => void;
  opened: boolean;
  columnProjectId?: Id;
};

const ProjectForm = ({
  closeModal,
  columnProjectId,
  opened,
}: ProjectFormType) => {
  const { newConfirmedProjectList, setNewConfirmedProjectList } =
    useProjectListContext();
  const columnTitle = columnProjectId
    ? newConfirmedProjectList.find((project) => project.id === columnProjectId)
        ?.title
    : '';
  const projectTechnologies = columnProjectId
    ? newConfirmedProjectList.find((project) => project.id === columnProjectId)
        ?.technologies
    : '';
  const [newProjectTitle, setNewProjectTitle] = useState(columnTitle || '');
  const [newTechnologyName, setNewTechnologyName] = useState('');
  const [newProjectTechnologies, setNewProjectTechnologies] = useState<
    string[]
  >(projectTechnologies || []);
  const technologies = ['React', 'Next.js', '.Net', 'Node.js', 'React Native'];

  const handleNewProjectTitle = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewProjectTitle(event.target.value);
  };

  const newProjectTechnologiesHandler = (technologyName: string) => {
    if (technologyName === '') return;
    setNewProjectTechnologies((prev) => [...prev, technologyName]);
    setNewTechnologyName('');
  };
  const removeTechnologyHandler = (index: number) => {
    setNewProjectTechnologies((prev) => prev.filter((_, i) => i !== index));
  };

  const handleAddProject = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newProject: ProjectType = {
      id: String(newConfirmedProjectList.length + 1),
      title: newProjectTitle,
      technologies: newProjectTechnologies,
    };
    const updatedProjectList = columnProjectId
      ? newConfirmedProjectList.map((project) =>
          project.id === columnProjectId
            ? {
                ...project,
                title: newProjectTitle,
                technologies: newProjectTechnologies,
              }
            : project
        )
      : [...newConfirmedProjectList, newProject];
    setNewConfirmedProjectList(updatedProjectList);

    closeModal();
  };
  useEffect(() => {
    if (opened) {
      setNewProjectTitle(columnTitle || '');
      setNewTechnologyName('');
      setNewProjectTechnologies(projectTechnologies || []);
    }
  }, [columnTitle, opened, projectTechnologies]);

  return (
    <Modal opened={opened} onClose={closeModal} centered>
      <form onSubmit={handleAddProject}>
        <Paper py='xl' px='md'>
          <TextInput
            label={
              columnProjectId
                ? 'Edytuj tytuł projektu:'
                : 'Tytuł nowego projektu:'
            }
            placeholder='Wprowadz tytuł dla projektu'
            variant='filled'
            required
            mb={10}
            value={newProjectTitle}
            onChange={handleNewProjectTitle}
          />
          <Group>
            <Autocomplete
              label='Dodaj technologie'
              placeholder='Wprowadz nazwę'
              variant='filled'
              value={newTechnologyName}
              data={technologies}
              onChange={(e) => setNewTechnologyName(e)}
              rightSection={
                <Button
                  size='compact-md'
                  ml={80}
                  onClick={() =>
                    newProjectTechnologiesHandler(newTechnologyName)
                  }>
                  <IconPlus
                    style={{ width: rem(15), height: rem(15) }}
                    stroke={1.5}
                  />
                </Button>
              }
            />
          </Group>
          {newProjectTechnologies.length > 0 && (
            <Group mt={20} gap={10}>
              {newProjectTechnologies.map((technology, index) => (
                <div key={index} className={classes.technologyCard}>
                  <Text mr={10} fz={'xs'}>
                    {technology}
                  </Text>
                  <IconX
                    onClick={() => removeTechnologyHandler(index)}
                    style={{ width: rem(15), height: rem(15) }}
                    className={classes.xIcon}
                    stroke={1.5}
                  />
                </div>
              ))}
            </Group>
          )}
          <Center>
            <Button variant='filled' size='xs' mt={10} type='submit' fullWidth>
              {columnProjectId ? 'Zapisz zmiany' : 'Dodaj projekt'}
            </Button>
          </Center>
        </Paper>
      </form>
    </Modal>
  );
};

export default ProjectForm;
