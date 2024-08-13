import Image from "next/image";
import hero from "../images/hero1.webp";

function HeroSection() {
  return (
    <>
      <section className="bg-gray-200 py-10">
        <div className="  flex  justify-between mx-20">
          <div className="w-[50%] flex justify-center item-center flex-col  mr-8">
            <h1 className="text-8xl font-bold text-black mb-4 ">
              Alowishus Delicious Coffee
            </h1>
            <p className="text-gray-800 text-lg leading-relaxed bg-gray-100 border-l-4 border-red-500 px-4 py-3 rounded-lg shadow-sm mb-10">
              <span className="font-semibold">Lorem ipsum dolor sit amet</span>{" "}
              consectetur adipisicing elit. Quod non iste minus ratione voluptas
              culpa esse magnam distinctio.
            </p>
            <div>
              <button className="bg-black p-4 text-white rounded-lg display:inline-block transform mr-8 hover:scale-105 transition-transform duration-200">
                Download App
              </button>
              <button className="bg-white p-4 text-black rounded-lg display:inline-block transform hover:scale-105 transition-transform duration-200">
                Shop Coffee
              </button>
            </div>
          </div>
          <div className="w-[50%] shadow-[0px_4px_6px_rgba(0,0,0,0.3)] rounded-full hover:scale-95 transition-transform duration-300">
            <Image src={hero} alt="Delicious Coffee" />
          </div>
        </div>
      </section>
      <section className="bg-gray-200 py-10">
        <div className="  flex  justify-between mx-20">
          <div className="w-[50%] flex justify-center item-center flex-col  mr-8">
            <h1 className="text-8xl font-bold text-black mb-4 ">
              Alowishus Delicious Coffee
            </h1>
            <p className="text-gray-800 text-lg leading-relaxed bg-gray-100 border-l-4 border-red-500 px-4 py-3 rounded-lg shadow-sm mb-10">
              <span className="font-semibold">Lorem ipsum dolor sit amet</span>
              consectetur adipisicing elit. Quod non iste minus ratione voluptas
              culpa esse magnam distinctio.
            </p>
            <div>
              <button className="bg-black p-4 text-white rounded-lg display:inline-block transform mr-8 hover:scale-105 transition-transform duration-200">
                Download App
              </button>
              <button className="bg-white p-4 text-black rounded-lg display:inline-block transform hover:scale-105 transition-transform duration-200">
                Shop Coffee
              </button>
            </div>
          </div>
          <div className="w-[50%] shadow-[0px_4px_6px_rgba(0,0,0,0.3)] rounded-full hover:scale-95 transition-transform duration-300">
            <Image src={hero} alt="Delicious Coffee" />
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
