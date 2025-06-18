'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SuperAdminPage() {
  const [products, setProducts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this product?')) return;
    await fetch(`/api/delete/${id}`, {
      method: 'DELETE',
    });

    setProducts(products.filter((product) => product.id !== id));
  };

  const handleEdit = (id) => {
    router.push(`/superadmin/${id}`);
  };

  if (!products.length)
    return (
      <div className="h-screen flex items-center justify-center bg-white text-lg font-semibold text-gray-600">
        Loading products...
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-8">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">Manage Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md border border-gray-200 p-6 flex flex-col items-center hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-40 object-contain mb-4 bg-white rounded-lg border"
            />
            <h3 className="text-xl font-semibold text-gray-800 text-center">{product.title}</h3>
            <p className="text-sm text-gray-600 text-center mt-1">{product.description}</p>
            <p className="text-lg text-gray-900 font-bold mt-2 mb-4 text-center">₹{product.price}</p>

            <div className="flex gap-3 w-full">
              <button
                onClick={() => handleEdit(product.id)}
                className="flex-1 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(product.id)}
                className="flex-1 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
