// source: https://github.com/imbhargav5/rooks/blob/main/src/hooks/useDidUpdate.ts

import { useEffect, useRef } from 'react';

/**
 *  useDidUpdate hook
 *
 *  Fires a callback on component update
 *  Can take in a list of conditions to fire callback when one of the
 *  conditions changes
 *
 * @param {Function} callback The callback to be called on update
 * @param {Array} conditions The list of variables which trigger update when they are changed
 * @returns {undefined}
 */
function useDidUpdate(callback: () => any, conditions?: any[]): void {
  const hasMountedRef = useRef(false);
  if (typeof conditions !== 'undefined' && !Array.isArray(conditions)) {
    conditions = [conditions];
  } else if (Array.isArray(conditions) && conditions.length === 0) {
    console.warn(
      'Using [] as the second argument makes useDidUpdate a noop. The second argument should either be `undefined` or an array of length greater than 0.',
    );
  }
  useEffect(() => {
    if (hasMountedRef.current) {
      callback();
    } else {
      hasMountedRef.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, conditions);

  useEffect(() => {
    return () => {
      hasMountedRef.current = false;
    };
  }, []);
}

export { useDidUpdate };
