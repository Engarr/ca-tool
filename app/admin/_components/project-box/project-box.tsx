import { useMemo } from 'react';
import { Id, MemberType } from '@/app/admin/_types/member-type';
import { Card, Divider, Group, ScrollArea } from '@mantine/core';
import KanbanMemberCard from '../kanban-member-card/kanban-member-card';
import { SortableContext, useSortable } from '@dnd-kit/sortable';
import { ProjectType } from '@/app/admin/_types/project-type';
import ColumntTitle from '../kanban-column-title/columnt-title';
import classes from './project-box.module.css';

type ProjectBoxType = {
  projectBox: ProjectType;
  projectMembers: MemberType[];
  columnId: Id;
};

const ProjectBox = ({
  projectMembers,
  projectBox,
  columnId,
}: ProjectBoxType) => {
  const membersId = useMemo(() => {
    return projectMembers.map((member) => member.id);
  }, [projectMembers]);

  const { setNodeRef } = useSortable({
    id: projectBox.id,
    data: {
      type: 'ProjectBox',
      projectBox,
      columnId,
    },
  });

  return (
    <Card
      withBorder
      ref={setNodeRef}
      mih={100}
      className={classes.projectBox}
      mb={'md'}>
      <ColumntTitle
        memberCount={projectMembers.length}
        title={projectBox.projectTitle}
      />
      <Divider py={5} />
      <ScrollArea pr={15} scrollbarSize={4}>
        <Group gap={0}>
          <SortableContext items={membersId}>
            {projectMembers
              .filter(
                (member) =>
                  member.assignedToProjectId === projectBox.id ||
                  member.assignedToProjectId === null
              )
              .map((filteredMember) => (
                <KanbanMemberCard
                  key={filteredMember.id}
                  member={filteredMember}
                />
              ))}
          </SortableContext>
        </Group>
      </ScrollArea>
    </Card>
  );
};

export default ProjectBox;
