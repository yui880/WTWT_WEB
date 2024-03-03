import { useState } from 'react';
import { Modal } from '@component/components/common/Modal/Modal';

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return { Modal, isOpen, openModal, closeModal };
};
