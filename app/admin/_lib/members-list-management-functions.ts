import { MemberType } from '../_types/member-type';

export const sortUsersByValue = (sortValue: string, members: MemberType[]) => {
	let sortedUsers;
	if (sortValue === 'Od najwyższej rangi') {
		sortedUsers = members.sort((a, b) => b.range - a.range);
		return sortedUsers;
	} else if (sortValue === 'Od najniższej rangi') {
		sortedUsers = members.sort((a, b) => a.range - b.range);
		return sortedUsers;
	} else if (sortValue === 'Alfabetycznie po nazwisku') {
		sortedUsers = members.sort((a, b) => {
			const lastNameA = a.fullName.split(' ')[1]; // Załóż, że drugim słowem w a.name jest nazwisko
			const lastNameB = b.fullName.split(' ')[1]; // Załóż, że drugim słowem w b.name jest nazwisko
			return lastNameA.localeCompare(lastNameB);
		});
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
