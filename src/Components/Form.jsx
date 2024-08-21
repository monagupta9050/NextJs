"use client"
import Image from "next/image";
import Link from "next/link";
import logo from "../images/logo.webp";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Form() {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(".logo1", {
      x: -150,
      opacity: 0.2,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: ".logo1",
        scroller: 'body',
      }
    });

    gsap.from(".link1", {
      y: 50,
      opacity: 0,
      duration: 0.5,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".link1",
        scroller: 'body',
      }
    });

    gsap.from(".input", {
      x: 320,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".input",
        scroller: 'body',
      }
    });

    gsap.from('.copyright', {
      y: -20,
      opacity: 0,
      duration: 0.2,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".copyright",
        scroller: 'body',
      }
    });
  }, []);

  return (
    <section className="bg-gray-100">
      <div className="flex flex-col md:flex-row justify-between items-center mx-4 sm:mx-8 py-8">
        <div className="flex flex-col mb-6 md:mb-0 text-center md:text-left">
          <Image src={logo} alt="logo" width={100} height={100} className="logo1 mx-auto md:mx-0"/>
          <ul className="flex flex-wrap justify-center md:justify-start items-center gap-4 mt-4 text-gray-800">
            <li className="link1">
              <Link href="javascript:;" className="hover:text-orange-600 transition-colors">
                Cafe Menu
              </Link>
            </li>
            <li className="link1">
              <Link href="javascript:;" className="hover:text-orange-600 transition-colors">
                About Us
              </Link>
            </li>
            <li className="link1">
              <Link href="javascript:;" className="hover:text-orange-600 transition-colors">
                Find Us
              </Link>
            </li>
            <li className="link1">
              <Link href="javascript:;" className="hover:text-orange-600 transition-colors">
                Alowishus Catering
              </Link>
            </li>
          </ul>
        </div>

        <div className="input text-center mt-6 md:mt-0 w-full md:w-auto">
          <h1 className="text-2xl font-semibold text-gray-900 mb-4">Subscribe to our Newsletter</h1>
          <form className="flex flex-col md:flex-row justify-center items-center">
            <input
              type="email"
              placeholder="username@gmail.com"
              className="border border-gray-300 rounded-lg w-full max-w-md px-4 py-2 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              type="submit"
              className="mt-4 md:mt-0 md:ml-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-300 mt-8"></div>

      <div className="copyright flex justify-center items-center py-4 text-gray-800">
        <p className="text-sm">© 2024 Mona Gupta. All Rights Reserved.</p>
      </div>
    </section>
  );
}

export default Form;
