import React from 'react';
import { Paper, Text, Group, Flex } from '@mantine/core';
import { IconGripVertical } from '@tabler/icons-react';
import classes from './kanban-member-card.module.css';
import { useSortable } from '@dnd-kit/sortable';
import { MemberType } from '../../_types/member-type';
import { CSS } from '@dnd-kit/utilities';
import { getCardShadowColor } from '../../_lib/getShadowCardColor';
import UserManagementMenu from '../user-management-menu/user-management-menu';

type KanbanMemberCardType = {
  member: MemberType;
};

const KanbanMemberCard = ({ member }: KanbanMemberCardType) => {
  const { fullName, note, id } = member;
  const cardBackgroundColor = getCardShadowColor(member.specialization.domain);
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
      mb={'xs'}
      className={classes.cardContainer}
      ref={setNodeRef}
      style={{
        style,
        boxShadow: `inset 20px 0 2px var(${cardBackgroundColor})`,
      }}
      {...attributes}
      {...listeners}>
      <Group gap={3}>
        <Group p={2}>
          <IconGripVertical
            className={classes.grapIcon}
            stroke={1.5}
            size={20}
          />
        </Group>
        <Flex direction={'column'} w={200} className={classes.userInfoBox}>
          <Text fw={500}>{fullName}</Text>
          <Text c='gray' size='sm' fw={700}>
            {member.specialization.role}
          </Text>
          <Text c='gray' size='sm' fw={700}>
            {member.range}
          </Text>
        </Flex>
      </Group>
      <Group gap={0} justify='flex-end'>
        <UserManagementMenu memberId={id} fullName={fullName} note={note} />
      </Group>
    </Paper>
  );
};

export default KanbanMemberCard;
