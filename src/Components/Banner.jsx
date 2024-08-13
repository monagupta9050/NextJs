import Image from "next/image";
import banner from "../images/coffee-banner.webp";

function Banner() {
    return (

        <section className=" py-16 mt-20" style={{backgroundColor: 'rgb(249 250 251)'}}>
  <div className=" flex  justify-between item-center mx-60">
    
    <div className="w-[50%] flex justify-center item-center flex-col">
      <h1 className="text-5xl font-bold text-gray-800 mb-4 leading-tight">Instant Coffee At <br/> Your Home</h1>
      <p className="text-gray-700 mb-6 leading-relaxed ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic reprehenderit repellat aut molestias est, odit quos voluptatem sint dicta, mollitia minima corporis accusantium optio vero?
      </p>
      <div>
        <button className="bg-black py-3 px-8 text-white rounded-lg inline-block transform hover:scale-105 transition-transform duration-200">
          Download Your App
        </button>
      </div>
    </div>
    <div className=" shadow-[0px_4px_6px_rgba(0,0,0,0.3)]  hover:scale-95 transition-transform duration-300">
      <Image src={banner} alt="Coffee"  />
    </div>




  </div>
</section>

    )
}

export default Banner;