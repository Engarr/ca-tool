import React from 'react';
import { Card, Divider, Group, ScrollArea } from '@mantine/core';
import classes from './kanban-column.module.css';
import KanbanMemberCard from '../kanban-member-card/kanban-member-card';
import { MemberType } from '../types/member-type';
import { KanbanColumnType } from '../types/kanban-column-type';

type KanbanColumnProps = {
  id: string;
  title: string;
  column: KanbanColumnType;
  data: MemberType[];
};

const KanbanColumn = ({ id, title, data }: KanbanColumnProps) => {
  return (
    <Card
      key={title}
      shadow='md'
      radius='md'
      className={classes.column}
      padding='md'>
      <Group className={classes.title} px={10}>
        <div>
          <p>{title}</p>
        </div>
        <div className={classes.memberCount}>{data.length}</div>
      </Group>
      <Divider py={5} />
      <ScrollArea mah={380} mih={380} h={{ base: 200, sm: 380 }} pr={15}>
        {data.map((member) => (
          <React.Fragment key={member.id}>
            <KanbanMemberCard member={member} />
          </React.Fragment>
        ))}
      </ScrollArea>
    </Card>
  );
};

export default KanbanColumn;
