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
  Flex,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconArrowBadgeDown,
  IconArrowBadgeUp,
  IconX,
} from '@tabler/icons-react';
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
  const [sortFilterValues, setSortFilterValue] = useState({
    sortValue: '',
    filterRangValue: '',
  });

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
    if (sortFilterValues.sortValue)
      newMembersList = sortUsersByValue(sortFilterValues.sortValue, members);
    if (sortFilterValues.filterRangValue)
      newMembersList = filterUsersByValue(
        sortFilterValues.filterRangValue,
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
      mt={20}
      className={`${isOver ? classes.overColumn : ''}`}
      w={title === 'Projekty' ? 500 : 400}>
      <ColumntTitle memberCount={members.length} title={column.title} />
      <Box mr={15}>
        <Group justify='end' mb={10} onClick={toggle}>
          <Text size='xs' fw={500} className={classes.filterText}>
            Pokaż filtry
          </Text>
          {opened ? (
            <Box className={classes.arrowIconBox}>
              <IconArrowBadgeUp stroke={1.5} size={18} />
            </Box>
          ) : (
            <Box className={classes.arrowIconBox}>
              <IconArrowBadgeDown stroke={1.5} size={18} />
            </Box>
          )}
        </Group>
        {(sortFilterValues.filterRangValue || sortFilterValues.sortValue) &&
          !opened && (
            <Flex align='center' mb={5}>
              <Text size='xs' fw={500} className={classes.filterMethod}>
                {`${sortFilterValues.sortValue},
								${sortFilterValues.filterRangValue}`}
              </Text>
              <IconX
                className={classes.cleanFilersIcon}
                size={20}
                onClick={() => {
                  setSortFilterValue({
                    sortValue: '',
                    filterRangValue: '',
                  });
                }}
              />
            </Flex>
          )}

        <Collapse pb={10} pl={10} in={opened}>
          <Select
            onChange={(e) => {
              if (e) {
                setSortFilterValue((prev) => {
                  return {
                    ...prev,
                    sortValue: e,
                  };
                });
              }
            }}
            mb={'xs'}
            placeholder='Wybierz opcję'
            label='Sortuj według'
            checkIconPosition='right'
            data={[
              'Od najniższej rangi',
              'Od najwyższej rangi',
              'Alfabetycznie po nazwisku',
            ]}
          />
          <Select
            onChange={(e) => {
              if (e) {
                setSortFilterValue((prev) => {
                  return {
                    ...prev,
                    filterRangValue: e,
                  };
                });
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
