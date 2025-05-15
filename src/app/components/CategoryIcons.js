import Image from "next/image";

const categories = [
  { name: "Mobile", icon: "/images/mobile.jpg" },
  { name: "Cameras", icon: "/images/camera.jfif" },
  { name: "Electronics", icon: "/images/electronics.jpg" },
  { name: "Furniture", icon: "/images/furniture.jpg" },
  { name: "Watches", icon: "/images/watches.jpg" },
  { name: "Decor", icon: "/images/decor.jpg" },
  { name: "Accessories", icon: "/images/accessories.jfif" },
];

export default function CategoryIcons() {
  return (
    <section className="my-10">
      <h3 className="text-xl font-semibold mb-4">
        Shop From <span className="text-blue-500">Top Categories</span>
      </h3>
      <div className="flex flex-wrap justify-start gap-6">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="w-28 h-32 flex flex-col items-center justify-center bg-white rounded-xl shadow-md border border-gray-200 cursor-pointer transition-transform hover:scale-105"
            role="button"
            tabIndex={0}
          >
            <div className="relative w-16 h-16 mb-2">
              <Image
                src={cat.icon}
                alt={cat.name}
                layout="fill"
                objectFit="cover"
                className="rounded"
              />
            </div>
            <span className="text-sm text-center">{cat.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
