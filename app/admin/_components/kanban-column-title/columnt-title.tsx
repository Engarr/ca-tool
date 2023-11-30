import { Text, Group } from '@mantine/core';

import classes from './columnt-title.module.css';
import { Id } from '../../_types/member-type';
import ProjectManagementMenu from '../../projekty/_components/project-management-menu/project-management-menu';

type ColumntTitleType = {
  title: string;
  memberCount: number;
  isProjectColumn?: boolean;
  columnProjectId?: Id;
};

const ColumnTitle = ({
  title,
  memberCount,
  isProjectColumn,
  columnProjectId,
}: ColumntTitleType) => {
  return (
    <>
      <Group px={8} align={'center'} justify='space-between'>
        <Group gap={0} justify='center' align='end'>
          <Text fw={600} size='xl' pr={5}>
            {title}
          </Text>
          {isProjectColumn && title !== 'Nie przypisani' && (
            <ProjectManagementMenu
              memberCount={memberCount}
              projectTitle={title}
              columnProjectId={columnProjectId}
            />
          )}
        </Group>
        <Text className={classes.memberCount} size='lg' fw={600}>
          {memberCount}
        </Text>
      </Group>
    </>
  );
};

export default ColumnTitle;
