import { Text, Group } from '@mantine/core';

import classes from './columnt-title.module.css';
import ProjectColumnActions from '../../projekty/_components/project-column-actions/project-column-actions';
import { Id } from '../../_types/member-type';

type ColumntTitleType = {
  title: string;
  memberCount: number;
  isProjectColumn?: boolean;
  columnId?: Id;
};

const ColumnTitle = ({
  title,
  memberCount,
  isProjectColumn,
  columnId,
}: ColumntTitleType) => {
  return (
    <>
      <Group px={8} align={'center'} justify='space-between'>
        <Group gap={0} justify='center' align='end'>
          <Text fw={600} size='xl' pr={5}>
            {title}
          </Text>
          {isProjectColumn && title !== 'Nie przypisani' && (
            <ProjectColumnActions columnId={columnId} />
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
