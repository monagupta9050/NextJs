"use client"

import Image from "next/image";
import banner from "../images/coffee-banner.webp";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';


function Banner() {
  gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {

       
    
    
        gsap.from(".b-content", {
          y:100,
          opacity:0,
          duration:1,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: ".b-content",
            scroller: 'body',
            start: "top 50%",
          }

        })
        gsap.from(".b-img", {
            x:270,
            opacity:0,
            duration:1,
            ease: "power1.inOut",
            rotateY:360,
            scrollTrigger: {
                trigger: ".b-img",
                scroller: 'body',
                start: "top 50%",
              }
          })
       
     
        
      
       
      }, []);
    return (

        <section className="py-16 mt-20" style={{backgroundColor: 'rgb(249 250 251)'}}>
 
    
  <div className="flex flex-col-reverse lg:flex-row lg:justify-between  mx-10 ">
                <div className="b-content  w-full flex   lg:flex flex-col justify-center items-center lg:items-start mt-8 lg:mt-0 px-4  ">
                    <h1 className="text-5xl  font-bold text-gray-800 mb-4 leading-tight">
                    <span className="text-orange-600">Instant</span>     Coffee At <br /> Your Home
                    </h1>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic reprehenderit repellat aut molestias est, odit quos voluptatem sint dicta, mollitia minima corporis accusantium optio vero?
                    </p>
                    <div>
                        <button className="bg-black p-4 text-white rounded-lg inline-flex items-center transform hover:scale-105 transition-transform duration-200">
                            <span className="bg-gray-100 text-black text-xl h-7 w-7 rounded-full flex justify-center items-center mr-2">
                                <i className="ri-download-2-line"></i>
                            </span>
                            Download Your App
                        </button>
                    </div>
                </div>
                <div className="relative w-full flex justify-center items-center mt-12 ">
                    <div className="b-img relative w-[300px] h-[600px] flex justify-center items-center ">
                      
                    <Image
    src={banner}
    alt="Coffee"
    objectFit="cover"
    className="absolute bottom-0 left-0 transform rotate-[-15deg] origin-bottom-left"
/>

                        
                        <Image
                            src={banner}
                            alt="Coffee"
                      
                            objectFit="cover"
                            className="absolute  "
                        />
                    </div>
                </div>
            </div>
    





</section>

    )
}

export default Banner;