'use client';
import React from 'react';
import { useSearchParams } from 'next/navigation';

const QualificationTest = () => {
	const searchParams = useSearchParams();
	const testId = searchParams.get('testId');
	const userId = searchParams.get('userId');
	return (
		<div>
			<p>{testId}</p>
			<p>{userId}</p>
		</div>
	);
};

export default QualificationTest;
