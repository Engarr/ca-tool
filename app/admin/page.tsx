import dynamic from 'next/dynamic';

import React from 'react';

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
