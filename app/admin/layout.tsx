import React from 'react';
import AdminNavigation from '@/components/features/admin-panel/admin-navigation/admin-navigation';

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
			<AdminNavigation />
			{children}
		</div>
	);
};

export default Layout;
