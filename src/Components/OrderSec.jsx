"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import coffee from "../images/coffee-mid.webp";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function OrderSec() {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(".img", {
      y: 50,
      opacity: 0.5,
      duration: 0.8,
      ease: "power1.inOut",
      rotateX: 360,
      scrollTrigger: {
        trigger: ".img",
        scroller: "body",
        start: "top 50%",
      },
    });
    gsap.from(".order-content", {
      x: 300,
      opacity: 0.2,
      duration: 1.2,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".order-content",
        scroller: "body",
        start: "top 50%",
      },
    });
  }, []);

  return (
    <section className="py-16 bg-gray-100">
      <div className="flex flex-col lg:flex-row lg:justify-between items-center mx-6 gap-8 lg:gap-16">
        <div className="img w-full shadow-lg rounded-full overflow-hidden cursor-pointer">
          <Image
            src={coffee}
            alt="Coffee"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="order-content w-full lg:flex flex-col justify-center items-center lg:items-start mt-8 lg:mt-0 px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4 leading-tight text-center lg:text-left">
            Order Your <br />
            <span className="text-orange-600">Favourite</span> Coffee
          </h1>
          <p className="text-gray-700 mb-6 leading-relaxed text-center lg:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            reprehenderit repellat aut molestias est, odit quos voluptatem sint
            dicta, mollitia minima corporis accusantium optio vero?
          </p>
          <div className="flex justify-center lg:justify-start">
            <button className="bg-black p-4 text-white rounded-lg inline-flex items-center transform hover:scale-105 transition-transform duration-200">
              <span className="bg-white text-black text-xl h-8 w-8 rounded-full flex justify-center items-center mr-2">
                <i className="ri-shopping-cart-fill text-lg"></i>
              </span>
              Order Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OrderSec;
