export type Id = string | number;
export type MemberType = {
	id: Id;
	columnId: Id;
	fullName: string;
	specialization: {
		domain: string;
		role: string;
	};
	range: number;
	note?: string;
	assignedToProjectId?: string | number | null;
};
