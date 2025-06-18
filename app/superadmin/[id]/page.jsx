'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';

export default function EditPage() {
  const { id } = useParams();
  const router = useRouter();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`/api/edit/${id}`)
      .then((res) => res.json())
      .then(setProduct);
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`/api/edit/${id}`, {
      method: 'PUT',
      body: JSON.stringify(product),
    });
    router.push('/superadmin');
  };

  if (!product)
    return (
      <div className="h-screen flex items-center justify-center bg-white text-lg font-semibold text-gray-600">
        Loading product...
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-300 flex justify-center items-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center">Edit Product</h2>

        <input
          type="text"
          value={product.title}
          placeholder="Title"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          onChange={(e) => setProduct({ ...product, title: e.target.value })}
          required
        />

        <textarea
          value={product.description}
          placeholder="Description"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-green-400"
          rows={3}
          onChange={(e) => setProduct({ ...product, description: e.target.value })}
          required
        />

        <input
          type="number"
          value={product.price}
          placeholder="Price"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          onChange={(e) => setProduct({ ...product, price: parseFloat(e.target.value) })}
          required
        />

        <input
          type="text"
          value={product.image}
          placeholder="Image URL"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          onChange={(e) => setProduct({ ...product, image: e.target.value })}
          required
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition duration-300"
        >
          Update Product
        </button>
      </form>
    </div>
  );
}
