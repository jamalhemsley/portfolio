import { useEffect, useState } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

const useResizeObserverWidth = ({ ref }) => {
  const [width, setWidth] = useState({
    width: 0,
  });

  const handleResize = (entries) => setWidth(entries[0].contentRect.width);

  const [resizeObs] = useState(() =>
    typeof window !== 'undefined' ? new ResizeObserver(handleResize) : undefined
  );

  useEffect(() => {
    if (!resizeObs) return false;

    if (ref.current) resizeObs.observe(ref.current);

    return () => resizeObs.disconnect();
  }, [ref, resizeObs]);

  return width;
};

export default useResizeObserverWidth;
