'use client';

import { useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

export default function CreatePage() {
  const { isSignedIn } = useUser();
  const router = useRouter();

  const [form, setForm] = useState({
    title: '',
    description: '',
    price: '',
    image: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/create', {
      method: 'POST',
      body: JSON.stringify(form),
    });
    router.push('/');
  };

  if (!isSignedIn)
    return (
      <div className="h-screen flex items-center justify-center bg-red-50 text-red-700 font-semibold text-xl">
        Access Denied
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex justify-center items-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center">Create New Product</h2>

        <input
          type="text"
          placeholder="Title"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />

        <textarea
          placeholder="Description"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          rows={3}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          required
        />

        <input
          type="number"
          placeholder="Price"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          required
        />

        <input
          type="text"
          placeholder="Image URL"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e) => setForm({ ...form, image: e.target.value })}
          required
        />

        <button
          type="submit"
          className="w-full bg-black text-white font-semibold py-3 rounded-lg hover:bg-gray-800 transition duration-300"
        >
          Create Product
        </button>
      </form>
    </div>
  );
}
