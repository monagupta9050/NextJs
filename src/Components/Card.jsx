"use client"
import Image from 'next/image';
import icon1 from "../images/icon1.webp";
import icon2 from "../images/icon2.webp";
import icon3 from "../images/icon3.webp";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


function Card() {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {



    gsap.from(".heading", {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".heading",
        scroller: 'body',
        start: "top 50%",
      }
    })
    gsap.from('.card', {
      x: -1170,
      opacity: 0.8,
      duration: 1.5,
      rotateY: 360,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".card",
        scroller: 'body',
        start: "top 50%",
      }
    })



  }, []);

  return (
    <section className="p-8 bg-gray-100 min-h-screen">
      <div className='heading text-center mb-16'>
        <h1 className="text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
          Explore Our <span className="text-orange-600">Alowishus</span>
        </h1>
        <p className='text-gray-700 text-lg mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p className='text-gray-700 text-lg mb-2'>Minus optio quisquam dicta maxime, perferendis</p>
        <p className='text-gray-700 text-lg'>veniam!</p>
      </div>
      <div className="flex flex-col items-center gap-8  lg:flex-wrap lg:flex-row lg:justify-center">
  {[
    {
      title: "Our Catering",
      description: "Lorem ipsum dolor sit amet dolor consectetur.",
      icon: icon1,
      buttonText: "Order Catering",
      buttonIcon: "ri-bowl-line",
    },
    {
      title: "The Food",
      description: "Lorem ipsum dolor sit amet dolor consectetur.",
      icon: icon2,
      buttonText: "Food Menu",
      buttonIcon: "ri-restaurant-2-fill",
    },
    {
      title: "The Gelato",
      description: "Lorem ipsum dolor sit amet dolor consectetur.",
      icon: icon3,
      buttonText: "Discover More",
      buttonIcon: "ri-file-search-line",
    },
  ].map(({ title, description, icon, buttonText, buttonIcon }) => (
    <div
  key={title}
  className="card bg-white shadow-lg rounded-lg overflow-hidden lg:w-96 sm:w-full md:w-full cursor-pointer hover:shadow-xl transition-shadow duration-300"
>
  <div className="p-6">
    <h1 className="text-3xl font-extrabold text-gray-800 mb-4 relative">
      {title}
      <span className="absolute inset-x-0 -bottom-3 left-0 border-b-4 border-orange-500 transform -translate-y-2"></span>
    </h1>
    <p className="text-gray-600 mb-4">{description}</p>
  </div>
  <div className="flex justify-center items-center p-4 bg-gray-50">
    <Image
      src={icon}
      className="w-32 h-32 object-cover"
      alt={title}
    />
  </div>
  <div className="px-6 pb-6 text-center">
    <button className="bg-black p-4 mt-4 text-white rounded-lg inline-flex items-center transform hover:scale-105 transition-transform duration-200">
      <span className="bg-white text-black text-xl h-8 w-8 rounded-full flex justify-center items-center mr-3">
        <i className={`ri ${buttonIcon}`}></i>
      </span>
      {buttonText}
    </button>
  </div>
</div>

  ))}
</div>

    </section>
  );
}

export default Card;
