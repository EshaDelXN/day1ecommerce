"use client";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { categories } from "../../data/categories";
import { useCart } from "../../context/CartContext";

export default function ProductPage() {
  const { id } = useParams(); // ✅ params is plain object in client
  const router = useRouter();
  const { addToCart } = useCart();

  const product = categories.flatMap((c) => c.products).find((p) => p.id === id);

  if (!product)
    return <p className="p-10 text-center">Product not found 😢</p>;

  const price = product.price ?? 0;
  const save = product.discount ?? 0;
  const mrp = product.mrp ?? Math.round(price / (1 - save / 100));

  /* when user clicks Buy Now */
  const buyNow = () => {
    addToCart(product);
    router.push("/cart");
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 grid md:grid-cols-2 gap-10">
      {/* image */}
      <div className="relative w-full h-64 sm:h-80 md:h-[30rem] bg-white rounded-lg shadow">
        <Image
          src={product.image}
          alt={product.name}
          fill
          priority
          className="object-contain p-6"
        />
      </div>

      {/* details */}
      <div className="space-y-5">
        <h1 className="text-2xl md:text-3xl font-semibold">{product.name}</h1>
        <p className="text-gray-600">{product.desc}</p>
        {product.about && <p className="text-gray-700">{product.about}</p>}

        <div className="text-yellow-500 text-sm">
          ⭐ {product.rating}{" "}
          <span className="text-gray-500">({product.ratingCount})</span>
        </div>

        <div className="text-3xl font-bold text-green-700">
          ₹{price.toLocaleString()}
          <span className="text-base line-through text-gray-400 ml-3">
            ₹{mrp.toLocaleString()}
          </span>
          {save > 0 && (
            <span className="ml-3 text-red-600 text-lg">-{save}%</span>
          )}
        </div>

        <p className="text-sm text-gray-500">
          FREE delivery tomorrow <br /> Sold by{" "}
          <span className="font-medium">MegaMart</span>
        </p>

        <button
          onClick={buyNow}
          className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 w-full md:w-auto"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}
