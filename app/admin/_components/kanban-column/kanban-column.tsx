import React, { useMemo } from 'react';
import { Card, Divider, ScrollArea } from '@mantine/core';
import KanbanMemberCard from '../kanban-member-card/kanban-member-card';
import { MemberType } from '../../_types/member-type';
import { KanbanColumnType } from '../../_types/kanban-column-type';
import { SortableContext, useSortable } from '@dnd-kit/sortable';
import { confirmedProjectList } from '../../_lib/tempMember';
import ProjectBox from '../project-box/project-box';
import ColumntTitle from '../kanban-column-title/columnt-title';

type KanbanColumnProps = {
  title: string;
  column: KanbanColumnType;
  members: MemberType[];
};

const KanbanColumn = ({ column, title, members }: KanbanColumnProps) => {
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
      withBorder
      padding='xs'
      w={title === 'Projekty' ? 500 : 400}>
      <ColumntTitle memberCount={members.length} title={column.title} />
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
            {members.map((member) => (
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
