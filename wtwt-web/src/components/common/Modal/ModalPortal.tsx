import { createPortal } from 'react-dom';
import type React from 'react';
import { useEffect, useState } from 'react';

interface ModalPortalProps {
  children: React.ReactNode;
}
export const ModalPortal = ({ children }: ModalPortalProps) => {
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const modalRootElement = document.getElementById('modal');
    if (modalRootElement) {
      setModalRoot(modalRootElement);
    }
  }, []);

  if (!modalRoot) {
    return null;
  }

  return createPortal(children, modalRoot);
};
