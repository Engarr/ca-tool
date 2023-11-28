import React from 'react';
import AdminNavigation from '@/app/admin/_components/admin-navigation/admin-navigation';
import AppContextProvider from '@/context/app-context-provider';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppContextProvider>
      <AdminNavigation />
      {children}
    </AppContextProvider>
  );
};

export default Layout;
