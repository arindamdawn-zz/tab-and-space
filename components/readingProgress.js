import { useState, useEffect } from 'react';

const ReadingProgress = ({...args }) => {
  const [readingProgress, setReadingProgress] = useState(0);
  const scrollListener = () => {
    const scrollTop = document.scrollingElement.scrollTop;
    const clientHeight = document.scrollingElement.clientHeight;
    const elHeight = document.scrollingElement.scrollHeight;
    const height = elHeight - clientHeight;
    const percentage = (scrollTop / height) * 100;
    setReadingProgress(percentage);
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollListener);
    return () => window.removeEventListener('scroll', scrollListener);
  });

  return (
    <progress
      max="100"
      value={readingProgress}
      {...args}
      className="w-full h-1 reading-progress"
      style={{ position: 'relative', top: '-2px'}}
    ></progress>
  );
};

export default ReadingProgress;
