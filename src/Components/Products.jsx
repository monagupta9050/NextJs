"use client"

import Image from "next/image";
import mid1 from "../images/mid1.webp";
import mid2 from "../images/mid2.webp";
import mid3 from "../images/mid3.webp";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function OrderSec() {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {

    


    gsap.from(".intro", {
      x:-600,
      opacity:0.2,
      duration:1.7,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".intro",
        scroller: 'body',
        start: "top 50%",
      }
    })
    gsap.from('.p-card',{
      x:1200,
      opacity:0.4,
      duration:1,
      rotateZ:-360,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".p-card",
        scroller: 'body',
        start: "top 50%",
      }

    })
   
    
  
   
  }, []);
  return (
    <section className="py-16 bg-gray-50">
      <div className="intro text-center mb-20">
        <h1 className="text-4xl  font-extrabold text-gray-900 mb-4">Best Selling <span className="text-orange-600">Coffee</span></h1>
        <p className="text-gray-600 text-lg ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p className="text-gray-600 text-lg">
          Minus optio quisquam dicta maxime, perferendis veniam!
        </p>
      </div>
      <div className="flex flex-col items-center gap-20  lg:flex-wrap lg:flex-row lg:justify-center">
        {[mid1, mid2, mid3].map((image, index) => (
          <div key={index} className="p-card relative bg-white shadow-lg rounded-lg   w-[full] cursor-pointer lg:w-96 hover:shadow-3xl">
            <Image
              src={image}
              alt={`Coffee ${index + 1}`}
              className="absolute top-[-60px] right-4 w-[100px] h-[200px] object-cover "
            />
            <div className=" pt-16 px-6 pb-8">
              <p className="text-sm font-semibold text-gray-400">#1 Selling</p>
              <h2 className="text-2xl font-bold text-gray-800 mt-2 mb-4">Double Espresso</h2>
              <p className="text-gray-500 text-lg mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dicta alias id, nostrum rerum cum ducimus omnis sequi cumque nam.
              </p>
              <div className="flex items-center justify-between">
                <p className="font-semibold text-2xl">$59.99</p>
                <button className="bg-black text-white py-2 px-4 rounded-lg inline-flex items-center transform hover:scale-105 transition-transform duration-200">
                  <span className="bg-white text-black text-lg h-8 w-8 rounded-full flex justify-center items-center mr-2">
                    <i className="ri-shopping-cart-fill text-xl"></i>
                  </span>
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OrderSec;
