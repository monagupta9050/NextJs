import Image from "next/image";
import Link from "next/link";
import logo from "../images/logo.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';


function Navbar() {
  return (
    <header className="flex justify-between items-center  h-[75px] px-20" style={{ backgroundColor: '#e5e7eb' }}>
      <div>
      
      <Image src={logo} alt="logo" width={100} height={100}/>
      </div>
      <ul className="flex items-center gap-10 text-black-800 ">
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
      <div className="flex items-center space-x-5">
  <div className="flex justify-center items-center cursor-pointer h-[33px] w-[33px] rounded-full bg-white shadow-[0px_4px_6px_rgba(0,0,0,0.3)] hover:bg-gray-100 transform hover:scale-105 transition-transform duration-200">
    <FontAwesomeIcon icon={faCartArrowDown} className="text-black" style={{ fontSize: '16px' }} />
  </div>
  <button className="bg-black p-3 text-white rounded-lg display:inline-block transform hover:scale-105 transition-transform duration-200">
    Buy Gift Vouchers
  </button>
</div>

    </header>
  );
}

export default Navbar;
