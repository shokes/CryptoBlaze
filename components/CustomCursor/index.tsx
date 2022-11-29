import { useState, useCallback, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

export const CustomCursor = () => {
  const controls = useAnimation();
  const [cursorHasMoved, setCursorHasMoved] = useState(false);

  const CUSTOM_CURSOR_RADIUS = 33;

  const trailMouse = ({ clientX, clientY }: MouseEvent) => {
    controls.start({
      x: clientX - CUSTOM_CURSOR_RADIUS,
      y: clientY - CUSTOM_CURSOR_RADIUS,
      transition: {
        ease: 'backOut',
        duration: cursorHasMoved ? 0.7 : 0,
      },
    });

    if (!cursorHasMoved) {
      setCursorHasMoved(true);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleMouseMove = useCallback(trailMouse, [cursorHasMoved]);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, false);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove, false);
    };
  }, [handleMouseMove]);

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[1000] h-full w-full overflow-hidden ${
        cursorHasMoved ? 'visible' : 'invisible'
      }`}
    >
      <motion.div
        animate={controls}
        className='absolute z-[200] h-[70px] w-[70px] -translate-x-1/2 -translate-y-1/2 rounded-full cursor-styling  '
      ></motion.div>
    </div>
  );
};
