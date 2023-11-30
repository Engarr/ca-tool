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
import SelectProjectManagement from './select-project-management/select-project-management';
import AddNoteModal from '@/app/admin/_components/add-note/add-note';
import { ProjectType } from '@/app/admin/_types/project-type';

type ProjectTitleActionsType = {
  columnProjectId?: Id;
  memberCount: number;
  projectTitle: string;
};

const ProjectManagementMenu = ({
  columnProjectId,
  memberCount,
  projectTitle,
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
  const [isMemebrsListOpenedPM, { toggle: togglePMList }] =
    useDisclosure(false);
  const [isMemebrsListOpenedLider, { toggle: toggleLiderList }] =
    useDisclosure(false);
  const [isOpenedNoteModal, { open: openNoteModal, close: closeNoteModal }] =
    useDisclosure(false);

  const project = newConfirmedProjectList.find(
    (project) => project.id === columnProjectId
  ) as ProjectType;

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
      <AddNoteModal
        opened={isOpenedNoteModal}
        close={closeNoteModal}
        noteForId={project?.id}
        note={project?.note}
        noteFor={projectTitle}
        type='project'
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
            Edytuj projekt
          </Menu.Item>
          <Menu.Item
            onClick={openNoteModal}
            leftSection={<IconNote stroke={1.5} />}>
            {project?.note ? 'Edytuj' : 'Dodaj'} notatkę
          </Menu.Item>
          <Menu.Item
            closeMenuOnClick={false}
            onClick={togglePMList}
            leftSection={<IconUserCheck stroke={1.5} />}>
            Wybierz PM
          </Menu.Item>
          <SelectProjectManagement
            columnProjectId={columnProjectId}
            isMemebrsListOpened={isMemebrsListOpenedPM}
            role='pm'
          />
          <Menu.Item
            closeMenuOnClick={false}
            onClick={toggleLiderList}
            leftSection={<IconUserCheck stroke={1.5} />}>
            Wybierz Lidera
          </Menu.Item>
          <SelectProjectManagement
            columnProjectId={columnProjectId}
            isMemebrsListOpened={isMemebrsListOpenedLider}
            role='lider'
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
