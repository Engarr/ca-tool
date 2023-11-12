import React from 'react';
import { Button, Flex } from '@mantine/core';
import classes from './dropzone-children.module.css';

type DropzoneChildrenProps = {
  openRef: React.RefObject<() => void>;
  fileName: string;
};

function DropzoneChildren({ openRef, fileName }: DropzoneChildrenProps) {
  const handleClick = () => {
    if (openRef.current) {
      openRef.current();
    }
  };
  return (
    <Flex
      justify='center'
      mt='md'
      direction={{ base: 'column', sm: 'row' }}
      align={'center'}>
      <p className={classes.text}>{fileName}</p>
      <Button
        className={classes.control}
        size='sm'
        radius='md'
        onClick={handleClick}>
        Wybierz plik
      </Button>
    </Flex>
  );
}

export default DropzoneChildren;
