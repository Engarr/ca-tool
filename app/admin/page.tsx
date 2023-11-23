import React from 'react';
import dynamic from 'next/dynamic';
import MemberListContextProvider from '@/context/member-list-context';

const KanbanBoard = dynamic(
	() => import('./_components/kanban-board/kanban-board'),
	{
		ssr: false,
	}
);

const Page = () => {
	return (
		<MemberListContextProvider>
			<KanbanBoard />
		</MemberListContextProvider>
	);
};

export default Page;
