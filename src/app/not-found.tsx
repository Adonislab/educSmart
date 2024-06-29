// pages/404.js
'use client'
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-black">404 - Page Introuvable 😕</h1>
      <p className="mt-4 text-lg text-black">Oups! On dirait que cette page a pris des vacances 🌴.</p>
      <Link href="/" className="mt-6 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-500">
        Consultez une autre page 🏠
      </Link>
    </div>
  );
}