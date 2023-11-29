'use client';
import React from 'react';
import { Group, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import ProjectForm from '../project-form/project-form';

const CreateNewProject = () => {
  const [
    isOpenedProjectFormModal,
    { open: openProjectFormModal, close: closeProjectFormModal },
  ] = useDisclosure(false);

  return (
    <Group ml={55} mb={10}>
      <Button onClick={openProjectFormModal}>Dodaj nowy projekt</Button>
      <ProjectForm
        closeModal={closeProjectFormModal}
        opened={isOpenedProjectFormModal} 
      />
    </Group>
  );
};

export default CreateNewProject;
