'use client';
import React from 'react';
import { useMemberListContext } from '@/context/member-list-context';
import { columnList } from '../admin/_lib/tempMember';
import KanbanBoard from './_components/kanban-board/kanban-board';

const Page = () => {
	const { newMemberList } = useMemberListContext();
	return (
		<KanbanBoard
			kanbanMemberList={newMemberList}
			columnList={columnList}
			isProjectBoard={false}
		/>
	);
};

export default Page;
