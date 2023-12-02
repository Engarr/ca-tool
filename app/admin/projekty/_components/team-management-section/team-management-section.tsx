import React from 'react';
import { Group, Text, Box, Flex } from '@mantine/core';
import classes from './team-management-section.module.css';
import { useMemberListContext } from '@/context/member-list-context';
import { Id } from '@/app/admin/_types/member-type';

type TeamManagementSectionType = {
  assignedPM?: Id;
  assignedLider?: Id;
  title: string;
};

const TeamManagementSection = ({
  assignedPM,
  assignedLider,
  title,
}: TeamManagementSectionType) => {
  const { newMemberList } = useMemberListContext();
  const pm = newMemberList.find((member) => member.id == assignedPM);
  const lider = newMemberList.find((member) => member.id == assignedLider);
  return (
    <>
      {((title !== 'Nie przypisani' && pm) || lider) && (
        <Box className={classes.managementBox}>
          <Group ml={10} className={classes.managers} fz={12} m={10} maw={200}>
            <Flex direction={'column'}>
              <Text fz={12} w={200}>
                PM:{' '}
                <Text component='span' fz={12}>
                  {pm?.fullName}
                </Text>
              </Text>
              <Text fz={12} w={200}>
                Lider:{' '}
                <Text component='span' fz={12}>
                  {lider?.fullName}
                </Text>
              </Text>
            </Flex>
          </Group>
        </Box>
      )}
    </>
  );
};

export default TeamManagementSection;
