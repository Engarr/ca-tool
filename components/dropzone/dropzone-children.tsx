import React from 'react';
import { Group, Button } from '@mantine/core';
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
		<Group justify='center' mt='md'>
			<p>{fileName}</p>
			<Button
				className={classes.control}
				size='sm'
				radius='md'
				onClick={handleClick}
			>
				Wybierz plik
			</Button>
		</Group>
	);
}

export default DropzoneChildren;
