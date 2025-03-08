"use client"

import { useParams } from "react-router-dom"

const ProductsPage = () => {
  const { category, subcategory } = useParams()

  // This would normally fetch products based on category and subcategory
  // For demonstration, we'll just display the category and subcategory

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          {subcategory
            ?.split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}
        </h1>
        <p className="text-gray-600">Category: {category?.charAt(0).toUpperCase() + category?.slice(1)}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* This would be populated with actual product data */}
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200"></div>
            <div className="p-4">
              <h3 className="font-medium text-gray-800">Product {index + 1}</h3>
              <p className="text-gray-600 text-sm mt-1">₹1,999</p>
              <div className="mt-3">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm w-full hover:bg-blue-700 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductsPage

