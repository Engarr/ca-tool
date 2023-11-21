import React from 'react';
import { columnList } from '../lib/tempMember';
import { Menu, ActionIcon, Text } from '@mantine/core';
import {
  IconPencil,
  IconNote,
  IconTrash,
  IconDots,
  IconArrowBearRight,
  IconArrowBadgeRight,
} from '@tabler/icons-react';
import classes from './user-management-menu.module.css';
import { useMemberListContext } from '@/context/member-list-context';
import { Id } from '../types/member-type';
import { useDisclosure } from '@mantine/hooks';
import AddNoteToUser from './add-note-to-user/add-note-to-user';

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

  const handlerMoveUserToSelectedTabel = (columnId: Id) => {
    setNewMemberList((prev) => {
      return prev.map((user) => {
        if (user.id === memberId) {
          return {
            ...user,
            columnId: columnId,
          };
        }
        return user;
      });
    });
  };
  return (
    <>
      <AddNoteToUser
        opened={isOpenedNoteModal}
        close={closeNoteModal}
        memberId={memberId}
        note={note}
        fullName={fullName}
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
          {columnList.map((col) => (
            <React.Fragment key={col.id}>
              <Menu.Item
                py={5}
                leftSection={
                  <IconArrowBadgeRight
                    className={classes.iconStyle}
                    stroke={1.5}
                  />
                }>
                Przenieś do{' '}
                <Text
                  component='span'
                  c={'indigo'}
                  fw={500}
                  onClick={() => {
                    handlerMoveUserToSelectedTabel(col.id);
                  }}>
                  {col.title}
                </Text>
              </Menu.Item>
            </React.Fragment>
          ))}
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
