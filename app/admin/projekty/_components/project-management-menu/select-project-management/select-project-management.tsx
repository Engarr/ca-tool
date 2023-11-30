import React from 'react';
import { Collapse, Text, ScrollArea, Menu } from '@mantine/core';
import { useMemberListContext } from '@/context/member-list-context';
import { Id } from '@/app/admin/_types/member-type';
import classes from './select-project-management.module.css';
import { useProjectListContext } from '@/context/project-list-context';

type ChoseProjectPmType = {
  columnProjectId: Id | undefined;
  isMemebrsListOpened: boolean;
  role: string;
};

const SelectProjectManagement = ({
  columnProjectId,
  isMemebrsListOpened,
  role,
}: ChoseProjectPmType) => {
  const { newMemberList } = useMemberListContext();
  const { newConfirmedProjectList, setNewConfirmedProjectList } =
    useProjectListContext();

  const projectMemebersList = newMemberList.filter(
    (memebr) => memebr.assignedToProjectId === columnProjectId
  );
  const project = newConfirmedProjectList.find(
    (project) => project.id === columnProjectId
  );

  const assignPMtoProject = (memberId: Id) => {
    const updatedProjectList = newConfirmedProjectList.map((project) =>
      project.id === columnProjectId
        ? {
            ...project,
            [role === 'pm' ? 'assignedPM' : 'assignedLider']: memberId,
          }
        : project
    );

    setNewConfirmedProjectList(updatedProjectList);
  };
  const clearProjectPM = () => {
    const updatedProjectList = newConfirmedProjectList.map((project) =>
      project.id === columnProjectId
        ? { ...project, [role === 'pm' ? 'assignedPM' : 'assignedLider']: '' }
        : project
    );
    setNewConfirmedProjectList(updatedProjectList);
  };

  const isPMAssignedToProject = project ? project.assignedPM : null;
  const isLiderAssignedToProject = project ? project.assignedLider : null;
  const isMemberListEmpty =
    projectMemebersList.length === 0 && !isPMAssignedToProject;
  const isMemberListAvailable = projectMemebersList.length > 0;
  console.log(projectMemebersList);
  return (
    <Collapse pb={10} pl={10} mr={10} in={isMemebrsListOpened}>
      {isMemberListEmpty && (
        <Menu.Item className={classes.listItem}>
          <Text maw={200}>Lista jest pusta </Text>
        </Menu.Item>
      )}
      {isPMAssignedToProject && role === 'pm' && (
        <Menu.Item className={classes.listItem} onClick={clearProjectPM}>
          <Text maw={200}>{role === 'pm' ? 'Usuń PM' : 'Usuń Lidera'} </Text>
        </Menu.Item>
      )}
      {isLiderAssignedToProject && role !== 'pm' && (
        <Menu.Item className={classes.listItem} onClick={clearProjectPM}>
          <Text maw={200}>{role === 'pm' ? 'Usuń PM' : 'Usuń Lidera'} </Text>
        </Menu.Item>
      )}
      {isMemberListAvailable && (
        <ScrollArea scrollbarSize={5} mr={10} type='always' h={80}>
          {projectMemebersList.map((member) => (
            <Menu.Item
              className={classes.listItem}
              key={member.id}
              onClick={() => assignPMtoProject(member.id)}>
              <Text maw={200}>{member.fullName}</Text>
            </Menu.Item>
          ))}
        </ScrollArea>
      )}
    </Collapse>
  );
};

export default SelectProjectManagement;
