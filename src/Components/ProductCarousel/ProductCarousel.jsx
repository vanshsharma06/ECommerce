import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";
import ProductDetail from "../ProductDetail/ProductDetail";

export default function ProductCarousel() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const containerRef = useRef(null);
  const scrollContainerRef = useRef(null);
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
  

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseDetail = () => {
    setSelectedProduct(null);
  };
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
            className={`text-lg ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
          >
            ★
          </span>
        ))}
    </>
  );

  return (
    <div className="bg-white">
      {selectedProduct ? (
        <ProductDetail product={selectedProduct} onClose={handleCloseDetail} />
      ) : (
        <div className="max-w-[2000px] mx-auto px-4 py-4 lg:px-15">
          <h2 className="text-[15px] font-medium text-gray-800 mb-2">Products</h2>

          <div className="relative" ref={containerRef}>
          <button
            onClick={() => scroll("left")}
            className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-1 shadow-md hover:bg-white transition-all"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-gray-700" />
          </button>
            <div
              className="overflow-x-auto scrollbar-hide scroll-smooth"
              ref={scrollContainerRef}
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <div ref={itemsRef} className="flex gap-[10px] md:gap-3 py-2">
                {products.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => handleProductClick(product)}
                    className="cursor-pointer flex-shrink-0 w-[160px] sm:w-[200px] md:w-[220px] lg:w-[230px] transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg"
                  >
                    <div className="bg-white rounded-lg overflow-hidden h-full flex flex-col shadow-sm border border-gray-100">
                      <div className="relative aspect-[4/5] overflow-hidden">
                        {product.discount && (
                          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
                            {product.discount}
                          </div>
                        )}
                        <div className="w-full h-full flex items-center justify-center">
                          <img
                            src={product.image}
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

                        <div className="flex mb-2">{renderStars(product.rating)}</div>

                        <div className="mt-auto">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-gray-400 line-through text-xs">
                              {product.originalPrice}
                            </span>
                            <span className="text-red-500 font-medium text-sm">
                              {product.discountedPrice || product.originalPrice}
                            </span>
                          </div>

                          <button
                      className="w-full border border-red-500 text-[12px] sm:text-[13px] md:text-[14px] lg:text-[14px] lg:py-2 text-red-500 rounded py-[6px] sm:py-[4px] flex items-center justify-center gap-1 hover:bg-black hover:text-white transition-colors hover:border-black lg:mb-3 lg:mt-3"
                      onClick={(e) => {
                        e.stopPropagation();
                        // You can add cart functionality here
                        alert(`Added ${product.name} to cart!`);
                      }}
                    >
                      <ShoppingCart className="h-3.5 w-3.5 mr-1" />
                      ADD TO CART
                    </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button
            onClick={() => scroll("right")}
            className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-1 shadow-md hover:bg-white transition-all"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-gray-700" />
          </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
