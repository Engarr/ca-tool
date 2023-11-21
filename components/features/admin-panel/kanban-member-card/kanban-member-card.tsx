import React from 'react';
import { Paper, Text, Group, Menu, ActionIcon } from '@mantine/core';
import {
  IconGripVertical,
  IconPencil,
  IconNote,
  IconTrash,
  IconDots,
} from '@tabler/icons-react';
import classes from './kanban-member-card.module.css';
import { useSortable } from '@dnd-kit/sortable';
import { MemberType } from '../types/member-type';
import { CSS } from '@dnd-kit/utilities';

type KanbanMemberCardType = {
  member: MemberType;
};

const KanbanMemberCard = ({ member }: KanbanMemberCardType) => {
  const { fullName } = member;
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: member.id,
    data: {
      type: 'Member',
      member,
    },
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };
  if (isDragging) {
    return (
      <Paper
        ref={setNodeRef}
        style={style}
        className={classes.isDraggingCard}></Paper>
    );
  }

  return (
    <Paper
      radius='md'
      withBorder
      p='lg'
      mb={5}
      className={classes.cardContainer}
      ref={setNodeRef}
      style={style}>
      <Group>
        <div
          style={{
            paddingRight: '5px',
          }}
          {...attributes}
          {...listeners}>
          <IconGripVertical className={classes.grapIcon} stroke={1.5} />
        </div>

        <div style={{ flex: 1 }}>
          <Text fw={500}>{fullName}</Text>

          <Text c='dimmed' size='xs'>
            SPECIALIZACJA
          </Text>
        </div>
      </Group>
      <Group gap={0} justify='flex-end'>
        <ActionIcon variant='subtle'>
          <IconPencil className={classes.iconStyle} stroke={1.5} />
        </ActionIcon>
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
      </Group>
    </Paper>
  );
};

export default KanbanMemberCard;
