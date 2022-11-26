import { useRef } from 'react';
import { useOnScroll } from '../../hooks/useOnScroll';

const Progressbar = () => {
  const progressBarRef = useRef<HTMLDivElement>(null);

  interface ITransformScrollbar {
    scroll: number;
    limit: number;
  }

  const animateProgressBar = ({ scroll, limit }: ITransformScrollbar) => {
    if (limit === 0) {
      progressBarRef.current!.style.transform = 'scaleY(0)';
    }

    const progress = scroll / limit;
    progressBarRef.current!.style.transform = `scaleY(${progress})`;
  };

  useOnScroll(animateProgressBar);

  return (
    <div className={'fixed right-0 top-0 bottom-0 z-50 h-full '}>
      <div
        ref={progressBarRef}
        className='relative h-full w-[5px] origin-top scale-x-0 bg-blue'
      />
    </div>
  );
};

export default Progressbar;
