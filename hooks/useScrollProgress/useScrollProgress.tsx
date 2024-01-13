import { useEffect, useState } from 'react';

export const useScrollProgress = () => {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const updateScrollCopmpletion = () => {
      const currentProgress: number = window.scrollY;
      const scrollHeight: number = document.body.scrollHeight - window.innerHeight;

      if (scrollHeight) {
        setCompletion(Number((currentProgress / scrollHeight).toFixed(2)) * 100);
      }
    };

    //event
    window.addEventListener('scroll', updateScrollCopmpletion);
    //clear event
    return () => window.removeEventListener('scroll', updateScrollCopmpletion);
  }, []);

  return completion;
};
