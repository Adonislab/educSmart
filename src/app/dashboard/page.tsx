import React from 'react'
import LayoutDash from '@/components/LayoutDash'

function page() {
  return (
    <section className="bg-blue-500">
      <h1 className="text-4xl font-bold mb-8 text-white">Bienvenue chez EducMaster</h1>
      <div className="min-h-screen">
        <LayoutDash />
      </div>
    </section>
  )
}

export default page