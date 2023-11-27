import { Id, MemberType } from '@/app/admin/_types/member-type';
import { Card, Divider, Group, ScrollArea } from '@mantine/core';
import KanbanMemberCard from '../kanban-member-card/kanban-member-card';
import { ProjectType } from '@/app/admin/_types/project-type';
import ColumntTitle from '../kanban-column-title/columnt-title';
import classes from './project-box.module.css';
import { useDrop } from 'react-dnd';
import { useMemberListContext } from '@/context/member-list-context';

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
  const { setNewMemberList } = useMemberListContext();

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'Member',
    drop: (member: { id: Id }) => addMemberToProject(member.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addMemberToProject = (memberId: Id) => {
    setNewMemberList((memberList) => {
      return memberList.map((m) => {
        if (m.id === memberId) {
          return {
            ...m,
            columnId: columnId,
            assignedToProjectId: projectBox.id,
          };
        } else {
          return m;
        }
      });
    });
  };

  return (
    <Card
      withBorder
      mih={100}
      className={` ${isOver ? classes.overProject : ''}`}
      mb={'md'}
      ref={drop}>
      <ColumntTitle
        memberCount={projectMembers.length}
        title={projectBox.projectTitle}
      />
      <Divider py={5} />
      <ScrollArea pr={15} scrollbarSize={4}>
        <Group gap={10}>
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
        </Group>
      </ScrollArea>
    </Card>
  );
};

export default ProjectBox;
