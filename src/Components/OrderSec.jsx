import Image from "next/image";
import coffee from "../images/coffee-mid.webp";

function OrderSec() {
    return (

        <section className=" py-16" style={{backgroundColor: 'rgb(249 250 251)'}}>
  <div className=" flex  justify-between item-center mx-20">
    <div className="w-[50%] shadow-[0px_4px_6px_rgba(0,0,0,0.3)] rounded-full hover:scale-95 transition-transform duration-300">
      <Image src={coffee} alt="Coffee"  />
    </div>
    <div className="w-[40%] flex justify-center item-center flex-col">
      <h1 className="text-5xl font-bold text-gray-800 mb-4 leading-tight">Order Your <br/> Favourite Coffee</h1>
      <p className="text-gray-700 mb-6 leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic reprehenderit repellat aut molestias est, odit quos voluptatem sint dicta, mollitia minima corporis accusantium optio vero?
      </p>
      <div>
        <button className="bg-black py-3 px-8 text-white rounded-lg inline-block transform hover:scale-105 transition-transform duration-200">
          Order Now
        </button>
      </div>
    </div>
  </div>
</section>

    )
}

export default OrderSec;