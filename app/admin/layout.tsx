import React from 'react';
import AdminNavigation from '@/app/admin/_components/admin-navigation/admin-navigation';
import MemberListContextProvider from '@/context/member-list-context';

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<MemberListContextProvider>
			<AdminNavigation />
			{children}
		</MemberListContextProvider>
	);
};

export default Layout;
