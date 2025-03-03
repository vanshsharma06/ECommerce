"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";

export default function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const containerRef = useRef(null);
  const itemsRef = useRef(null);

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
      name: "Motorola Edge 50 Fusion 5G (Hot Pink)",
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
      name: "Buy New Trend Women Black Cotton Blend Top",
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
      name: "Deel Band Women Rayon Embroidered...",
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
      discountedPrice: "₹650.00",
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
      discountedPrice: "₹650.00",
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
      discountedPrice: "₹650.00",
      discount: "12%",
      rating: 5,
      backgroundColor: "#ffffff",
    },
  ];

  // Screen size ke hisaab se visible items ka calculation
  const calculateVisibleItems = useCallback(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 2;
      if (window.innerWidth < 1024) return 3;
      return 5;
    }
    return 5;
  }, []);

  const [visibleItems, setVisibleItems] = useState(calculateVisibleItems());

  // Ye function ab useEffect ke andar define nahi hoga
  const updateDimensions = () => {
    if (containerRef.current && itemsRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
      const firstItem = itemsRef.current.children[0];
      if (firstItem instanceof HTMLElement) {
        setItemWidth(firstItem.offsetWidth);
      }
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setVisibleItems(calculateVisibleItems());
      updateDimensions();
    };

    // Initial calculation
    updateDimensions();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [calculateVisibleItems]);

  const maxIndex = Math.max(0, products.length - visibleItems);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const getTranslateX = () => {
    if (itemWidth === 0) return 0;
    return currentIndex * (itemWidth + 16);
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto mt-10 px-3 py-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-medium text-gray-800">
            Latest Products
          </h2>
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="bg-white rounded-full p-2 shadow-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="h-5 w-5 text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              className="bg-white rounded-full p-2 shadow-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>

        <div className="relative" ref={containerRef}>
          <div className="overflow-hidden">
            <div
              ref={itemsRef}
              className="flex gap-4 transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${getTranslateX()}px)`,
              }}
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className="flex-shrink-0 w-[160px] sm:w-[200px] md:w-[220px] lg:w-[230px] transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg"
                >
                  <div className="bg-white rounded-lg overflow-hidden h-full flex flex-col shadow-sm border border-gray-100">
                    <div
                      className="relative aspect-[4/5] overflow-hidden"
                      style={{ backgroundColor: product.backgroundColor }}
                    >
                      {product.discount && (
                        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
                          {product.discount}
                        </div>
                      )}
                      <div className="w-full h-full flex items-center justify-center">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="max-h-full max-w-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    </div>

                    <div className="p-3 flex flex-col flex-grow">
                      <div className="text-xs font-medium text-gray-500 mb-1">
                        {product.brand}
                      </div>
                      <h3 className="text-sm font-medium mb-1 line-clamp-2 h-10">
                        {product.name}
                      </h3>

                      <div className="mt-auto">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-gray-400 line-through text-xs">
                            {product.originalPrice}
                          </span>
                          <span className="text-red-500 font-medium text-sm">
                            {product.discountedPrice || product.originalPrice}
                          </span>
                        </div>

                        <button className="w-full border border-red-500 text-red-500 py-1.5 rounded flex items-center justify-center text-xs font-medium hover:bg-red-50 transition-colors">
                          <ShoppingCart className="h-3.5 w-3.5 mr-1" />
                          ADD TO CART
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Pagination Indicator */}
        <div className="flex justify-center mt-4 gap-1 sm:hidden">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1.5 rounded-full transition-all ${
                currentIndex === index ? "w-4 bg-red-500" : "w-1.5 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
