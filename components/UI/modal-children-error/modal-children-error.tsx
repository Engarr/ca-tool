import React from 'react';
import { Text } from '@mantine/core';
import { IconExclamationCircle } from '@tabler/icons-react';
import classes from './modal-children-error.module.css';

type ModalChildrenErrorType = {
  errorText: string;
};

const ModalChildrenError = ({ errorText }: ModalChildrenErrorType) => {
  return (
    <div className={classes.errorContainer}>
      <IconExclamationCircle stroke={1.5} className={classes.icon} />
      <Text className={classes.errorText}>{errorText}</Text>
    </div>
  );
};

export default ModalChildrenError;
