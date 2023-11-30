import React, { useMemo, useState } from 'react';
import { Card, Divider, ScrollArea, Group } from '@mantine/core';
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
import { useDrop } from 'react-dnd';
import { useMemberListContext } from '@/context/member-list-context';
import ColumnTitle from '../kanban-column-title/columnt-title';
import ColumnFilterMenu from '../column-filter-menu/column-filter-menu';
import { addMemberToColumn } from '../../_lib/dnd-functions';

type KanbanColumnProps = {
  title: string;
  column: KanbanColumnType;
  members: MemberType[];
};

const KanbanColumn = ({ column, title, members }: KanbanColumnProps) => {
  const { setNewMemberList } = useMemberListContext();
  const [sortFilterValues, setSortFilterValue] = useState<{
    sortValue: string | null;
    filterValue: string | null;
  }>({
    sortValue: '',
    filterValue: '',
  });
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'Member',
    drop: (member: { id: Id }) =>
      addMemberToColumn(member.id, column.id, setNewMemberList),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const filteredAndSortedMembers = useMemo(() => {
    let newMembersList = members;
    if (sortFilterValues.sortValue)
      newMembersList = sortUsersByValue(sortFilterValues.sortValue, members);
    if (sortFilterValues.filterValue)
      newMembersList = filterUsersByValue(
        sortFilterValues.filterValue,
        members
      );
    return newMembersList;
  }, [members, sortFilterValues]);

  return (
    <Card
      ref={title !== 'Projekty' ? drop : null}
      key={title}
      shadow='md'
      radius='md'
      withBorder
      padding='xs'
      className={`${isOver ? classes.overColumn : ''}`}
      w={title === 'Projekty' ? 500 : 400}>
      <ColumnTitle
        memberCount={members.length}
        title={column.title}
      />
      <ColumnFilterMenu
        setSortFilterValue={setSortFilterValue}
        sortFilterValues={sortFilterValues}
      />
      <Divider py={5} />
      <ScrollArea scrollbarSize={6} pr={15} h={550}>
        {title === 'Projekty' ? (
          <>
            {confirmedProjectList.map((project) => (
              <React.Fragment key={project.id}>
                <ProjectBox
                  projectMembers={filteredAndSortedMembers.filter(
                    (member) => member.assignedToProjectId === project.id
                  )}
                  projectBox={project}
                  columnId={column.id}
                />
              </React.Fragment>
            ))}
          </>
        ) : (
          <Group gap={10}>
            {filteredAndSortedMembers.map((member) => (
              <React.Fragment key={member.id}>
                <KanbanMemberCard member={member} />
              </React.Fragment>
            ))}
          </Group>
        )}
      </ScrollArea>
    </Card>
  );
};

export default KanbanColumn;
