"use client"
import { useEffect, useState } from 'react';

const CarFlagMobile = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);
  const [imageHeight, setImageHeight] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    const handleResize = () => {
      setContainerHeight(window.innerHeight);
      setImageHeight(document.getElementById('car-image').offsetHeight);
      setIsMobile(window.innerWidth <= 640); // Adjust the breakpoint if needed
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    setContainerHeight(window.innerHeight);
    setImageHeight(document.getElementById('car-image').offsetHeight);
    setIsMobile(window.innerWidth <= 640); // Adjust the breakpoint if needed

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const calculateMaxScroll = () => {
      setMaxScroll(containerHeight - imageHeight);
    };

    calculateMaxScroll();

    window.addEventListener('resize', calculateMaxScroll);

    return () => {
      window.removeEventListener('resize', calculateMaxScroll);
    };
  }, [containerHeight, imageHeight]);

  const centerOffset = (containerHeight - imageHeight) / 2;
  const startScroll = centerOffset * 0.8; // Adjust the value to determine when the scrolling starts
  const redSquarePosition = isMobile ? Math.max(0, scrollPosition - startScroll) : Math.max(0, Math.min(scrollPosition - centerOffset, maxScroll));

  return (
    <div>
      <div className='w-[6rem] bg-black'>
        <div className="h-[60rem] w-full overflow-hidden">
          <div className="relative h-full">
            <img
              id="car-image"
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

export default CarFlagMobile;


//     handleResize();

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   const maxScroll = containerHeight - window.innerHeight;
//   const carImageHeight = 12; // Adjust this value based on the actual height of the car image
//   const centerYPosition = containerHeight / 2 - window.innerHeight / 2 - carImageHeight / 2;
//   const redSquarePosition = Math.min(scrollPosition - centerYPosition, [maxScroll]);

//   return (
//     <div className=''>
//       <div className='w-[6rem]'>
//         <div className="h-screen w-full overflow-y-scroll" ref={containerRef}>
//           <div className="relative h-full">
//             <img
//               src="toycar.png"
//               alt="Red Square"
//               style={{ transform: `translateY(${redSquarePosition}px)` }}
//               className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-12"
//             />
//             <img
//               src="flag.png"
//               alt="Blue Square"
//               className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-12"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CarFlagMobile;
