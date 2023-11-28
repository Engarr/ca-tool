import { Id } from '@/app/admin/_types/member-type';
import ProjectForm from '@/app/admin/projekty/_components/project-form/project-form';
import { Menu, ActionIcon } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconPencil,
  IconNote,
  IconTrash,
  IconDotsVertical,
} from '@tabler/icons-react';
import React from 'react';

type ProjectTitleActionsType = {
  columnId?: Id;
};

const ProjectColumnActions = ({ columnId }: ProjectTitleActionsType) => {
  const [
    isOpenedProjectFormModal,
    { open: openProjectFormModal, close: closeProjectFormModal },
  ] = useDisclosure(false);

  return (
    <>
      <ProjectForm
        closeModal={closeProjectFormModal}
        columnId={columnId}
        close={closeProjectFormModal}
        opened={isOpenedProjectFormModal}
      />

      <Menu
        transitionProps={{ transition: 'pop' }}
        withArrow
        position='bottom-end'
        withinPortal>
        <Menu.Target>
          <ActionIcon variant='subtle'>
            <IconDotsVertical stroke={1.5} />
          </ActionIcon>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item
            onClick={openProjectFormModal}
            leftSection={<IconPencil stroke={1.5} />}>
            Edytuj kolumne
          </Menu.Item>
          <Menu.Item leftSection={<IconNote stroke={1.5} />}>
            Dodaj notatkę
          </Menu.Item>
          <Menu.Item leftSection={<IconTrash stroke={1.5} />} color='red'>
            Usuń projekt
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </>
  );
};

export default ProjectColumnActions;
