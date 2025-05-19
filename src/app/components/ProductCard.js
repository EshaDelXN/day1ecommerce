import Image from "next/image";

export default function ProductCard({ title, price, save, image }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 text-center hover:shadow-lg transition min-h-[250px]">
      <div className="relative w-24 h-24 sm:w-28 sm:h-28 mx-auto">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain"
        />
      </div>
      <h4 className="mt-3 font-semibold text-sm sm:text-base">{title}</h4>
      <p className="text-sm sm:text-base">{price}</p>
      <p className="text-green-600 text-xs sm:text-sm">{save}</p>
    </div>
  );
}
