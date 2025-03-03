"use client";

import { useState } from "react";

export default function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      id: 1,
      brand: "FLORES",
      name: "FLORES Stylish Fashion Backpack...",
      image:
        "https://res.cloudinary.com/duqoh8gf5/image/upload/v1740907355/1740907355729_fytona-medium-laptop-backpack-light-weight-for-school-collage-office-tuition-and-picnic-waterproof-backpack-blue-25-l-product-images-orvmjkuqezq-p607379380-0-202401161039.jpg",
      originalPrice: "₹970.00",
      discountedPrice: "₹850.00",
      discount: "10%",
      rating: 4,
      backgroundColor: "#f5f0d9",
    },
    {
      id: 2,
      brand: "Motorola",
      name: "Motorola Edge 50 Fusion 5G (Ho...",
      image:
        "https://res.cloudinary.com/duqoh8gf5/image/upload/v1740907187/1740907187082_file_1734771942206_motorola-edge-50-fusion-5g-hot-pink-256-gb-12-gb-ram-product-images-orvvh2thgzw-p609069813-0-202405250532.webp",
      originalPrice: "₹1,800.00",
      discountedPrice: "₹15,600.00",
      discount: "12%",
      rating: 4,
      backgroundColor: "#ffffff",
    },
    {
      id: 3,
      brand: "Altecia",
      name: "Cotton Co Ord Set-Tie & Dye Tr...",
      image:
        "https://res.cloudinary.com/duqoh8gf5/image/upload/v1740906985/1740906985518_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-0-202403231855.jpg",
      originalPrice: "₹1,750.00",
      discountedPrice: "₹1,560.00",
      discount: "10%",
      rating: 5,
      backgroundColor: "#ffd9d9",
    },
    {
      id: 4,
      brand: "VNEED",
      name: "VNEED Women Embroidered",
      image:
        "https://res.cloudinary.com/duqoh8gf5/image/upload/v1740906814/1740906814557_deel-band-women-rayon-embroidered-kurta-pant-dupatta-set-product-images-rvz2bvyrm2-0-202404071602.webp",
      originalPrice: "₹2,200.00",
      discountedPrice: "₹1,600.00",
      discount: "8%",
      rating: 4,
      backgroundColor: "#e6e6e6",
    },
    {
      id: 5,
      brand: "Trilok Fab",
      name: "Buy New Trend Women Black Cott...",
      image:
        "https://res.cloudinary.com/duqoh8gf5/image/upload/v1740663881/1740663879548_miss-ayse-women-s-multicolor-crepe-printed-top-product-images-rvvlrud6qm-0-202410111253.webp",
      originalPrice: "₹2,200.00",
      discountedPrice: "₹1,500.00",
      discount: "10%",
      rating: 4,
      backgroundColor: "#f5f0d9",
    },
    {
      id: 6,
      brand: "Deel band",
      name: "Deel Band Women Rayon Embroide...",
      image:
        "https://res.cloudinary.com/duqoh8gf5/image/upload/v1740650263/1740650262333_buynewtrend-women-maroon-cotton-blend-top-product-images-rvb22aqlk7-1-202201130044.jpg",
      originalPrice: "₹1,800.00",
      discountedPrice: "₹1,500.00",
      discount: "15%",
      rating: 5,
      backgroundColor: "#e6e6e6",
    },
    {
      id: 7,
      brand: "V-Mart",
      name: "Black solid",
      image:
        "https://res.cloudinary.com/duqoh8gf5/image/upload/v1736781548/1736781543208_1000014029787-Green-GREEN-1000014029787_01-2100.jpg",
      originalPrice: "₹735.00",
      discountedPrice: "",
      discount: "12%",
      rating: 5,
      backgroundColor: "#ffffff",
    },
    {
      id: 8,
      brand: "V-Mart",
      name: "Black solid",
      image:
        "https://res.cloudinary.com/duqoh8gf5/image/upload/v1736781548/1736781543208_1000014029787-Green-GREEN-1000014029787_01-2100.jpg",
      originalPrice: "₹735.00",
      discountedPrice: "",
      discount: "12%",
      rating: 5,
      backgroundColor: "#ffffff",
    },
    {
      id: 9,
      brand: "V-Mart",
      name: "Black solid",
      image:
        "https://res.cloudinary.com/duqoh8gf5/image/upload/v1736781548/1736781543208_1000014029787-Green-GREEN-1000014029787_01-2100.jpg",
      originalPrice: "₹735.00",
      discountedPrice: "",
      discount: "12%",
      rating: 5,
      backgroundColor: "#ffffff",
    },
  ];

  const visibleProducts = 5;
  const maxIndex = products.length - visibleProducts;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <span
          key={i}
          className={`text-lg ${
            i < rating ? "text-yellow-400" : "text-gray-300"
          }`}
        >
          ★
        </span>
      ));
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto mt-10 px-4 py-4">
        <h2 className="text-2xl font-medium text-gray-800 mb-6">
          Latest Products
        </h2>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out gap-4"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / visibleProducts)
                }%)`,
              }}
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className="flex-shrink-0 w-[160px] sm:w-[180px] lg:w-[220px] border-1 border-gray-200 rounded overflow-hidden transition-transform hover:translate-y-[-3px] hover:shadow-md "
                >
                  <div className="bg-white rounded-lg overflow-hidden h-full flex flex-col shadow-sm border border-gray-100">
                    <div
                      className="relative aspect-[4/5]"
                      style={{ backgroundColor: product.backgroundColor }}
                    >
                      <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
                        {product.discount}
                      </div>
                      <div className="w-full h-full flex items-center justify-center bg-white">
                        <img
                          src={product.image} // 👈 Placeholder hatake actual image use kar raha hu
                          alt={product.name}
                          className="max-h-full object-fit"
                        />
                      </div>
                    </div>

                    <div className="p-3 flex flex-col flex-grow">
                      <div className="text-xs text-gray-500 mb-1">
                        {product.brand}
                      </div>
                      <h3 className="text-xs font-medium mb-1 line-clamp-2 h-5">
                        {product.name}
                      </h3>

                      <div className="flex mb-1">
                        {renderStars(product.rating)}
                      </div>

                      <div className="mt-auto">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-gray-400 line-through text-xs">
                            {product.originalPrice}
                          </span>
                          <span className="text-red-500 font-medium text-sm">
                            {product.discountedPrice}
                          </span>
                        </div>

                        <button className="w-full border border-red-500 text-red-500 py-1.5 rounded flex items-center justify-center text-xs hover:bg-red-50 transition-colors">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mr-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                          </svg>
                          ADD TO CART
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-1 shadow-md z-10 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-1 shadow-md z-10 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
