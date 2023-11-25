'use client';
import React, { useState } from 'react';
import KanbanColumn from '../kanban-column/kanban-column';
import { columnList } from '../../_lib/tempMember';
import { Flex, ScrollArea } from '@mantine/core';
import {
  DndContext,
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { SortableContext } from '@dnd-kit/sortable';
import { MemberType } from '../../_types/member-type';
import KanbanMemberCard from '../kanban-member-card/kanban-member-card';
import { createPortal } from 'react-dom';
import { onDragOver, onDragStart } from '../../_lib/dnd-function';

import { useMemberListContext } from '@/context/member-list-context';

const KanbanBoard = () => {
  const { newMemberList, setNewMemberList } = useMemberListContext();
  const [activeCard, setActiveCard] = useState<MemberType | null>(null);
  const columnsId = columnList.map((col) => col.id);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 2,
      },
    })
  );
  const onDragEnd = () => {
    setActiveCard(null);
  };

  return (
    <DndContext
      sensors={sensors}
      onDragEnd={onDragEnd}
      onDragStart={(event) => {
        onDragStart({ event, setActiveCard });
      }}
      onDragOver={(event) => {
        onDragOver({ event, setNewMemberList, newMemberList });
      }}>
      <ScrollArea scrollbarSize={10}>
        <Flex
          direction={{ base: 'column', sm: 'row' }}
          gap={'xl'}
          px={50}
          mb={50}>
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
        </Flex>
      </ScrollArea>
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
