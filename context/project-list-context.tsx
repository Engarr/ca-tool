'use client';
import { confirmedProjectList } from '@/app/admin/_lib/tempMember';
import { ProjectType } from '@/app/admin/_types/project-type';

import { ReactNode, useState, createContext, useContext } from 'react';

type ProjectListContextProviderProps = {
  children: ReactNode;
};
type ProjectListContextType = {
  newConfirmedProjectList: ProjectType[];
  setNewConfirmedProjectList: React.Dispatch<
    React.SetStateAction<ProjectType[]>
  >;
};

const ProjectListContext = createContext<ProjectListContextType | null>(null);

const ProjectListContextProvider = ({
  children,
}: ProjectListContextProviderProps) => {
  const [newConfirmedProjectList, setNewConfirmedProjectList] =
    useState(confirmedProjectList);

  return (
    <ProjectListContext.Provider
      value={{
        newConfirmedProjectList,
        setNewConfirmedProjectList,
      }}>
      {children}
    </ProjectListContext.Provider>
  );
};
export const useProjectListContext = (): ProjectListContextType => {
  const context = useContext(ProjectListContext);
  if (!context) {
    throw new Error('useMemberListContext must be use in MemberProvider');
  }
  return context;
};

export default ProjectListContextProvider;
