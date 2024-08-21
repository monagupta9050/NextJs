"use client";

import Image from "next/image";
import hero from "../images/hero1.webp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

function HeroSection() {
  useGSAP(() => {
    gsap.from(".content", {
      x: -300,
      opacity: 0.2,
      duration: 1,
      ease: "power1.inOut",
    });
    gsap.from(".hero-img", {
      x: 700,
      opacity: 0.4,
      duration: 1,
      rotate: 360,
      ease: "power3.out",
    });
  }, []);

  return (
    <Swiper
      effect={"flip"}
      grabCursor={true}
      pagination={true}
      modules={[EffectFlip, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <section className="w-full bg-gray-200 py-10">
          <div className="mx-20 flex flex-col-reverse lg:flex-row lg:justify-between">
            <div className="content mr-8 mt-10 lg:w-1/2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-black mb-4">
                <span className="text-orange-600">Alowishus</span> Delicious Coffee
              </h1>
              <p className="text-gray-800 text-lg leading-tight mb-10">
                <span className="font-semibold">Lorem ipsum dolor sit amet</span>{" "}
                consectetur adipisicing elit. Quod non iste minus ratione voluptas
                culpa esse magnam distinctio.
              </p>
              <div className="flex space-x-4">
                <button className="bg-black p-4 text-white rounded-lg inline-flex items-center transform hover:scale-105 transition-transform duration-200">
                  <span className="bg-gray-100 text-black text-xl h-7 w-7 rounded-full flex justify-center items-center mr-2">
                    <i className="ri-download-2-line"></i>
                  </span>
                  Download App
                </button>

                <button className="bg-white p-4 text-black rounded-lg inline-flex items-center transform hover:scale-105 transition-transform duration-200">
                  <span className="text-black text-xl h-7 w-7 rounded-full flex justify-center items-center mr-2">
                    <i className="ri-store-3-line"></i>
                  </span>
                  Shop Coffee
                </button>
              </div>
            </div>
            <div className="hero-img shadow-[0px_4px_6px_rgba(0,0,0,0.3)] lg:w-1/2 lg:rounded-full flex justify-center items-center">
              <Image src={hero} alt="Delicious Coffee" className="w-full rounded-full" />
            </div>
          </div>
        </section>
      </SwiperSlide>

      <SwiperSlide>
        <section className="w-full bg-gray-200 py-10">
          <div className="mx-20 flex flex-col-reverse lg:flex-row lg:justify-between ">
            <div className="content mr-8 mt-10 lg:w-1/2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-black mb-4">
                <span className="text-orange-600">Alowishus</span> Delicious Coffee
              </h1>

              <p className="text-gray-800 text-lg leading-tight mb-10">
                <span className="font-semibold">Lorem ipsum dolor sit amet</span>{" "}
                consectetur adipisicing elit. Quod non iste minus ratione voluptas
                culpa esse magnam distinctio.
              </p>
              <div className="flex space-x-4">
                <button className="bg-black p-4 text-white rounded-lg inline-flex items-center transform hover:scale-105 transition-transform duration-200">
                  <span className="bg-gray-100 text-black text-xl h-7 w-7 rounded-full flex justify-center items-center mr-2">
                    <i className="ri-download-2-line"></i>
                  </span>
                  Download App
                </button>

                <button className="bg-white p-4 text-black rounded-lg inline-flex items-center transform hover:scale-105 transition-transform duration-200">
                  <span className="text-black text-xl h-7 w-7 rounded-full flex justify-center items-center mr-2">
                    <i className="ri-store-3-line"></i>
                  </span>
                  Shop Coffee
                </button>
              </div>
            </div>
            <div className="hero-img shadow-[0px_4px_6px_rgba(0,0,0,0.3)] lg:w-1/2 lg:rounded-full flex justify-center items-center">
              <Image src={hero} alt="Delicious Coffee" className="w-full rounded-full" />
            </div>
          </div>
        </section>
      </SwiperSlide>
    </Swiper>
  );
}

export default HeroSection;
