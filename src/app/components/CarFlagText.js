import React from 'react'
import CarFlag from './CarFlag';
import CarFlagMobile from './CarFlagMobile';


const CarFlagText = () => {
    const data = [
        {
          title: 'Extended Drift Time',
          subtitle: '40m battery life',
          icon: 'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z',
        },
        {
          title: 'High-Speed Fun',
          subtitle: 'Top speed 9.5mph',
          icon: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z',
        },
        {
          title: 'Stellar Performance',
          subtitle: 'Sturdy frame & suspension',
          icon: 'M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495',
        },
        {
          title: 'Impressive Range',
          subtitle: '80 meters (length of a soccer field)',
          icon: 'M9.348 14.651a3.75 3.75 0 010-5.303m5.304 0a3.75 3.75 0 010 5.303m-7.425 2.122a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.789m13.788 0c3.808 3.808 3.808 9.981 0 13.79M12 12h.008v.007H12V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z',
        },
        {
          title: 'Durable',
          subtitle: 'Designed for indoor + outdoor use',
          icon: 'M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z',
        },
      ];
    
      return (
        <div className='w-screen mt-[-9rem] xl:p-[10%] bg-black'>

<div className='flex content-center justify-center'>

        <div className='flex items-center justify-center max-w-[100%]'>
  

          
      

        <div className="flex flex-grid grid-cols-2 xl:grid-cols-3 items-center h-full">

        <div className='hidden xl:flex'>
        <div className='flex content-center justify-center'>
        <img className='p-[25%]' src='remote.png' />

        </div>

        </div>

        <div className='hidden md:flex pr-10'>
        <CarFlag/>

        </div>

        <div className='md:hidden pr-10'>
        <CarFlagMobile/>

        </div>

        <div className='w-[70%]'>


          {data.map((item, index) => (
            <div key={index} className="flex items-center space-x-2 py-12 pr-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                stroke="#B53219"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={item.icon}
                />
              </svg>
              <div>
                <h2 className="text-white glow-blue text-xl">{item.title}</h2>
                <p className="text-[#808080]">{item.subtitle}</p>
              </div>
            </div>
            
          ))}
        </div>
        </div>


        </div>

        </div>





        </div>
      );
    };

export default CarFlagText;