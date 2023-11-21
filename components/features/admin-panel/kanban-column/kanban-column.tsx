import React, { useMemo } from 'react';
import { Card, Divider, Group, ScrollArea } from '@mantine/core';
import classes from './kanban-column.module.css';
import KanbanMemberCard from '../kanban-member-card/kanban-member-card';
import { MemberType } from '../types/member-type';
import { KanbanColumnType } from '../types/kanban-column-type';
import { SortableContext, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

type KanbanColumnProps = {
	title: string;
	column: KanbanColumnType;
	members: MemberType[];
};

const KanbanColumn = ({ column, title, members }: KanbanColumnProps) => {
	const membersIds = useMemo(() => {
		return members.map((member) => member.id);
	}, [members]);

	const { setNodeRef, attributes, listeners, transform, transition } =
		useSortable({
			id: column.id,
			data: {
				type: 'Column',
				column,
			},
		});
	const style = {
		transition,
		transform: CSS.Transform.toString(transform),
	};
	return (
		<Card
			ref={setNodeRef}
			style={style}
			key={title}
			shadow='md'
			radius='md'
			className={classes.column}
			padding='md'
		>
			<Group
				className={classes.title}
				px={10}
				{...attributes}
				{...listeners}
			>
				<div>
					<p>{title}</p>
				</div>
				<div className={classes.memberCount}>{members.length}</div>
			</Group>
			<Divider py={5} />
			<ScrollArea mah={380} mih={380} h={{ base: 200, sm: 380 }} pr={15}>
				<SortableContext items={membersIds}>
					{members.map((member) => (
						<React.Fragment key={member.id}>
							<KanbanMemberCard member={member} />
						</React.Fragment>
					))}
				</SortableContext>
			</ScrollArea>
		</Card>
	);
};

export default KanbanColumn;
