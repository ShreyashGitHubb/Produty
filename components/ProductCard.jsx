export default function ProductCard({ product }) {
  if (!product) return null;

  return (
    <div className="w-[280px] bg-[#ebe7e7] rounded-2xl shadow-md p-4 m-3 flex flex-col justify-between hover:shadow-xl transition-all duration-300">
      <img
        src={product.image}
        alt={product.title}
        className="rounded-xl object-cover h-[180px] w-full mb-3 bg-white"
      />

      <div className="flex flex-col gap-1 text-center">
        <h3 className="text-lg font-semibold text-gray-900">{product.title}</h3>
        <p className="text-gray-500 text-sm">{product.description}</p>
        {/* <p className="text-black font-bold text-base">₹{product.price}</p> */}
      </div>

      <button className="mt-4 px-4 py-2 rounded-full bg-black text-white hover:bg-gray-800 text-sm font-medium">
        ${product.price}
      </button>
    </div>
  );
}
