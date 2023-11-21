import React, { useMemo } from 'react';
import { Card, Divider, Group, ScrollArea, Text } from '@mantine/core';
import classes from './kanban-column.module.css';
import KanbanMemberCard from '../kanban-member-card/kanban-member-card';
import { MemberType } from '../types/member-type';
import { KanbanColumnType } from '../types/kanban-column-type';
import { SortableContext, useSortable } from '@dnd-kit/sortable';

type KanbanColumnProps = {
	title: string;
	column: KanbanColumnType;
	members: MemberType[];
};

const KanbanColumn = ({
	column,
	title,
	members,
}: KanbanColumnProps) => {
	const membersIds = useMemo(() => {
		return members.map((member) => member.id);
	}, [members]);

	const { setNodeRef } = useSortable({
		id: column.id,
		data: {
			type: 'Column',
			column,
		},
	});

	return (
		<Card
			ref={setNodeRef}
			key={title}
			shadow='md'
			radius='md'
			className={classes.column}
			padding='md'
			miw={400}
		>
			<Group px={8} align={'center'} justify='space-between' mb={10}>
				<Text fw={600} size='xl'>
					{title}
				</Text>
				<Text className={classes.memberCount} size='lg' fw={600}>
					{members.length}
				</Text>
			</Group>
			<Divider py={5} />
			<ScrollArea scrollbarSize={4} h={{ base: 400, sm: 600 }} pr={15}>
				<SortableContext items={membersIds}>
					{members.map((member) => (
						<React.Fragment key={member.id}>
							<KanbanMemberCard
								member={member}
							/>
						</React.Fragment>
					))}
				</SortableContext>
			</ScrollArea>
		</Card>
	);
};

export default KanbanColumn;
