'use client';
import React from 'react';
import { SchoolsNameType } from '@/app/ankieta/_components/user-survey/user-survey';
import { getSchoolsName } from '@/app/ankieta/_lib/api-survey';
import { Select, Group, rem } from '@mantine/core';
import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { IconFilter } from '@tabler/icons-react';
import { useMemberListContext } from '@/context/member-list-context';
import { memberList } from '../../_lib/tempMember';

const FilterMembersBySchool = () => {
	const { setNewMemberList } = useMemberListContext();

	const { data: schoolsNameData }: UseQueryResult<SchoolsNameType[]> =
		useQuery({
			queryKey: ['surveyData'],
			queryFn: getSchoolsName,
		});
	const schoolsName = schoolsNameData
		? Object.values(schoolsNameData).map((item) => item.name)
		: [];

	const handleFilterMembersBySchool = (filterSchool: string) => {
		const filteredMembers = memberList.filter((member) => {
			return member.nameOfUniversityOrOccupation === filterSchool;
		});
		setNewMemberList(filteredMembers);
	};

	return (
		<Select
			w={200}
			onChange={(filterSchool) => {
				if (filterSchool) {
					handleFilterMembersBySchool(filterSchool);
				} else {
					setNewMemberList(memberList);
				}
			}}
			allowDeselect
			clearable
			size='xs'
			label='Filtruj przez szkoła / uczelnia'
			placeholder='Wybierz uczelnie'
			data={...schoolsName}
			leftSection={
				<IconFilter
					style={{ width: rem(15), height: rem(15) }}
					stroke={1.5}
				/>
			}
		/>
	);
};

export default FilterMembersBySchool;
