import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";
import ProductDetail from "../ProductDetail/ProductDetail";

export default function Groceries() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const containerRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const itemsRef = useRef(null);

  const products = [
    {
      id: 1,
      brand: "Lays",
      name: "Lay's American Style Cream & O...",
      image:
        "https://res.cloudinary.com/duqoh8gf5/image/upload/v1736780214/1736780210287_file_1734788009997_lay-s-american-style-cream-onion-potato-chips-82-g-product-images-o491696354-p590121272-0-202410031824.webp",
      originalPrice: "45.00",
      discountedPrice: "35.00",
      discount: "10%",
      rating: 5,
    },
    {
      id: 2,
      brand: "Saffola",
      name: "Saffola Gold Pro Healthy Lifes...",
      image:
        "https://res.cloudinary.com/duqoh8gf5/image/upload/v1736780343/1736780338951_saffola-gold-pro-healthy-lifestyle-ricebran-based-blended-oil-1-l-product-images-o490000057-p490000057-0-202403191806.webp",
      originalPrice: "100.00",
      discountedPrice: "90.00",
      discount: "10%",
      rating: 4,
    },
  ];

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseDetail = () => {
    setSelectedProduct(null);
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
          <h2 className="text-[15px] font-medium text-gray-800 mb-2">Groceries</h2>

          <div className="relative" ref={containerRef}>
            <div
              className="overflow-x-auto scrollbar-hide scroll-smooth"
              ref={scrollContainerRef}
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <div ref={itemsRef} className="flex gap-[10px] md:gap-4 py-2">
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
      )}
    </div>
  );
}
