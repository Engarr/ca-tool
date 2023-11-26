import React from 'react';
import MemberListContextProvider from '@/context/member-list-context';
import KanbanBoard from './_components/kanban-board/kanban-board';

const Page = () => {
	return (
		<MemberListContextProvider>
			<KanbanBoard />
		</MemberListContextProvider>
	);
};

export default Page;
