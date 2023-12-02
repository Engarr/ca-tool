import React, { useEffect, useState } from 'react';
import { Modal, Textarea, Paper, Button, Center } from '@mantine/core';
import { Id } from '../../_types/member-type';
import { useMemberListContext } from '@/context/member-list-context';
import { useProjectListContext } from '@/context/project-list-context';
import classes from './add-note.module.css'

type AddNoteToUserModalType = {
  opened: boolean;
  close: () => void;
  noteForId: Id;
  note?: string;
  noteFor: string;
  type: string;
};

const AddNoteModal = ({
  opened,
  close,
  noteForId,
  note,
  noteFor,
  type,
}: AddNoteToUserModalType) => {
  const { setNewMemberList } = useMemberListContext();
  const { setNewConfirmedProjectList } = useProjectListContext();
  const [newNote, setNoteFor] = useState(note || '');

  const labelText = note
    ? `${'Edytuj notatkę: '}${noteFor}`
    : `${'Dodat notatkę: '}${noteFor}`;

  const handleNoteChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNoteFor(event.target.value);
  };

  const handleNoteAdd = (event: React.FormEvent) => {
    event.preventDefault();
    if (type === 'user') {
      setNewMemberList((prev) => {
        return prev.map((user) => {
          if (user.id === noteForId) {
            return {
              ...user,
              note: newNote,
            };
          }
          return user;
        });
      });
      close();
    } else {
      setNewConfirmedProjectList((prev) => {
        return prev.map((project) => {
          if (project.id === noteForId) {
            return {
              ...project,
              note: newNote,
            };
          }
          return project;
        });
      });
      close();
    }
  };
  useEffect(() => {
    if (opened) {
      setNoteFor(note || '');
    }
  }, [note, opened]);

  return (
    <Modal opened={opened} onClose={close} centered size={'lg'}>
      <form onSubmit={handleNoteAdd}>
        <Paper py='xl' px='md' shadow='xl' mx={50} mb={20} className={classes.noteContainer}>
          <Textarea
            label={labelText}
            placeholder='Wprowadz informację'
            autosize
            variant='filled'
            minRows={3}
            maxRows={4}
            required
            value={newNote}
            onChange={handleNoteChange}
          />
          <Center>
            <Button size='xs' mt={30} type='submit' style={{ width: '50%' }}>
              {note ? 'Edytuj' : 'Dodaj'} notatkę
            </Button>
          </Center>
        </Paper>
      </form>
    </Modal>
  );
};

export default AddNoteModal;
