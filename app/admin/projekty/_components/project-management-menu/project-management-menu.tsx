'use client';
import React, { useState } from 'react';
import { Id } from '@/app/admin/_types/member-type';
import ProjectForm from '@/app/admin/projekty/_components/project-form/project-form';
import { useProjectListContext } from '@/context/project-list-context';
import { Menu, ActionIcon } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconPencil,
  IconNote,
  IconTrash,
  IconDotsVertical,
  IconUserCheck,
} from '@tabler/icons-react';
import AlertModal from '../alert-modal/alert-modal';
import ChoseProjectPm from './chose-project-pm/chose-project-pm';

type ProjectTitleActionsType = {
  columnProjectId?: Id;
  memberCount: number;
};

const ProjectManagementMenu = ({
  columnProjectId,
  memberCount,
}: ProjectTitleActionsType) => {
  const { newConfirmedProjectList, setNewConfirmedProjectList } =
    useProjectListContext();

  const [
    isOpenedProjectFormModal,
    { open: openProjectFormModal, close: closeProjectFormModal },
  ] = useDisclosure(false);
  const [modalConfig, setModalConfig] = useState({ type: '', message: '' });
  const [isOpenedAlertModal, { open: openAlertModal, close: closeAlertModal }] =
    useDisclosure(false);
  const [isMemebrsListOpened, { toggle }] = useDisclosure(false);

  const openAlertModalHandler = () => {
    if (memberCount > 0) {
      openAlertModal();
      setModalConfig({
        type: 'information',
        message:
          'Nie możesz usunąć projektu, ponieważ są do niego przypisani użytkownicy',
      });
      return;
    }
    setModalConfig({
      type: 'confirm',
      message: 'Czy na pewno chcesz usunąć projekt?',
    });
    openAlertModal();
  };
  const deleteProject = () => {
    const updatedProjectList = newConfirmedProjectList.filter(
      (project) => project.id !== columnProjectId
    );
    setNewConfirmedProjectList(updatedProjectList);
  };

  return (
    <>
      <AlertModal
        opened={isOpenedAlertModal}
        closeModal={closeAlertModal}
        onDelete={deleteProject}
        modalConfig={modalConfig}
      />
      <ProjectForm
        closeModal={closeProjectFormModal}
        columnProjectId={columnProjectId}
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
          <Menu.Item
            closeMenuOnClick={false}
            onClick={toggle}
            leftSection={<IconUserCheck stroke={1.5} />}>
            Wybierz PM
          </Menu.Item>
          <ChoseProjectPm
            columnProjectId={columnProjectId}
            isMemebrsListOpened={isMemebrsListOpened}
          />
          <Menu.Item
            leftSection={<IconTrash stroke={1.5} />}
            color='red'
            onClick={openAlertModalHandler}>
            Usuń projekt
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </>
  );
};

export default ProjectManagementMenu;
