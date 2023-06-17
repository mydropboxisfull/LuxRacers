"use client"
import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      question: "Do you ship RC drift cars worldwide? 🌎",
      answer: "Yes, we offer worldwide shipping for our RC drift cars, and the best part is, it's free! Wherever you are located, we'll make sure your RC drift car reaches you without any additional shipping charges."
      },
    {
        question: "What is the warranty coverage for your RC drift cars? 🔎",
        answer: "We offer a comprehensive 1-year full guarantee warranty on all our RC drift cars. This warranty covers any manufacturing defects or malfunctions."
        },
        {
        question: "Are your RC drift cars made in the USA? 🇺🇸",
        answer: "While our RC motor parts are not manufactured in the USA, they are meticulously designed and engineered in San Francisco, California, to ensure the highest quality, performance, and attention to detail."
        },
        {
        question: "How long does shipping take for orders placed on your website? 📦",
        answer: "Our shipping process typically takes as little as 5 days and can take up to 12 days based on demand. We strive to deliver your RC drift car to you as quickly as possible."
        },
        {
        question: "Can the RC drift cars be used both indoors and outdoors? 🏎",
        answer: "Absolutely! Our RC drift cars are versatile and come with a set of tires designed for various terrains. The set includes both rubber tires for indoor surfaces and plastic tires for outdoor tracks, enabling you to enjoy the excitement of drifting wherever you choose to race."
        },
        {
        question: "Do you have a physical store where I can purchase RC drift cars? 📍",
        answer: " No, we used to have a physical store located in San Francisco, California. However, due to the impact of COVID-19, we have closed our physical store. Now, you can conveniently purchase our RC drift cars online through our website."
        },
       
    // Add more questions and answers here
  ];

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className='bg-black px-10 pb-[8rem] pt-[-3rem]'>


    <div className="md:max-w-xl  2xl:max-w-4xl mx-auto mt-[0rem]">
    <div className='flex content-center justify-center'>
    <h1 className='py-[3rem] text-3xl text-white font-bold'>FAQs</h1>
    </div>
      {questions.map((item, index) => (
        <div
          key={index}
          className=" py-3"
        >
          <button
            className="flex items-center justify-between w-full focus:outline-none text-white"
            onClick={() => handleClick(index)}
          >
            <span className="text-lg  max-w-[15rem] text-gray-400 md:max-w-[80%] text-left">
              {item.question}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="white"
              className={`w-6 h-6 transition-transform ${
                index === activeIndex ? 'transform rotate-45' : ''
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
          {index === activeIndex && (
            <div className="mt-3 text-gray-600">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
    </div>
  );
};

export default FAQ;
