import { useEffect } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Typed from 'typed.js';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useTyped = (element: any, textArray: string[]) => {
  useEffect(() => {
    const typed = new Typed(element.current, {
      strings: [...textArray], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, [element, textArray]);
};

export default useTyped;
