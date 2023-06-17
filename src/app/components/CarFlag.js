"use client"
import { useEffect, useState } from 'react';

const CarFlag = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    const handleResize = () => {
      setContainerHeight(window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    setContainerHeight(window.innerHeight);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const maxScroll = containerHeight - 48; // Adjust the value to account for the image size

  const redSquarePosition = Math.min(scrollPosition, maxScroll);

  return (
    <div>


    <div className='w-[6rem] bg-black'>

  
    <div className="h-[60rem] w-full overflow-hidden">
      <div className="relative h-full">
        <img
          src="toycar.png"
          alt="Red Square"
          style={{ transform: `translateY(${redSquarePosition}px)` }}
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-12"
        />
        <img
          src="flag.png"
          alt="Blue Square"
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-12"
        />
      </div>
    </div>
    </div>
    </div>
  );
};

export default CarFlag;
