"use client"

import Image from 'next/image'
import Banner from './components/Banner'
import GifBannerMobile from './components/GifBannerMobile'
import CarFlag from './components/CarFlag'
import CarFlagText from './components/CarFlagText'
import Nav from './components/Nav'
import Hook from './components/Hook'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import React, { useState, useEffect } from 'react';

export default function Home() {

  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsScrolled(currentScrollPos >= 300 && currentScrollPos > prevScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);


  
  return (
    <main className="">
    <div className=''>
    <Nav/>


    <div
      className={`announcement bg-[#cee9ff] border-t-4 border-teal-500 rounded-b text-[#1e5481] px-4 py-3 shadow-md mt-[3.8rem] fixed w-screen z-40 ${
        isScrolled ? '-translate-y-full transition-transform' : 'translate-y-0 transition-transform'
      }`}
      role="alert"
    >
      <div className="flex">
        <div className="py-1">
          <svg
            className="fill-current h-6 w-6 text-[#1e5481] mr-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
          </svg>
        </div>
 <div>
          <p className="font-bold mt-1">FREE WORLDWIDE SHIPPING 📦 FATHERS DAY WEEKEND</p>
          <p className="text-sm"></p>
        </div>
      </div>
    </div>




    <Banner/>
    </div>

    <GifBannerMobile/>
÷
    <CarFlagText/>
    {/* <CarFlag/> */}




{/* <div className='bg-green-400 w-screen h-[50rem]'>

</div> */}

<Hook/>
<FAQ/>
<Footer/>




    </main>
  )
}
