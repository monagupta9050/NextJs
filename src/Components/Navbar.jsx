"use client"


import gsap from 'gsap';
import 'animate.css';
import Image from "next/image";
import Link from "next/link";
import logo from "../images/logo.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import 'remixicon/fonts/remixicon.css';
import { useGSAP } from '@gsap/react';

function Navbar() {

  

  useGSAP(() => {

    const tl = gsap.timeline();


    tl.from(".logo", {
      y: 40,
      opacity: 0.4,
      duration: 0.8,
      ease: 'power3.out'
    })
    tl.from(".link" ,{
      y:-80,
      opacity:0.2,
      duration:0.5,
      stagger:0.2
    })
    tl.from(".btn-carts" ,{
      y: 20,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    })
    tl.from(".btn-gift" ,{
      x: 300,
      opacity: 0.4,
      duration: 1,
      ease: 'power3.out'
    })

  }, []);

  return (
    <header className="flex justify-between items-center h-[80px] px-10  bg-gray-200 ">

      <div className=" logo flex items-center">
        <Image src={logo} alt="logo" width={100} height={100} />
      </div>


      <nav className="hidden lg:block">
        <ul className=" flex items-center gap-8 text-gray-800 font-medium text-lg " >
          <li className='link'>
            <Link href="#" className="hover:text-orange-600 transition-colors duration-300">Cafe Menu</Link>
          </li>
          <li className='link'>
            <Link href="#" className="hover:text-orange-600 transition-colors duration-300">About Us</Link>
          </li>
          <li className='link'>
            <Link href="#" className="hover:text-orange-600 transition-colors duration-300">Find Us</Link>
          </li>
          <li className='link'>
            <Link href="#" className="hover:text-orange-600 transition-colors duration-300">Alowishus Catering</Link>
          </li>
        </ul>
      </nav>


      <div className="flex items-center space-x-4 hidden lg:flex lg:items-center lg:justify-center">
        <div className=" btn-carts flex items-center justify-center cursor-pointer h-10 w-10 rounded-full bg-white shadow-lg hover:bg-gray-200">
          <FontAwesomeIcon icon={faCartArrowDown} className="block text-gray-700" style={{ fontSize: '20px' }} />
        </div>
        <button className="  btn-gift bg-black p-3 text-white rounded-lg inline-flex items-center hover:bg-gray-800 ">
          <span className="bg-gray-100 text-black text-lg mr-2 h-8 w-8 rounded-full flex justify-center items-center">
            <i className="ri-gift-2-line text-xl"></i>
          </span>
          Buy Gift Vouchers
        </button>
        
      </div>
      <div className="block  lg:hidden text-xl font-bold cursor-pointer" style={{ fontSize: '30px' }}>
          <i className="ri-menu-3-line "></i>
        </div>

    </header>
  );
}

export default Navbar;
