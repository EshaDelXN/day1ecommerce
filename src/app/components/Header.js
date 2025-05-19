"use client";
import { useState } from "react";
import Link from "next/link";
import { FaTag, FaBoxOpen, FaUser, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { RiLoginBoxFill } from "react-icons/ri";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { items } = useCart();
  const totalQty = items.reduce((sum, i) => sum + i.qty, 0);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="shadow-md py-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 gap-4">
        
        {/* Logo */}
        <h1 className="text-3xl font-bold text-blue-600 text-center sm:text-left">
          MegaMart
        </h1>

        {/* Hamburger button - only visible on small screens */}
        <button
          className="sm:hidden text-2xl text-blue-600"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Wrap nav + auth in one container for toggling */}
        <div className={`${menuOpen ? "flex flex-col gap-4" : "hidden"} sm:flex sm:flex-row sm:items-center sm:justify-between sm:flex-1`}>
          {/* Middle nav */}
          <nav className="flex flex-wrap justify-center gap-4 sm:flex-1 sm:justify-center sm:gap-6 text-md font-medium">
            <Link href="/deals" className="flex items-center gap-1 hover:text-blue-500">
              <FaTag /> Deals
            </Link>
            <Link href="#" className="flex items-center gap-1 hover:text-blue-500">
              <FaBoxOpen /> Orders
            </Link>
            <Link href="/cart" className="relative flex items-center gap-1 hover:text-blue-500">
              <FaShoppingCart />
              Cart
              {totalQty > 0 && (
                <span className="absolute -top-2 -right-3 text-xs bg-red-600 text-white rounded-full px-1">
                  {totalQty}
                </span>
              )}
            </Link>
          </nav>

          {/* Right auth */}
          <div className="flex justify-center sm:justify-end items-center gap-4 text-md font-medium">
            <Link href="/login" className="flex items-center gap-1 hover:text-blue-500">
              <RiLoginBoxFill /> Login
            </Link>
            <Link href="/signup" className="flex items-center gap-1 hover:text-blue-500">
              <FaUser /> Signup
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
