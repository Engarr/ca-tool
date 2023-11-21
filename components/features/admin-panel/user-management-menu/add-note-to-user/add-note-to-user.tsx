import React, { useState } from 'react';
import { Modal, Textarea, Paper, Button, Center } from '@mantine/core';
import { Id } from '../../types/member-type';
import { useMemberListContext } from '@/context/member-list-context';

type AddNoteToUser = {
  opened: boolean;
  close: () => void;
  memberId: Id;
  note?: string;
  fullName: string;
};

const AddNoteToUser = ({
  opened,
  close,
  memberId,
  note,
  fullName,
}: AddNoteToUser) => {
  const { setNewMemberList } = useMemberListContext();
  const [noteAboutUser, setNoteAboutUser] = useState(note || '');

  const labelText = note
    ? `${'Edytuj notatkę: '}${fullName}`
    : `${'Dodat notatkę: '}${fullName}`;

  const handleNoteChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNoteAboutUser(event.target.value);
  };

  const handleNoteAdd = (event: React.FormEvent) => {
    event.preventDefault();
    setNewMemberList((prev) => {
      return prev.map((user) => {
        if (user.id === memberId) {
          return {
            ...user,
            note: noteAboutUser,
          };
        }
        return user;
      });
    });
    close();
  };

  return (
    <Modal opened={opened} onClose={close} centered>
      <form onSubmit={handleNoteAdd}>
        <Paper py='xl' px='md'>
          <Textarea
            label={labelText}
            placeholder='Wprowadz informację'
            autosize
            variant='filled'
            minRows={3}
            maxRows={4}
            required
            value={noteAboutUser}
            onChange={handleNoteChange}
          />
          <Center>
            <Button variant='filled' size='xs' mt={10} type='submit' fullWidth>
              Dodaj notatkę
            </Button>
          </Center>
        </Paper>
      </form>
    </Modal>
  );
};

export default AddNoteToUser;
