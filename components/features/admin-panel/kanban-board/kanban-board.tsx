'use client';
import React, { useMemo, useState } from 'react';
import KanbanColumn from '../kanban-column/kanban-column';
import { memberList, columnList } from '../lib/tempMember';
import { SimpleGrid } from '@mantine/core';
import {
	DndContext,
	DragOverlay,
	PointerSensor,
	useSensor,
	useSensors,
} from '@dnd-kit/core';
import { SortableContext } from '@dnd-kit/sortable';
import { MemberType } from '../types/member-type';
import KanbanMemberCard from '../kanban-member-card/kanban-member-card';
import { createPortal } from 'react-dom';
import { onDragOver, onDragStart } from '../lib/dnd-function';

const KanbanBoard = () => {
	const [newMemberList, setNewMemberList] = useState(memberList);
	const [activeCard, setActiveCard] = useState<MemberType | null>(null);

	const columnsId = useMemo(() => {
		return newMemberList.map((col) => col.id);
	}, [newMemberList]);

	const sensors = useSensors(
		useSensor(PointerSensor, {
			activationConstraint: {
				distance: 2,
			},
		})
	);

	return (
		<DndContext
			sensors={sensors}
			onDragStart={(event) => {
				onDragStart({ event, setActiveCard });
			}}
			onDragOver={(event) => {
				onDragOver({ event, setNewMemberList, newMemberList });
			}}
		>
			<SimpleGrid cols={{ base: 1, md: 3 }} spacing='xl' mt={5} mx={20}>
				<SortableContext items={columnsId}>
					{columnList.map((col) => (
						<KanbanColumn
							key={col.id}
							title={col.title}
							column={col}
							members={newMemberList.filter(
								(member) => member.columnId === col.id
							)}
						/>
					))}
				</SortableContext>
			</SimpleGrid>
			{createPortal(
				<DragOverlay>
					{activeCard && <KanbanMemberCard member={activeCard} />}
				</DragOverlay>,
				document.body
			)}
		</DndContext>
	);
};

export default KanbanBoard;
