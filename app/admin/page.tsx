'use client';
import React from 'react';
import { useMemberListContext } from '@/context/member-list-context';
import { columnList } from '../admin/_lib/tempMember';
import KanbanBoard from './_components/kanban-board/kanban-board';
import SearchMember from './_components/search-member/search-member';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const Page = () => {
  const { newMemberList } = useMemberListContext();

  return (
    <DndProvider backend={HTML5Backend}>
      <SearchMember />
      <KanbanBoard
        kanbanMemberList={newMemberList}
        columnList={columnList}
        isProjectBoard={false}
      />
    </DndProvider>
  );
};

export default Page;
