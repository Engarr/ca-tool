'use client';
import React from 'react';
import KanbanBoard from '../_components/kanban-board/kanban-board';
import { useMemberListContext } from '@/context/member-list-context';
import { confirmedProjectList } from '../_lib/tempMember';

const Projects = () => {
	const { newMemberList } = useMemberListContext();

	return (
		<div>
			<KanbanBoard
				kanbanMemberList={newMemberList}
				columnList={confirmedProjectList}
				isProjectBoard={true}
			/>
		</div>
	);
};

export default Projects;
