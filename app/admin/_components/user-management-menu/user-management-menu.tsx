import React from 'react';
import { columnList, confirmedProjectList } from '../../_lib/tempMember';
import { Menu, ActionIcon, Text, Collapse, ScrollArea } from '@mantine/core';
import {
  IconPencil,
  IconNote,
  IconTrash,
  IconDots,
  IconArrowBearRight,
  IconArrowBadgeRight,
  IconArrowBadgeDown,
} from '@tabler/icons-react';
import classes from './user-management-menu.module.css';
import { useMemberListContext } from '@/context/member-list-context';
import { Id } from '../../_types/member-type';
import { useDisclosure } from '@mantine/hooks';
import AddNoteModal from '../add-note/add-note';

type UserManagementMenuProps = {
  memberId: Id;
  note?: string;
  fullName: string;
};

const UserManagementMenu = ({
  memberId,
  note,
  fullName,
}: UserManagementMenuProps) => {
  const { setNewMemberList } = useMemberListContext();
  const [isOpenedNoteModal, { open: openNoteModal, close: closeNoteModal }] =
    useDisclosure(false);
  const [isProjektsListOpened, { toggle }] = useDisclosure(false);

  const handlerMoveUserToSelectedTabel = (columnId: Id) => {
    setNewMemberList((prev) => {
      return prev.map((user) => {
        if (user.id === memberId) {
          return {
            ...user,
            columnId,
          };
        }
        return user;
      });
    });
  };
  const handlerMoveUserToSelectedProject = (projectId: Id, columnId: Id) => {
    setNewMemberList((prev) => {
      return prev.map((user) => {
        if (user.id === memberId) {
          return {
            ...user,
            columnId,
            assignedToProjectId: projectId.toString(),
          };
        }
        return user;
      });
    });
  };
  return (
    <>
      <AddNoteModal
        opened={isOpenedNoteModal}
        close={closeNoteModal}
        noteForId={memberId}
        note={note}
        noteFor={fullName}
        type='user'
      />
      <Menu
        transitionProps={{ transition: 'pop' }}
        withArrow
        position='bottom-end'
        withinPortal>
        <Menu.Target>
          <ActionIcon variant='subtle'>
            <IconArrowBearRight className={classes.iconStyle} stroke={1.5} />
          </ActionIcon>
        </Menu.Target>
        <Menu.Dropdown>
          {columnList.map((col) =>
            col.title === 'Projekty' ? (
              <React.Fragment key={col.id}>
                <Menu.Item
                  closeMenuOnClick={false}
                  py={5}
                  onClick={toggle}
                  leftSection={
                    !isProjektsListOpened ? (
                      <IconArrowBadgeRight
                        className={classes.iconStyle}
                        stroke={1.5}
                      />
                    ) : (
                      <IconArrowBadgeDown
                        className={classes.iconStyle}
                        stroke={1.5}
                      />
                    )
                  }>
                  <Text>
                    Przenieś do{' '}
                    <Text
                      component='span'
                      fw={500}
                      className={classes.columnName}>
                      {col.title}
                    </Text>
                  </Text>
                </Menu.Item>

                <Collapse pb={10} pl={10} mr={10} in={isProjektsListOpened}>
                  {confirmedProjectList.length === 0 ? (
                    <Text className={classes.listItem}>
                      Lista projektów jest pusta
                    </Text>
                  ) : (
                    <ScrollArea scrollbarSize={8} mr={10} type='always' h={100}>
                      {confirmedProjectList.map((project) => (
                        <Text
                          className={classes.listItem}
                          key={project.id}
                          onClick={() =>
                            handlerMoveUserToSelectedProject(project.id, col.id)
                          }>
                          {project.title}
                        </Text>
                      ))}
                    </ScrollArea>
                  )}
                </Collapse>
              </React.Fragment>
            ) : (
              <React.Fragment key={col.id}>
                <Menu.Item
                  py={5}
                  onClick={() => {
                    handlerMoveUserToSelectedTabel(col.id);
                  }}
                  leftSection={
                    <IconArrowBadgeRight
                      className={classes.iconStyle}
                      stroke={1.5}
                    />
                  }>
                  <Text>
                    Przenieś do{' '}
                    <Text
                      component='span'
                      className={classes.columnName}
                      fw={500}>
                      {col.title}
                    </Text>
                  </Text>
                </Menu.Item>
              </React.Fragment>
            )
          )}
        </Menu.Dropdown>
      </Menu>
      <Menu
        transitionProps={{ transition: 'pop' }}
        withArrow
        position='bottom-end'
        withinPortal>
        <Menu.Target>
          <ActionIcon variant='subtle'>
            <IconDots className={classes.iconStyle} stroke={1.5} />
          </ActionIcon>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item
            leftSection={
              <IconPencil className={classes.iconStyle} stroke={1.5} />
            }>
            Edytuj
          </Menu.Item>
          <Menu.Item
            onClick={openNoteModal}
            leftSection={
              <IconNote className={classes.iconStyle} stroke={1.5} />
            }>
            {note ? 'Edytuj ' : 'Dodaj '}
            notatkę
          </Menu.Item>

          <Menu.Item
            leftSection={
              <IconTrash className={classes.iconStyle} stroke={1.5} />
            }
            color='red'>
            Usuń uczestnika
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </>
  );
};

export default UserManagementMenu;
