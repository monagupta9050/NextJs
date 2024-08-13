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


function Client() {
    return (
      <section>
        <div className='text-center'>
          <h1 className="text-5xl font-bold text-black mt-40 gap-3 mb-5">Client Testimonial</h1>
          <p className='text-gray-700 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p className='text-gray-700 text-lg'>Minus optio quisquam dicta maxime, perferendis veniam!</p>
        </div>
        <div className="mt-4 flex justify-center items-center gap-x-6">
  <div className=" flex   -space-x-3 ">
    <Image src={photo1} className="h-12 w-12 rounded-full" />
    <Image src={photo2} className="h-12 w-12 rounded-full" />
    <Image src={photo3} className="h-12 w-12 rounded-full" />
    <Image src={photo4} className="h-12 w-12 rounded-full" />
    <Image src={photo5} className="h-12 w-12 rounded-full" />
  </div>
  <div className="flex flex-col ">
    <div className=" border-l-2 border-black pl-2 sm:pl-8">
    <div className="flex items-center ">
      <h3 className="text-lg font-semibold mr-2">4.6</h3>
      <FaStar className="text-yellow-500 text-lg" />
    </div>
    <div>
      <h3 className="text-sm">Rated by 25k on Google</h3>
    </div>
    </div>  
  </div>
</div>

        <div className="flex justify-center items-center h-screen gap-10 mx-20">
        <div className="w-[500px]  border cursor-pointer shadow-[0px_4px_6px_rgba(0,0,0,0.3)] transform hover:scale-105 transition-transform duration-200">
          <Image
            src={girl}
            alt="Laptop"
            className="h-[200px] w-full  object-cover"
          />
          <div className="p-4">
            <div className="flex  justify-between items-center space-x-1">
              <h1 className="text-lg font-semibold">Ayesha</h1>
              <div className="flex  gap-1 text-lg">
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
              </div>
            </div>
            <p className="text-lg text-gray-500 pt-4 leading-tight">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem quo aut cum, maxime fuga laborum autem officiis cupiditate quas ipsa reprehenderit, sed asperiores doloremque explicabo adipisci quisquam molestias.
            </p>
          </div>
        </div >
        <div className="w-[500px]  border cursor-pointer shadow-[0px_4px_6px_rgba(0,0,0,0.3)] transform hover:scale-105 transition-transform duration-200">
          <Image
            src={girl2}
            alt="Laptop"
            className="h-[200px] w-full object-cover"
          />
          <div className="p-4">
            <div className="flex justify-between items-center space-x-1">
              <h1 className="text-lg font-semibold">Liba jadoon</h1>
              <div className="flex gap-1 text-lg">
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
              </div>
            </div>
            <p className="text-lg text-gray-500 pt-4 leading-tight">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem quo aut cum, maxime fuga laborum autem officiis cupiditate quas ipsa reprehenderit, sed asperiores doloremque explicabo adipisci quisquam molestias.
            </p>
          </div>
        </div>
        <div className="w-[500px]  border cursor-pointer shadow-[0px_4px_6px_rgba(0,0,0,0.3)] transform hover:scale-105 transition-transform duration-200 ">
          <Image
            src={man}
            alt="Laptop"
            className="h-[200px] w-full object-cover"
          />
          <div className="p-4">
            <div className="flex justify-between items-center space-x-1">
              <h1 className="text-lg font-semibold">Ahmed Ali</h1>
              <div className="flex  gap-1 text-lg ">
                <FaStar className="text-yellow-500 " />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
              </div>
            </div>
            <p className="text-lg text-gray-500 pt-4 leading-tight">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem quo aut cum, maxime fuga laborum autem officiis cupiditate quas ipsa reprehenderit, sed asperiores doloremque explicabo adipisci quisquam molestias.
            </p>
          </div>
        </div>
        <div className="w-[500px]  border cursor-pointer shadow-[0px_4px_6px_rgba(0,0,0,0.3)] transform hover:scale-105 transition-transform duration-200">
          <Image
            src={girl}
            alt="Laptop"
            className="h-[200px] w-full  object-cover"
          />
          <div className="p-4">
            <div className="flex  justify-between items-center space-x-1">
              <h1 className="text-lg font-semibold">Ayesha</h1>
              <div className="flex  gap-1 text-lg">
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
              </div>
            </div>
            <p className="text-lg text-gray-500 pt-4 leading-tight">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem quo aut cum, maxime fuga laborum autem officiis cupiditate quas ipsa reprehenderit, sed asperiores doloremque explicabo adipisci quisquam molestias.
            </p>
          </div>
        </div >
        </div>
      </section>
    );
  }
  
  export default Client;
  

