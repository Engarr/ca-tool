import { DragStartEvent, DragOverEvent } from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';
import { MemberType } from '../_types/member-type';

type OnDragStartType = {
  event: DragStartEvent;
  setActiveCard: React.Dispatch<React.SetStateAction<MemberType | null>>;
};
type OnDragOverType = {
  event: DragOverEvent;
  setNewMemberList: React.Dispatch<React.SetStateAction<MemberType[]>>;
  newMemberList: MemberType[];
};

export const onDragStart = ({
  event,
  setActiveCard,
}: OnDragStartType): void => {
  if (event.active.data.current?.type === 'Member') {
    setActiveCard(event.active.data.current.member);
    return;
  }
};

export const onDragOver = ({
  event,
  setNewMemberList,
  newMemberList,
}: OnDragOverType): void => {
  const { active, over } = event;
  if (!over) return;
  const activeId = active.id;
  const overId = over.id;
  if (activeId === overId) return;

  const isActiveAMember = active.data.current?.type === 'Member';
  const isOvereAMember = over.data.current?.type === 'Member';
  const isOverAColumn = over.data.current?.type === 'Column';
  const isOverAProjectBox = over.data.current?.type === 'ProjectBox';

  if (!isActiveAMember) return;

  // Im dropping a Member over another Member

  if (isActiveAMember && isOvereAMember) {
    setNewMemberList((memberList) => {
      const activeIndex = memberList.findIndex((m) => m.id === active.id);
      const overIndex = memberList.findIndex((m) => m.id === over.id);
      console.log('activeIndex', activeIndex);
      console.log('overIndex', overIndex);
      if (memberList[activeIndex].columnId != memberList[overIndex].columnId) {
        newMemberList[activeIndex].columnId = newMemberList[overIndex].columnId;
        newMemberList[activeIndex].assignedToProjectId =
          newMemberList[overIndex].assignedToProjectId || '';
      } else if (
        memberList[activeIndex].columnId === memberList[overIndex].columnId
      ) {
        newMemberList[activeIndex].assignedToProjectId =
          newMemberList[overIndex].assignedToProjectId;
      }

      return arrayMove(newMemberList, activeIndex, overIndex);
    });
  }
  // Im dropping a Member over a Column

  if (isActiveAMember && isOverAColumn) {
    setNewMemberList((memberList) => {
      const activeIndex = memberList.findIndex((m) => m.id === activeId);
      memberList[activeIndex].columnId = overId;
      memberList;
      return arrayMove(memberList, activeIndex, activeIndex);
    });
  }

  // Im dropping a Member over a ProjectBox but not over a Column

  if (isActiveAMember && isOverAProjectBox) {
    setNewMemberList((memberList) => {
      const activeIndex = memberList.findIndex((m) => m.id === activeId);
      memberList[activeIndex].assignedToProjectId = over.id;
      newMemberList[activeIndex].columnId = over.data.current?.columnId;
      return arrayMove(memberList, activeIndex, activeIndex);
    });
  }
};
