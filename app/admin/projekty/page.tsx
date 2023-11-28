'use client';
import React from 'react';

import KanbanBoard from '../_components/kanban-board/kanban-board';
import { useMemberListContext } from '@/context/member-list-context';
import CreateNewProject from './_components/create-new-project/create-new-project';
import { useProjectListContext } from '@/context/project-list-context';

const Projects = () => {
  const { newMemberList } = useMemberListContext();
  const { newConfirmedProjectList } = useProjectListContext();

  return (
    <>
      <CreateNewProject />
      <KanbanBoard
        kanbanMemberList={newMemberList}
        columnList={newConfirmedProjectList}
        isProjectBoard={true}
      />
    </>
  );
};

export default Projects;
