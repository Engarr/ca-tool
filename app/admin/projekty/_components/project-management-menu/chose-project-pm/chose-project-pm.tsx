import React from 'react';
import { Collapse, Text, ScrollArea, Menu } from '@mantine/core';
import { useMemberListContext } from '@/context/member-list-context';
import { Id } from '@/app/admin/_types/member-type';
import classes from './chose-project-pm.module.css';
import { useProjectListContext } from '@/context/project-list-context';

type ChoseProjectPmType = {
  columnProjectId: Id | undefined;
  isMemebrsListOpened: boolean;
};

const ChoseProjectPm = ({
  columnProjectId,
  isMemebrsListOpened,
}: ChoseProjectPmType) => {
  const { newMemberList } = useMemberListContext();
  const { newConfirmedProjectList, setNewConfirmedProjectList } =
    useProjectListContext();

  const projectMemebersList = newMemberList.filter(
    (memebr) => memebr.assignedToProjectId === columnProjectId
  );

  const assignPMtoProject = (memberId: Id) => {
    const updatedProjectList = newConfirmedProjectList.map((project) =>
      project.id === columnProjectId
        ? { ...project, assignedPM: memberId }
        : project
    );

    setNewConfirmedProjectList(updatedProjectList);
  };
  const clearProjectPM = () => {
    const updatedProjectList = newConfirmedProjectList.map((project) =>
      project.id === columnProjectId ? { ...project, assignedPM: '' } : project
    );
    setNewConfirmedProjectList(updatedProjectList);
  };
  return (
    <Collapse pb={10} pl={10} mr={10} in={isMemebrsListOpened}>
      {projectMemebersList.length === 0 ? (
        <Text className={classes.listItem}>Lista jest pusta</Text>
      ) : (
        <ScrollArea scrollbarSize={8} mr={10} type='always' h={100}>
          <Menu.Item className={classes.listItem} onClick={clearProjectPM}>
            <Text maw={200}>Wyszyść pole</Text>
          </Menu.Item>
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

export default ChoseProjectPm;
