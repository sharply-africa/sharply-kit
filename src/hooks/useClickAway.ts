import { MutableRefObject, useEffect } from 'react';

const useClickAway: (ref: MutableRefObject<any>, callback: any) => void = (
  ref,
  callback,
) => {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);
};

export default useClickAway;
