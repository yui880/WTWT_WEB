import React from 'react';
import { ModalPortal } from '@component/components/common/Modal/ModalPortal';
import { BackDrop } from '@component/components/common/Modal/BackDrop';

interface ModalProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  closeModal: () => void;
}

export const Modal = ({ children, className, isOpen, closeModal }: ModalProps) => {
  const closeHandler = (e: React.MouseEvent<HTMLElement>) => {
    closeModal();
  };

  return (
    <ModalPortal>
      {isOpen && (
        <div className="flex h-full w-full">
          <BackDrop className={className} closeModal={closeHandler}>
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
