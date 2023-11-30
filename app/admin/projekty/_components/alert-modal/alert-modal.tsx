import React from 'react';
import { Button, Center, Flex, Modal, Text } from '@mantine/core';

type AlertModalType = {
  closeModal: () => void;
  opened: boolean;

  modalConfig: {
    type: string;
    message: string;
  };
  onDelete: () => void;
};
const AlertModal = ({
  opened,
  closeModal,
  modalConfig,

  onDelete,
}: AlertModalType) => {
  const { message, type } = modalConfig;

  return (
    <Modal opened={opened} onClose={closeModal} centered>
      <Flex justify={'center'} align={'center'} direction={'column'}>
        <Center>
          <Text style={{ textAlign: 'center' }} mb={10} fw={500}>
            {message}
          </Text>
        </Center>
        {type !== 'confirm' ? (
          <Button mt={10} onClick={closeModal}>
            Ok
          </Button>
        ) : (
          <Flex
            direction={'row'}
            justify={'center'}
            align={'center'}
            style={{ width: '40%' }}
            my={10}
            p={10}>
            <Button
              mr={20}
              onClick={() => {
                onDelete(), closeModal();
              }}>
              Usuń
            </Button>
            <Button
              onClick={() => {
                closeModal();
              }}>
              Anuluj
            </Button>
          </Flex>
        )}
      </Flex>
    </Modal>
  );
};

export default AlertModal;
