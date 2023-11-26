import React, { useMemo, useState } from 'react';
import {
	Card,
	Divider,
	Box,
	Group,
	ScrollArea,
	Select,
	Text,
	Collapse,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconArrowBadgeDown, IconArrowBadgeUp } from '@tabler/icons-react';
import classes from './kanban-column.module.css';
import KanbanMemberCard from '../kanban-member-card/kanban-member-card';
import { Id, MemberType } from '../../_types/member-type';
import { KanbanColumnType } from '../../_types/kanban-column-type';
import {
	sortUsersByValue,
	filterUsersByValue,
} from '../../_lib/members-list-management-functions';
import { confirmedProjectList } from '../../_lib/tempMember';
import ProjectBox from '../project-box/project-box';
import ColumntTitle from '../kanban-column-title/columnt-title';
import { useDrop } from 'react-dnd';
import { useMemberListContext } from '@/context/member-list-context';

type KanbanColumnProps = {
	title: string;
	column: KanbanColumnType;
	members: MemberType[];
};

const KanbanColumn = ({ column, title, members }: KanbanColumnProps) => {
	const { setNewMemberList } = useMemberListContext();
	const [sortValue, setSortValue] = useState('');
	const [filterValue, setFilterValue] = useState('');
	const [opened, { toggle }] = useDisclosure(false);

	const [{ isOver }, drop] = useDrop(() => ({
		accept: 'Member',
		drop: (member: { id: Id }) => addMemberToColumn(member.id),
		collect: (monitor) => ({
			isOver: !!monitor.isOver(),
		}),
	}));

	const addMemberToColumn = (memberId: Id) => {
		setNewMemberList((memberList) => {
			return memberList.map((m) => {
				if (m.id === memberId) {
					return {
						...m,
						columnId: column.id,
						assignedToProjectId: '',
					};
				} else {
					return m;
				}
			});
		});
	};

	const filteredAndSortedMembers = useMemo(() => {
		let newMembersList = members;
		if (sortValue) newMembersList = sortUsersByValue(sortValue, members);
		if (filterValue)
			newMembersList = filterUsersByValue(filterValue, members);
		return newMembersList;
	}, [members, sortValue, filterValue]);

	return (
		<Card
			ref={title !== 'Projekty' ? drop : null}
			key={title}
			shadow='md'
			radius='md'
			withBorder
			padding='xs'
			className={`${isOver ? classes.overColumn : ''}`}
			w={title === 'Projekty' ? 500 : 400}
		>
			<ColumntTitle memberCount={members.length} title={column.title} />
			<Box mr={15}>
				<Group justify='end' mb={10} onClick={toggle}>
					<Text
						size='xs'
						mt={'xs'}
						fw={500}
						className={classes.arrowIcon}
					>
						Pokaż filtry
					</Text>
					{opened ? (
						<IconArrowBadgeUp
							className={classes.arrowIcon}
							stroke={1.5}
							size={15}
						/>
					) : (
						<IconArrowBadgeDown
							className={classes.arrowIcon}
							stroke={1.5}
							size={15}
						/>
					)}
				</Group>

				<Collapse pb={10} pl={10} in={opened}>
					<Select
						onChange={(e) => {
							if (e) {
								setSortValue(e);
							}
						}}
						mb={'xs'}
						placeholder='Wybierz opcję'
						label='Sortuj według rangi'
						checkIconPosition='right'
						data={['Od najniższej', 'Od najwyższej']}
					/>
					<Select
						onChange={(e) => {
							if (e) {
								setFilterValue(e);
							}
						}}
						placeholder='Wybierz opcję'
						label='Filtruj specjalizacje'
						checkIconPosition='right'
						data={['Frontend', 'Backend', 'Inne', 'Wszystkie']}
					/>
				</Collapse>
			</Box>
			<Divider py={5} />
			<ScrollArea scrollbarSize={6} pr={15} mah={650}>
				{title === 'Projekty' ? (
					<>
						{confirmedProjectList.map((project) => (
							<React.Fragment key={project.id}>
								<ProjectBox
									projectMembers={filteredAndSortedMembers.filter(
										(member) =>
											member.assignedToProjectId ===
											project.id
									)}
									projectBox={project}
									columnId={column.id}
								/>
							</React.Fragment>
						))}
					</>
				) : (
					<>
						{filteredAndSortedMembers.map((member) => (
							<React.Fragment key={member.id}>
								<KanbanMemberCard member={member} />
							</React.Fragment>
						))}
					</>
				)}
			</ScrollArea>
		</Card>
	);
};

export default KanbanColumn;
