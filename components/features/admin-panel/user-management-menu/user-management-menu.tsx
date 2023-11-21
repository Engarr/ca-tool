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

const UserManagementMenu = () => {
  return (
    <>
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
                <Text component='span' c={'indigo'} fw={500}>
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
            leftSection={
              <IconNote className={classes.iconStyle} stroke={1.5} />
            }>
            Dodaj notatkę
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
