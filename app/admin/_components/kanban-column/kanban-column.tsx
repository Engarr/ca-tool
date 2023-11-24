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
import { confirmedProjectList } from '../../_lib/tempMember';
import ProjectBox from '../project-box/project-box';
import ColumntTitle from '../kanban-column-title/columnt-title';

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
      withBorder
      padding='xs'
      w={title === 'Projekty' ? 500 : 400}>
      <ColumntTitle memberCount={members.length} title={column.title} />
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
      <ScrollArea scrollbarSize={6} pr={15} mah={650}>
        {title === 'Projekty' ? (
          <>
            {confirmedProjectList.map((project) => (
              <React.Fragment key={project.id}>
                <ProjectBox
                  projectMembers={members.filter(
                    (member) => member.assignedToProjectId === project.id
                  )}
                  projectBox={project}
                  columnId={column.id}
                />
              </React.Fragment>
            ))}
          </>
        ) : (
          <SortableContext items={membersIds}>
            {filteredAndSortedMembers.map((member) => (
              <React.Fragment key={member.id}>
                <KanbanMemberCard member={member} />
              </React.Fragment>
            ))}
          </SortableContext>
        )}
      </ScrollArea>
    </Card>
  );
};

export default KanbanColumn;
