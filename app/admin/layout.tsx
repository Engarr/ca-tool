import React from 'react';
import AdminNavigation from '@/app/admin/_components/admin-navigation/admin-navigation';

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
			<AdminNavigation />
			{children}
		</div>
	);
};

export default Layout;
