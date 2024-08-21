"use client";

import { FaStar } from "react-icons/fa";
import Image from 'next/image';
import girl from "../images/girl1.webp";
import girl2 from "../images/girl2.webp";
import man from "../images/man.webp";
import photo1 from "../images/p-1.avif";
import photo2 from "../images/p-2.avif";
import photo3 from "../images/p-3.avif";
import photo4 from "../images/p-4.avif";
import photo5 from "../images/p-5.avif";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Client() {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(".client-testi", {
      x: 600,
      opacity: 0.2,
      duration: 1.7,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".client-testi",
        scroller: 'body',
        start: "top 50%",
      }
    });
    gsap.from(".client-img", {
      y: 100,
      opacity: 0,
      duration: 0.2,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".client-img",
        scroller: 'body',
        start: "top 50%",
      }
    });
    gsap.from(".feedback", {
      x: 700,
      opacity: 0.2,
      duration: 0.9,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".feedback",
        scroller: 'body',
        start: "top 50%",
      }
    });
    gsap.from(".client-rating", {
      x: 500,
      opacity: 0,
      duration: 1,
      rotateY: 360,
      scaleY: 1,
      scaleX: 1,
      scrollTrigger: {
        trigger: ".client-rating",
        scroller: 'body',
        start: "top 50%",
      }
    });
    gsap.from('.c-card', {
      x: -1200,
      opacity: 0.2,
      duration: 0.8,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".c-card",
        scroller: 'body',
        start: "top 50%",
      }
    });
    gsap.from('.up', {
      y: -50,
      opacity: 0,
      duration: 1,
      rotateX: 360,
      scrollTrigger: {
        trigger: ".up",
        scroller: 'body',
        start: "top 50%",
      }
    });
    gsap.from('.down', {
      y: 50,
      opacity: 0,
      duration: 1,
      rotateX: 360,
      scrollTrigger: {
        trigger: ".down",
        scroller: 'body',
        start: "top 50%",
      }
    });
  }, []);

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12">
      <div className='client-testi text-center'>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mt-20 lg:mt-40 gap-3 mb-5">
          Client <span className="text-orange-600">Testimonial</span>
        </h1>
        <p className='text-gray-700 text-base sm:text-lg'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p className='text-gray-700 text-base sm:text-lg'>
          Minus optio quisquam dicta maxime, perferendis veniam!
        </p>
      </div>

      <div className="mt-4 flex flex-col sm:flex-row justify-center items-center gap-y-4 sm:gap-x-6">
        <div className="flex -space-x-3 cursor-pointer">
          <Image src={photo1} className="client-img h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover" alt="client1" />
          <Image src={photo2} className="client-img h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover" alt="client2" />
          <Image src={photo3} className="client-img h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover" alt="client3" />
          <Image src={photo4} className="client-img h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover" alt="client4" />
          <Image src={photo5} className="client-img h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover" alt="client5" />
        </div>
        <div className="feedback flex flex-col">
          <div className="border-l-2 border-black pl-2">
            <div className="flex items-center">
              <h3 className="text-lg font-semibold mr-2">4.6</h3>
              <FaStar className="client-rating text-yellow-500 text-lg" />
            </div>
            <div>
              <h3 className="text-sm">Rated by 25k on Google</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center h-auto gap-10 mx-4 lg:mx-20 my-10">
      <div className="c-card w-full lg:w-[500px] border cursor-pointer shadow-md hover:shadow-[rgba(0,0,0,0.25)_0px_25px_50px_-12px]">
  <div className="relative h-[200px] w-full">
    <Image
      src={girl}
      alt="Client"
      layout="fill"
      objectFit="cover"
      className="rounded-t"
    />
  </div>
  <div className="p-4">
    <div className="flex justify-between items-center space-x-1">
      <h1 className="text-lg font-semibold">Ayesha</h1>
      <div className="flex gap-1 text-lg">
        <FaStar className="up text-yellow-500" />
        <FaStar className="down text-yellow-500" />
        <FaStar className="up text-yellow-500" />
        <FaStar className="down text-yellow-500" />
        <FaStar className="up text-yellow-500" />
      </div>
    </div>
    <p className="text-lg text-gray-500 pt-4 leading-tight">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem quo aut cum, maxime fuga laborum autem officiis cupiditate quas ipsa reprehenderit, sed asperiores doloremque explicabo adipisci quisquam molestias.
    </p>
  </div>
</div>


        <div className="c-card w-full lg:w-[500px] border cursor-pointer shadow-md hover:shadow-[rgba(0,0,0,0.25)_0px_25px_50px_-12px]">
          <Image
            src={girl2}
            alt="Client"
            className="h-[200px] w-full object-cover"
          />
          <div className="p-4">
            <div className="flex justify-between items-center space-x-1">
              <h1 className="text-lg font-semibold">Liba Jadoon</h1>
              <div className="flex gap-1 text-lg">
                <FaStar className="up text-yellow-500" />
                <FaStar className="down text-yellow-500" />
                <FaStar className="up text-yellow-500" />
                <FaStar className="down text-yellow-500" />
                <FaStar className="up text-yellow-500" />
              </div>
            </div>
            <p className="text-lg text-gray-500 pt-4 leading-tight">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem quo aut cum, maxime fuga laborum autem officiis cupiditate quas ipsa reprehenderit, sed asperiores doloremque explicabo adipisci quisquam molestias.
            </p>
          </div>
        </div>

        <div className="c-card w-full lg:w-[500px] border cursor-pointer shadow-md hover:shadow-[rgba(0,0,0,0.25)_0px_25px_50px_-12px]">
          <Image
            src={man}
            alt="Client"
            className="h-[200px] w-full object-cover"
          />
          <div className="p-4">
            <div className="flex justify-between items-center space-x-1">
              <h1 className="text-lg font-semibold">Ahmed Ali</h1>
              <div className="flex gap-1 text-lg">
                <FaStar className="up text-yellow-500" />
                <FaStar className="down text-yellow-500" />
                <FaStar className="up text-yellow-500" />
                <FaStar className="down text-yellow-500" />
                <FaStar className="up text-yellow-500" />
              </div>
            </div>
            <p className="text-lg text-gray-500 pt-4 leading-tight">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem quo aut cum, maxime fuga laborum autem officiis cupiditate quas ipsa reprehenderit, sed asperiores doloremque explicabo adipisci quisquam molestias.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Client;
