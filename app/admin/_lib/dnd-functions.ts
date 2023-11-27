import { Id, MemberType } from '../_types/member-type';
import React from 'react';

export const addMemberToColumn = (
	memberId: Id,
	columnId: Id,
	setNewMemberList: React.Dispatch<React.SetStateAction<MemberType[]>>
) => {
	setNewMemberList((memberList) => {
		return memberList.map((m) => {
			if (m.id === memberId) {
				return {
					...m,
					columnId,
					assignedToProjectId: '',
				};
			} else {
				return m;
			}
		});
	});
};

export const addMemberToProjectAndChangeColumn = (
	memberId: Id,
	columnId: Id,
	projectBoxId: Id,
	setNewMemberList: React.Dispatch<React.SetStateAction<MemberType[]>>
) => {
	setNewMemberList((memberList) => {
		return memberList.map((m) => {
			if (m.id === memberId) {
				return {
					...m,
					columnId: columnId,
					assignedToProjectId: projectBoxId,
				};
			} else {
				return m;
			}
		});
	});
};
export const addMemberToProject = (
	memberId: Id,
	projectId: Id,
	setNewMemberList: React.Dispatch<React.SetStateAction<MemberType[]>>
) => {
	setNewMemberList((memberList) => {
		return memberList.map((m) => {
			if (m.id === memberId) {
				return {
					...m,
					assignedToProjectId: projectId,
				};
			} else {
				return m;
			}
		});
	});
};
