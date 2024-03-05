import { useEffect } from 'react';
import { allowScroll, preventScroll } from '@component/utils/scroll';

interface usePreventScrollProps {
  isOpen: boolean;
}

export const usePreventScroll = ({ isOpen }: usePreventScrollProps) => {
  useEffect(() => {
    if (isOpen) {
      const prevScrollY = preventScroll();

      return () => {
        allowScroll(prevScrollY);
      };
    }
  }, [isOpen]);
};
