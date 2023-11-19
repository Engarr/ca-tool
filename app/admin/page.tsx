import React from 'react';
import dynamic from 'next/dynamic';

const KanbanBoard = dynamic(
  () =>
    import('../../components/features/admin-panel/kanban-board/kanban-board'),
  {
    ssr: false,
  }
);

const Page = () => {
  return (
    <div>
      <KanbanBoard />
    </div>
  );
};

export default Page;
