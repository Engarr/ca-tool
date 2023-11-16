'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import React from 'react';

type TanStackProviderType = {
	children: React.ReactNode;
};
const queryClient = new QueryClient();

const TanStackProvider = ({ children }: TanStackProviderType) => {
	return (
		<QueryClientProvider client={queryClient}>
			{children}
		</QueryClientProvider>
	);
};

export default TanStackProvider;
