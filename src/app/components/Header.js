"use client";
import Link from "next/link";
import { FaTag, FaBoxOpen, FaUser, FaShoppingCart } from "react-icons/fa";
import { RiLoginBoxFill } from "react-icons/ri";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { items } = useCart();
  const totalQty = items.reduce((sum, i) => sum + i.qty, 0);

  return (
    <header className="shadow-md py-4">
      <div className="flex items-center justify-between px-3">
        {/* logo */}
        <h1 className="text-3xl font-bold text-blue-600">MegaMart</h1>

        {/* middle nav */}
        <nav className="flex-1 flex justify-center gap-6 text-md font-medium">
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


        {/* right auth  */}
        <div className="flex items-center gap-4 text-md font-medium">
          <Link href="/login" className="flex items-center gap-1 hover:text-blue-500">
            <RiLoginBoxFill /> Login
          </Link>
          <Link href="/signup" className="flex items-center gap-1 hover:text-blue-500">
            <FaUser /> Signup
          </Link>
        </div>
      </div>
    </header>
  );
}
