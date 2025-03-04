import { useState, useRef, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";

export default function ElectronicsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  const containerRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const itemsRef = useRef(null);

  const products = [
    {
      id: 1,
      brand: "Apple",
      name: "Apple iPhone 15 256GB Pink",
      image:
        "https://res.cloudinary.com/duqoh8gf5/image/upload/v1736753969/1736753967866_apple-iphone-13-128-gb-pink-digital-o491997703-p590798557-0-202208221207.webp",
      originalPrice: "28000.00",
      discountedPrice: "25000.00",
      discount: "10%",
      rating: 5,
    },
    {
      id: 2,
      brand: "Apple",
      name: "Apple iPhone 15 256GB Black",
      image:
        "https://res.cloudinary.com/duqoh8gf5/image/upload/v1736779231/1736779226041_apple-iphone-13-128-gb-midnight-black-digital-o491997699-p590798548-0-202208221207.webp",
      originalPrice: "45000.00",
      discountedPrice: "35000.00",
      discount: "10%",
      rating: 4,
    },
    {
      id: 3,
      brand: "Motorola",
      name: "Motorola Edge 50 Fusion 5G",
      image:
        "https://res.cloudinary.com/duqoh8gf5/image/upload/v1740907187/1740907187082_file_1734771942206_motorola-edge-50-fusion-5g-hot-pink-256-gb-12-gb-ram-product-images-orvvh2thgzw-p609069813-0-202405250532.webp",
      originalPrice: "1800.00",
      discountedPrice: "15600.00",
      discount: "12%",
      rating: 3.5,
    },
  ];

  const calculateVisibleItems = useCallback(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 2;
      if (window.innerWidth < 1024) return 3;
      return 5;
    }
    return 5;
  }, []);

  const [visibleItems, setVisibleItems] = useState(calculateVisibleItems());

  useEffect(() => {
    const handleResize = () => {
      setVisibleItems(calculateVisibleItems());
      updateDimensions();
    };

    const updateDimensions = () => {
      if (!containerRef.current || !itemsRef.current) return;

      setContainerWidth(containerRef.current.offsetWidth);
      const firstItem = itemsRef.current.children[0];

      if (firstItem instanceof HTMLElement) {
        setItemWidth(firstItem.offsetWidth);
      }
    };

    updateDimensions();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [calculateVisibleItems]);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount =
        direction === "left"
          ? -container.clientWidth / 2
          : container.clientWidth / 2;

      container.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const renderStars = (rating) => (
    <>
      {Array(5)
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
        ))}
    </>
  );

  const handleTouchStart = (e) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging || !scrollContainerRef.current) return;

    const x = e.touches[0].pageX;
    const walk = (startX - x) * 1.5;

    if (walk > 50) {
      scroll("right");
      setIsDragging(false);
    } else if (walk < -50) {
      scroll("left");
      setIsDragging(false);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div className="bg-white">
      <div className="max-w-[2000px] mx-auto px-4 py-4 lg:px-15">
        <h2 className="text-[15px] font-medium text-gray-800 mb-2">Electronics</h2>

        <div className="relative" ref={containerRef}>
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-1.5 shadow-md hover:bg-white transition-all"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5 text-gray-700" />
          </button>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-1.5 shadow-md hover:bg-white transition-all"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5 text-gray-700" />
          </button>

          <div
            className="overflow-x-auto scrollbar-hide scroll-smooth"
            ref={scrollContainerRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div ref={itemsRef} className="flex gap-3 md:gap-4 py-2">
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
                          className="max-h-full max-w-full object-fit transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    </div>

                    <div className="p-3 flex flex-col flex-grow">
                      <div className="text-xs font-medium text-gray-500 mb-1">
                        {product.brand}
                      </div>
                      <h3 className="text-sm font-medium mb-1 truncate">
                        {product.name}
                      </h3>

                      <div className="flex mb-2">
                        {renderStars(product.rating)}
                      </div>

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
      </div>
    </div>
  );
}
