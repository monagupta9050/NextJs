import Image from "next/image";
import mid1 from "../images/mid1.webp";
import mid2 from "../images/mid2.webp";
import mid3 from "../images/mid3.webp";

function OrderSec() {
  return (
    <section className="flex flex-col items-center pt-12 bg-gray-50">
      <div className="text-center ">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Best Selling Coffee</h1>
        <p className="text-gray-600 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p className="text-gray-600 text-lg">Minus optio quisquam dicta maxime, perferendis veniam!</p>
      </div>
      <div className="flex justify-center items-center my-20 gap-10 ">
        <div className=" p-5 relative bg-white shadow-lg rounded-lg overflow-hidden w-[350px] sm:w-[400px] shadow-[0px_4px_6px_rgba(0,0,0,0.3)] hover:shadow-[0px_8px_6px_rgba(0,0,0,0.3)]" >
          <div className="grid grid-col-2 gap-6 items-end">

            <Image
              src={mid1}
              alt="Espresso Image"
              className="absolute top-0 right-0 w-[100px] h-[100px]  object-cover "
            />

            <div>
              <p className="text-sm font-semibold text-gray-400">#1 Selling</p>
              <h1 className="text-2xl font-bold text-gray-800 mt-2">Double  <br/> Espresso</h1>

            </div>

          </div>
          <p className=" text-gray-500 text-lg py-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dicta alias id, nostrum rerum cum ducimus omnis sequi cumque nam.
          </p>



          <div className="flex items-center justify-between p-2">
            <p className=" font-semibold text-2xl">$59.99</p>
            <button className="bg-black p-3 text-white rounded-lg display:inline-block transform hover:scale-105 transition-transform duration-200">
              Order Now
            </button>
          </div>

        </div>
        <div className=" p-5 relative bg-white shadow-lg rounded-lg overflow-hidden w-[350px] sm:w-[400px]shadow-[0px_4px_6px_rgba(0,0,0,0.3)] hover:shadow-[0px_8px_6px_rgba(0,0,0,0.3)]">
          <div className="grid grid-col-2 gap-6 items-end">

            <Image
              src={mid2}
              alt="Espresso Image"
              className="absolute top-0 right-0 w-[100px] h-[100px]  object-cover "
            />

            <div>
              <p className="text-sm font-semibold text-gray-400">#1 Selling</p>
              <h1 className="text-2xl font-bold text-gray-800 mt-2">Double <br/> Espresso</h1>

            </div>

          </div>
          <p className=" text-gray-500 text-lg py-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dicta alias id, nostrum rerum cum ducimus omnis sequi cumque nam.
          </p>



          <div className="flex items-center justify-between p-2">
            <p className=" font-semibold text-2xl">$59.99</p>
            <button className="bg-black p-3 text-white rounded-lg display:inline-block transform hover:scale-105 transition-transform duration-200">
              Order Now
            </button>
          </div>

        </div>
        <div className=" p-5 relative bg-white shadow-lg rounded-lg overflow-hidden w-[350px] sm:w-[400px]shadow-[0px_4px_6px_rgba(0,0,0,0.3)] hover:shadow-[0px_8px_6px_rgba(0,0,0,0.3)]">
          <div className="grid grid-col-2 gap-6 items-end">

            <Image
              src={mid3}
              alt="Espresso Image"
            className="absolute top-0 right-0 w-[100px] h-[100px]  object-cover "
            />

            <div>
              <p className="text-sm font-semibold text-gray-400">#1 Selling</p>
              <h1 className="text-2xl font-bold text-gray-800 mt-2">Double <br/> Espresso</h1>

            </div>

          </div>
          <p className=" text-gray-500 text-lg py-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dicta alias id, nostrum rerum cum ducimus omnis sequi cumque nam.
          </p>



          <div className="flex items-center justify-between p-2">
            <p className=" font-semibold text-2xl">$59.99</p>
            <button className="bg-black p-3 text-white rounded-lg display:inline-block transform hover:scale-105 transition-transform duration-200">
              Order Now
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default OrderSec;
