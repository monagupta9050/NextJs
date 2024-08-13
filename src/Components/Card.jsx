import Image from 'next/image'
import icon1 from "../images/icon1.webp";
import icon2 from "../images/icon2.webp";
import icon3 from "../images/icon3.webp";

function Card() {
  return (
    <section>
      <div className='text-center'>
        <h1 className="text-5xl font-bold text-black mt-40 gap-3 mb-5">Explore Our Alowishus</h1>
        <p className='text-gray-700 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p className='text-gray-700 text-lg'>Minus optio quisquam dicta maxime, perferendis</p>
        <p className='text-gray-700 text-lg'>veniam!</p>
      </div>
      <div className="flex justify-center items-center h-screen gap-10">
        <div className="bg-white shadow-[0px_4px_6px_rgba(0,0,0,0.3)] rounded-lg overflow-hidden w-80 cursor-pointer hover:shadow-[0px_8px_6px_rgba(0,0,0,0.3)]">
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Our Catering</h1>
            <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet dolor consectetur.</p>
          </div>
          <div className="flex justify-center items-center p-3">
            <Image src={icon1} className="w-32 h-32 object-cover" />
          </div>
          <div className="px-6 pb-6 text-center">
            <button className="bg-black p-4 text-white rounded-lg inline-block transform hover:scale-105 transition-transform duration-200">
              Order Catering
            </button>
          </div>
        </div>
        <div className="bg-white shadow-[0px_4px_6px_rgba(0,0,0,0.3)] rounded-lg overflow-hidden w-80 cursor-pointer hover:shadow-[0px_8px_6px_rgba(0,0,0,0.3)]">
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">The Food</h1>
            <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet dolor consectetur.</p>
          </div>
          <div className="flex justify-center items-center p-3">
            <Image src={icon2} className="w-32 h-32 object-cover" />
          </div>
          <div className="px-6 pb-6 text-center">
            <button className="bg-black p-4 text-white rounded-lg inline-block transform hover:scale-105 transition-transform duration-200">
              Food Menu
            </button>
          </div>
        </div>
        <div className="bg-white shadow-[0px_4px_6px_rgba(0,0,0,0.3)] rounded-lg overflow-hidden w-80 cursor-pointer hover:shadow-[0px_8px_6px_rgba(0,0,0,0.3)]">
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">The Gelato</h1>
            <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet dolor consectetur.</p>
          </div>
          <div className="flex justify-center items-center p-3">
            <Image src={icon3} className="w-32 h-32 object-cover" />
          </div>
          <div className="px-6 pb-6 text-center">
            <button className="bg-black p-4 text-white rounded-lg inline-block transform hover:scale-105 transition-transform duration-200">
              Discover More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Card
