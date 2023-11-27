import { Group, Text } from '@mantine/core';
import classes from './columnt-title.module.css';

type ColumntTitleType = {
  title: string;
  memberCount: number;
};

const ColumnTitle = ({ title, memberCount }: ColumntTitleType) => {
  return (
    <>
      <Group px={8} align={'center'} justify='space-between' >
        <Text fw={600} size='xl'>
          {title}
        </Text>
        <Text className={classes.memberCount} size='lg' fw={600}>
          {memberCount}
        </Text>
      </Group>
    </>
  );
};

export default ColumnTitle;
