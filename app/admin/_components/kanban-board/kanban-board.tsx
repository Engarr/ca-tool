'use client';
import React from 'react';
import KanbanColumn from '../kanban-column/kanban-column';
import { columnList } from '../../_lib/tempMember';
import { Flex, ScrollArea } from '@mantine/core';
import { useMemberListContext } from '@/context/member-list-context';

const KanbanBoard = () => {
  const { newMemberList } = useMemberListContext();

  return (
    <ScrollArea scrollbarSize={10}>
      <Flex
        direction={{ base: 'column', sm: 'row' }}
        gap={'xl'}
        px={50}
        mb={50}>
        {columnList.map((col) => (
          <KanbanColumn
            key={col.id}
            title={col.title}
            column={col}
            members={newMemberList.filter(
              (member) => member.columnId === col.id
            )}
          />
        ))}
      </Flex>
    </ScrollArea>
  );
};

export default KanbanBoard;
