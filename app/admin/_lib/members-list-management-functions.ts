import { MemberType } from '../_types/member-type';

export const sortUsersByValue = (sortValue: string, members: MemberType[]) => {
	let sortedUsers;
	if (sortValue === 'Od najwyższej') {
		sortedUsers = members.sort((a, b) => b.range - a.range);
		return sortedUsers;
	} else if (sortValue === 'Od najniższej') {
		sortedUsers = members.sort((a, b) => a.range - b.range);
		return sortedUsers;
	} else return members;
};
export const filterUsersByValue = (
	filterValue: string,
	members: MemberType[]
) => {
	let filteredUsers;
	if (filterValue === 'Frontend') {
		filteredUsers = members.filter(
			(user) =>
				user.specialization && user.specialization.domain === 'Frontend'
		);
		return filteredUsers;
	} else if (filterValue === 'Backend') {
		filteredUsers = members.filter(
			(user) =>
				user.specialization && user.specialization.domain === 'Backend'
		);
		return filteredUsers;
	} else if (filterValue === 'Inne') {
		filteredUsers = members.filter(
			(user) =>
				user.specialization && user.specialization.domain === 'Others'
		);
		return filteredUsers;
	} else return members;
};
