'use client';

import React from 'react';

import MemberListContextProvider from './member-list-context';
import ProjectListContextProvider from './project-list-context';

type AppContextProviderType = {
  children: React.ReactNode;
};

const AppContextProvider = ({ children }: AppContextProviderType) => {
  return (
    <ProjectListContextProvider>
      <MemberListContextProvider>{children}</MemberListContextProvider>
    </ProjectListContextProvider>
  );
};

export default AppContextProvider;
