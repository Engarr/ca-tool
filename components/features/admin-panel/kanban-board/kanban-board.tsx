'use client';

import React, { useMemo, useState } from 'react';
import KanbanColumn from '../kanban-column/kanban-column';
import { memberList, columnList } from '../lib/tempMember';
import { SimpleGrid } from '@mantine/core';
import {
  DndContext,
  DragStartEvent,
  DragOverlay,
  DragOverEvent,
} from '@dnd-kit/core';
import { SortableContext, arrayMove } from '@dnd-kit/sortable';
import { MemberType } from '../types/member-type';

import KanbanMemberCard from '../kanban-member-card/kanban-member-card';
import { createPortal } from 'react-dom';

const KanbanBoard = () => {
  const [newMemberList, setNewMemberList] = useState(memberList);
  const coulmnsId = useMemo(() => {
    return newMemberList.map((col) => col.id);
  }, [newMemberList]);

  const [activeCard, setActiveCard] = useState<MemberType | null>(null);

  const onDragStart = (event: DragStartEvent) => {
    if (event.active.data.current?.type === 'MemberType') {
      setActiveCard(event.active.data.current.member);
      return;
    }
  };
  const onDragOver = (event: DragOverEvent) => {
    const { active, over } = event;
    if (!over) return;
    const activeId = active.id;
    const overId = over.id;
    if (activeId === overId) return;

    const isActiveAMember = active.data.current?.type === 'MemberType';
    const isOvereAMember = over.data.current?.type === 'MemberType';

    if (isActiveAMember && isOvereAMember) {
      setNewMemberList((memberList) => {
        const activeIndex = memberList.findIndex((m) => m.id === active.id);
        const overIndex = memberList.findIndex((m) => m.id === over.id);

        newMemberList[activeIndex].columnId = newMemberList[overIndex].columnId;

        return arrayMove(newMemberList, activeIndex, overIndex);
      });
    }
  };

  return (
    <DndContext onDragStart={onDragStart} onDragOver={onDragOver}>
      <SimpleGrid cols={{ base: 1, xl: 3 }} spacing='md' mt={5} mx={20}>
        <SortableContext items={coulmnsId}>
          {columnList.map((col) => (
            <KanbanColumn
              key={col.id}
              title={col.title}
              id={col.id}
              column={col}
              data={newMemberList.filter(
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
