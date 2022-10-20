import { useState } from 'react';

const useToggle = (INITIAL_STATE = false) => {
  const [isOpen, setIsOpen] = useState<boolean>(INITIAL_STATE);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen((v) => !v);

  return { isOpen, toggle, close, open };
};

export default useToggle;
