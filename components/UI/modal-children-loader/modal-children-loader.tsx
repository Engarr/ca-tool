import React from 'react';
import { Loader, Text } from '@mantine/core';
import classes from './modal-children-loader.module.css';

type ModalChildrenLoaderType = {
  loaderText: string;
};

const ModalChildrenLoader = ({ loaderText }: ModalChildrenLoaderType) => {
  return (
    <div className={classes.loaderContainer}>
      <Loader color='indigo' size={'xl'} />
      <Text className={classes.loaderText}>{loaderText}</Text>
    </div>
  );
};

export default ModalChildrenLoader;
