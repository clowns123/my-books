import { useState, useEffect } from 'react';

const useWindowWidth = () => {
  const resize = () => {
    window.addEventListener('resize', () => {
      setWitdh(window.innerWidth);
    });
  };

  const [width, setWitdh] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return width;
};

export default useWindowWidth;
