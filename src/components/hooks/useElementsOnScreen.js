import { useEffect, useRef, useState } from 'react';

const useElementsOnScreen = (options) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.IsIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (containerRef.current) observer.unobserve(containerRef?.current);
    };
  }, [containerRef, options]);

  return [containerRef, isVisible];
};

// use this options by default
// const options = {
//   root: null,
//   rootMargin: "0px",
//   threshold: 0.5,
// }

export default useElementsOnScreen;
