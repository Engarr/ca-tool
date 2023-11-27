import React, { useState } from 'react';
import {
  Group,
  Text,
  rem,
  Flex,
  Divider,
  Container,
  Autocomplete,
} from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import KanbanMemberCard from '../kanban-member-card/kanban-member-card';
import { useMemberListContext } from '@/context/member-list-context';
import { columnList } from '../../_lib/tempMember';

const SearchMember = () => {
  const { newMemberList } = useMemberListContext();
  const [searchValue, setSearchValue] = useState('');

  const filterMembers = () => {
    if (newMemberList.length === 0 || searchValue === '') {
      return [];
    }

    return newMemberList.filter((member) =>
      member.fullName.toLowerCase().startsWith(searchValue.toLowerCase())
    );
  };

  const searchMemberResult = filterMembers();

  const hasSearchResults = searchMemberResult.length > 0;
  const showNoResultsMessage =
    searchMemberResult.length === 0 && searchValue !== '';

  return (
    <>
      <Group ml={50} align='center' my={20} gap={10}>
        <Autocomplete
          label='Wyszukaj użytkownika:'
          placeholder='Wprowadź dane użytkownika'
          size='xl'
          w={400}
          onChange={setSearchValue}
          data={
            hasSearchResults
              ? Array.from(
                  new Set(searchMemberResult.map((member) => member.fullName))
                )
              : []
          }
          leftSection={
            <IconSearch
              style={{ width: rem(20), height: rem(20) }}
              stroke={1.5}
            />
          }
          styles={{ section: { pointerEvents: 'none' } }}
          mb='sm'
        />

        <Group gap={10}>
          <Flex direction={'row'}>
            {hasSearchResults &&
              searchMemberResult.slice(0, 4).map((member) => (
                <React.Fragment key={member.id}>
                  <Flex direction={'column'}>
                    <Text ml={20} mb={5}>
                      Kolumna{' '}
                      <Text component='span' c='blue' fw={500}>
                        {columnList.find(
                          (column) => column.id === member.columnId
                        )?.title || ''}
                      </Text>
                    </Text>
                    <Container style={{ width: '400px' }} mr={0}>
                      <KanbanMemberCard member={member} />
                    </Container>
                  </Flex>
                </React.Fragment>
              ))}
            {showNoResultsMessage && (
              <Text fw={500} ml={20} fz={'lg'}>
                Nie ma takiego użytkownika
              </Text>
            )}
          </Flex>
        </Group>
      </Group>
      <Divider py={5} />
    </>
  );
};

export default SearchMember;
