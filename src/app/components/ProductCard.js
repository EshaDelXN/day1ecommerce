// src/components/ProductCard.js
import Image from "next/image";

export default function ProductCard({ title, price, save, image }) {
  return (
    <div className="bg-white rounded shadow p-4 text-center">
      <Image src={image} alt={title} width={100} height={100} className="mx-auto" />
      <h4 className="mt-2 font-semibold">{title}</h4>
      <p>{price}</p>
      <p className="text-green-600">{save}</p>
    </div>
  );
}
