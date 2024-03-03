import React from 'react';
import { ModalPortal } from '@component/components/common/Modal/ModalPortal';
import { BackDrop } from '@component/components/common/Modal/BackDrop';
interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  closeModal: () => void;
}

export const Modal = ({ children, isOpen, closeModal }: ModalProps) => {
  const closeHandler = (e: React.MouseEvent<HTMLElement>) => {
    closeModal();
  };

  return (
    <ModalPortal>
      {isOpen && (
        <div className="flex h-full w-full">
          <BackDrop closeModal={closeHandler}>
            <div
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              {children}
            </div>
          </BackDrop>
        </div>
      )}
    </ModalPortal>
  );
};
