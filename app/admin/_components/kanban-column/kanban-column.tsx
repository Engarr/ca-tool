import React, { useMemo, useState } from 'react';
import { Card, Divider, Group, ScrollArea, Select, Text } from '@mantine/core';
import classes from './kanban-column.module.css';
import KanbanMemberCard from '../kanban-member-card/kanban-member-card';
import { MemberType } from '../../_types/member-type';
import { KanbanColumnType } from '../../_types/kanban-column-type';
import { SortableContext, useSortable } from '@dnd-kit/sortable';
import {
	sortUsersByValue,
	filterUsersByValue,
} from '../../_lib/members-list-management-functions';

type KanbanColumnProps = {
	title: string;
	column: KanbanColumnType;
	members: MemberType[];
};

const KanbanColumn = ({ column, title, members }: KanbanColumnProps) => {
	const [sortValue, setSortValue] = useState('');
	const [filterValue, setFilterValue] = useState('');

	const filteredAndSortedMembers = useMemo(() => {
		let newMembersList = members;
		if (sortValue) {
			newMembersList = sortUsersByValue(sortValue, members);
		}
		if (filterValue) {
			newMembersList = filterUsersByValue(filterValue, members);
		}
		return newMembersList;
	}, [members, sortValue, filterValue]);

	const membersIds = useMemo(() => {
		return filteredAndSortedMembers.map((member) => member.id);
	}, [filteredAndSortedMembers]);

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
			<Group pb={10} pl={10}>
				<Select
					onChange={(e) => {
						if (e) {
							setSortValue(e);
						}
					}}
					label='Sortuj według rangi'
					checkIconPosition='right'
					data={['od najniższej', 'od najwyższej']}
					disabled={column.title === 'Projekty'}
				/>
				<Select
					onChange={(e) => {
						if (e) {
							setFilterValue(e);
						}
					}}
					label='Filtruj specjalizacje'
					checkIconPosition='right'
					data={['frontend', 'backend', 'inne', 'wszystkie']}
					disabled={column.title === 'Projekty'}
				/>
			</Group>
			<Divider py={5} />
			<ScrollArea scrollbarSize={4} h={{ base: 400, sm: 600 }} pr={15}>
				<SortableContext items={membersIds}>
					{filteredAndSortedMembers.map((member) => (
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
