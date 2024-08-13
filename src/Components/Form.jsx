import Image from "next/image";
import Link from "next/link";
import logo from "../images/logo.webp";


function Form() {
    return (
        <section className="p-5 pb-0" style={{ backgroundColor: 'rgb(249 250 251)' }}>
        <div className="flex justify-between items-center mx-10">
          <div className="flex flex-col">
            <div>
              <Image src={logo} alt="logo" width={100} height={100} />
            </div>
            <ul className="flex items-center gap-10 text-black-800 mt-5">
              <li>
                <Link href="javascript:;">Cafe Menu</Link>
              </li>
              <li>
                <Link href="javascript:;">About Us</Link>
              </li>
              <li>
                <Link href="javascript:;">Find Us</Link>
              </li>
              <li>
                <Link href="javascript:;">Alowishus Catering</Link>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="mb-4 font-medium text-xl text-gray-900">Subscribe to our Newsletter</h1>
            <form className="mt-4">
              <input
                type="email"
                placeholder="username@gmail.com"
                className="border rounded w-full px-4 py-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </form>
          </div>
        </div>
      
      
        <div className="border-t border-gray-300 mt-10"></div>
      
        <div className="flex justify-center items-center py-3 mb-0 text-gray-800">
          <p>© Copyright 2024 Mona Gupta. All Rights Reserved.</p>
        </div>
      </section>
      
    );
}

export default Form;
