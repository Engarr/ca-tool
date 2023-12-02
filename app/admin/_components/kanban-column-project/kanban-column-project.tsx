import React, { useMemo, useState } from 'react';
import { Card, Divider, ScrollArea, Group } from '@mantine/core';
import classes from './kanban-column-project.module.css';
import KanbanMemberCard from '../kanban-member-card/kanban-member-card';
import { Id, MemberType } from '../../_types/member-type';
import {
  sortUsersByValue,
  filterUsersByValue,
} from '../../_lib/members-list-management-functions';
import { useDrop } from 'react-dnd';
import { useMemberListContext } from '@/context/member-list-context';
import ColumnTitle from '../kanban-column-title/columnt-title';
import ColumnFilterMenu from '../column-filter-menu/column-filter-menu';
import { addMemberToProject } from '../../_lib/dnd-functions';
import { ProjectType } from '../../_types/project-type';
import TeamManagementSection from '../../projekty/_components/team-management-section/team-management-section';

type KanbanColumnProps = {
  title: string;
  column: ProjectType;
  members: MemberType[];
};

const KanbanColumnProject = ({ column, title, members }: KanbanColumnProps) => {
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
      addMemberToProject(member.id, column.id, setNewMemberList),
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
      ref={drop}
      key={title}
      shadow='md'
      radius='md'
      withBorder
      padding='xs'
      className={`${isOver ? classes.overColumn : ''}`}
      w={400}>
      <ColumnTitle
        memberCount={members.length}
        title={column.title}
        isProjectColumn={true}
        columnProjectId={column.id}
      />

      <TeamManagementSection
        assignedLider={column.assignedLider}
        assignedPM={column.assignedPM}
        title={title}
      />

      <ColumnFilterMenu
        setSortFilterValue={setSortFilterValue}
        sortFilterValues={sortFilterValues}
      />
      <Divider py={5} />
      {title !== 'Nie przypisani' &&
        column.technologies &&
        column.technologies?.length > 0 && (
          <>
            <Group gap={5} mb={10}>
              {column.technologies?.map((technology, index) => (
                <div key={index} className={classes.technologyCard}>
                  {technology}
                </div>
              ))}
            </Group>
            <Divider py={5} />
          </>
        )}

      <ScrollArea scrollbarSize={6} pr={15} h={550}>
        <Group gap={10}>
          {filteredAndSortedMembers.map((member) => (
            <React.Fragment key={member.id}>
              <KanbanMemberCard member={member} />
            </React.Fragment>
          ))}
        </Group>
      </ScrollArea>
    </Card>
  );
};

export default KanbanColumnProject;
