'use client';
import React from 'react';
import KanbanColumn from '../kanban-column/kanban-column';
import KanbanColumnProject from '../../projekty/_components/kanban-column-project/kanban-column-project';
import { Flex, ScrollArea } from '@mantine/core';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { MemberType } from '../../_types/member-type';
import { KanbanColumnType } from '../../_types/kanban-column-type';

type KanbanBoardType = {
  kanbanMemberList: MemberType[];
  columnList: KanbanColumnType[];
  isProjectBoard: boolean;
};

const KanbanBoard = ({
  kanbanMemberList,
  columnList,
  isProjectBoard,
}: KanbanBoardType) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <ScrollArea scrollbarSize={10}>
        <Flex
          direction={{ base: 'column', sm: 'row' }}
          gap={'xl'}
          px={50}
          mb={50}>
          {!isProjectBoard &&
            columnList.map((col) => (
              <KanbanColumn
                key={col.id}
                title={col.title}
                column={col}
                members={kanbanMemberList.filter(
                  (member) => member.columnId === col.id
                )}
              />
            ))}
          {isProjectBoard &&
            columnList.map((col) => (
              <KanbanColumnProject
                key={col.id}
                title={col.title}
                column={col}
                members={kanbanMemberList.filter(
                  (member) => member.assignedToProjectId === col.id
                )}
              />
            ))}
        </Flex>
      </ScrollArea>
    </DndProvider>
  );
};

export default KanbanBoard;
