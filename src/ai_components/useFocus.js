import { useRef, useEffect } from 'react';

/**
 * Custom hook to automatically focus a DOM element when the component mounts.
 * Returns a ref that should be attached to the element you want to focus.
 */
export function useFocus() {
  const htmlElRef = useRef(null);

  useEffect(() => {
    if (htmlElRef.current) {
      htmlElRef.current.focus();
    }
  }, []);

  return htmlElRef;
}
