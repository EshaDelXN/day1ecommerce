"use client";
import Link from "next/link";
import { FaTag, FaBoxOpen, FaUser, FaShoppingCart } from "react-icons/fa";
import { RiLoginBoxFill } from "react-icons/ri";

const Header = () => {
  return (
    <header className="shadow-md py-4">
      <div className="flex justify-between items-center px-3">
      <h1 className="text-3xl font-bold text-blue-600 flex">MegaMart</h1>
        <nav className="flex items-center gap-6 text-black text-md font-medium">
          <Link href="#" className="flex items-center gap-1 hover:text-blue-500">
            <FaTag />
            Deals
          </Link>
          <Link href="#" className="flex items-center gap-1 hover:text-blue-500">
            <FaBoxOpen />
            Orders
          </Link>
          <Link href="/login" className="flex items-center gap-1 hover:text-blue-500">
            <RiLoginBoxFill />
            Login
          </Link>
          <Link href="/signup" className="flex items-center gap-1 hover:text-blue-500">
            <FaUser />
            signup
          </Link>
          <Link href="#" className="flex items-center gap-1 hover:text-blue-500">
            <FaShoppingCart />
            Cart
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
