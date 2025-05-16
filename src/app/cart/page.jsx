"use client";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { items, removeFromCart, clearCart } = useCart();
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);

  if (items.length === 0) {
    return (
      <div className="py-20 text-center space-y-4">
        <h1 className="text-3xl font-semibold">Your cart is empty</h1>
        <Link href="/" className="text-blue-600 hover:underline">
          Go shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      <h1 className="text-3xl font-bold">Shopping Cart</h1>

      {items.map((item) => (
        <div
          key={item.id}
          className="flex items-center gap-4 bg-white p-4 rounded shadow"
        >
          <Image
            src={item.image}
            alt={item.name}
            width={80}
            height={80}
            className="object-contain"
          />
          <div className="flex-1">
            <p className="font-medium">{item.name}</p>
            <p className="text-sm text-gray-500">Qty: {item.qty}</p>
          </div>
          <p className="font-semibold">₹{(item.price * item.qty).toLocaleString()}</p>
          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-600 text-sm hover:underline"
          >
            Remove
          </button>
        </div>
      ))}

      <div className="text-right space-y-4">
        <p className="text-xl font-bold">Total: ₹{total.toLocaleString()}</p>
        <button className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700">
          Proceed to Checkout
        </button>
        <button
          onClick={clearCart}
          className="ml-4 text-sm text-gray-500 hover:underline"
        >
          Clear cart
        </button>
      </div>
    </div>
  );
}
