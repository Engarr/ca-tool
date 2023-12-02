import React from 'react';
import { Paper, Text, Group, Flex } from '@mantine/core';
import { IconGripVertical } from '@tabler/icons-react';
import classes from './kanban-member-card.module.css';
import { MemberType } from '../../_types/member-type';
import { getCardShadowColor } from '../../_lib/getShadowCardColor';
import UserManagementMenu from '../user-management-menu/user-management-menu';
import { useDrag } from 'react-dnd';
import { getRangTitle } from '../../_lib/getRangTitle';

type KanbanMemberCardType = {
  member: MemberType;
};

const KanbanMemberCard = ({ member }: KanbanMemberCardType) => {
  const { fullName, note, id } = member;
  const cardBackgroundColor = getCardShadowColor(member.specialization.domain);
  const rangTitle = getRangTitle(member.range);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'Member',
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <Paper
      radius='md'
      ref={drag}
      withBorder
      p='lg'
      className={`${classes.cardContainer} ${
        isDragging ? classes.isDragging : ''
      }`}
      style={{
        boxShadow: `inset 20px 0 2px var(${cardBackgroundColor})`,
      }}>
      <Group gap={3}>
        <Group p={2}>
          <IconGripVertical
            className={classes.grapIcon}
            stroke={1.5}
            size={20}
          />
        </Group>
        <Flex direction={'column'} w={200} className={classes.userInfoBox}>
          <Text fw={700}>{fullName}</Text>
          <Text size='sm' fw={400}>
            {member.specialization.role}
          </Text>
          <Text size='sm' fw={500}>
            {rangTitle}
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
