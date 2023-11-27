'use client';
import React from 'react';
import MemberListContextProvider from '@/context/member-list-context';
import KanbanBoard from './_components/kanban-board/kanban-board';
import SearchMember from './_components/search-member/search-member';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const Page = () => {
  return (
    <MemberListContextProvider>
      <DndProvider backend={HTML5Backend}>
        <SearchMember />
        <KanbanBoard />
      </DndProvider>
    </MemberListContextProvider>
  );
};

export default Page;
