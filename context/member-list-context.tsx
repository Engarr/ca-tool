'use client';
import { memberList } from '@/app/admin/_lib/tempMember';
import { MemberType } from '@/app/admin/_types/member-type';
import { ReactNode, useState, createContext, useContext } from 'react';

type MemberListContextProviderProps = {
  children: ReactNode;
};
type MemberListContextType = {
  newMemberList: MemberType[];
  setNewMemberList: React.Dispatch<React.SetStateAction<MemberType[]>>;
};

const MemberListContext = createContext<MemberListContextType | null>(null);

const MemberListContextProvider = ({
  children,
}: MemberListContextProviderProps) => {
  const [newMemberList, setNewMemberList] = useState(memberList);

  return (
    <MemberListContext.Provider
      value={{
        newMemberList,
        setNewMemberList,
      }}>
      {children}
    </MemberListContext.Provider>
  );
};
export const useMemberListContext = (): MemberListContextType => {
  const context = useContext(MemberListContext);
  if (!context) {
    throw new Error('useMemberListContext must be use in MemberProvider');
  }
  return context;
};

export default MemberListContextProvider;
