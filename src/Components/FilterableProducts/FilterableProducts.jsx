"use client";

import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight,ShoppingCart} from "lucide-react";
import ProductDetail from "../ProductDetail/ProductDetail";

const FilterableProductsWithDetail = () => {
  const categories = [
    "FASHION",
    "ELECTRONICS",
    "BAGS",
    "FOOTWEAR",
    "GROCERIES",
    "BEAUTY",
    "WELLNESS",
    "JEWELLERY",
  ];

  const [activeCategory, setActiveCategory] = useState("FASHION");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const scrollContainerRef = useRef(null);

  const allProducts = [
    {
      id: 1,
      brand: "RARE RABBIT",
      name: "Men Layer Regular Fit Spread Collar Cotton Shirt",
      rating: 5,
      originalPrice: "₹950.00",
      discountedPrice: "₹850.00",
      discount: "9%",
      image:
        "https://res.cloudinary.com/duqoh8gf5/image/upload/v1736781297/1736781294242_montrez-men-light-blue-solid-jacket-product-images-rvwmdqy2dw-0-202311201747.jpg",
      category: "FASHION",
    },
    {
      id: 2,
      brand: "Altocia",
      name: "Altocia Tie and Dye Jogger wit...",
      rating: 3,
      originalPrice: "₹480.00",
      discountedPrice: "₹450.00",
      discount: "7%",
      image:
        "https://res.cloudinary.com/duqoh8gf5/image/upload/v1736781412/1736781407043_tazo-mens-round-neck-colourblocked-full-sleeve-dryfit-gymwear-tshirt-product-images-rvzwdw4nio-0-202404101341.webp",
      category: "FASHION",
    },
    {
      id: 3,
      brand: "V-Mart",
      name: "Black solid casual shirt...",
      rating: 5,
      originalPrice: "₹785.00",
      discountedPrice: "₹450.00",
      discount: "12%",
      image:
        "https://res.cloudinary.com/duqoh8gf5/image/upload/v1736781548/1736781543208_1000014029787-Green-GREEN-1000014029787_01-2100.jpg",
      category: "FASHION",
    },
    {
      id: 4,
      brand: "Deel band",
      name: "Deel Band Women Rayon Embroide...",
      rating: 5,
      originalPrice: "₹1,800.00",
      discountedPrice: "₹1,500.00",
      discount: "15%",
      image:
        "https://res.cloudinary.com/duqoh8gf5/image/upload/v1740650263/1740650262123_buynewtrend-women-maroon-cotton-blend-top-product-images-rvb22aqlk7-0-202201130044.jpg",
      category: "FASHION",
    },
    {
      id: 5,
      brand: "Trilok Fab",
      name: "Buy New Trend Women Black Cott...",
      rating: 4,
      originalPrice: "₹2,200.00",
      discountedPrice: "₹1,500.00",
      discount: "10%",
      image:
        "https://res.cloudinary.com/duqoh8gf5/image/upload/v1740663881/1740663879548_miss-ayse-women-s-multicolor-crepe-printed-top-product-images-rvvlrud6qm-0-202410111253.webp",
      category: "FASHION",
    },
    {
      id: 6,
      brand: "Trilok Fab",
      name: "Buy New Trend Women Black Cott...",
      rating: 4,
      originalPrice: "₹2,200.00",
      discountedPrice: "₹1,500.00",
      discount: "10%",
      image:
        "https://res.cloudinary.com/duqoh8gf5/image/upload/v1740663881/1740663879548_miss-ayse-women-s-multicolor-crepe-printed-top-product-images-rvvlrud6qm-0-202410111253.webp",
      category: "FASHION",
    },
    {
      id: 7,
      brand: "Trilok Fab",
      name: "Buy New Trend Women Black Cott...",
      rating: 4,
      originalPrice: "₹2,200.00",
      discountedPrice: "₹1,500.00",
      discount: "10%",
      image:
        "https://res.cloudinary.com/duqoh8gf5/image/upload/v1740663881/1740663879548_miss-ayse-women-s-multicolor-crepe-printed-top-product-images-rvvlrud6qm-0-202410111253.webp",
      category: "FASHION",
    },
    {
      id: 8,
      brand: "Trilok Fab",
      name: "Buy New Trend Women Black Cott...",
      rating: 4,
      originalPrice: "₹2,200.00",
      discountedPrice: "₹1,500.00",
      discount: "10%",
      image:
        "https://res.cloudinary.com/duqoh8gf5/image/upload/v1740663881/1740663879548_miss-ayse-women-s-multicolor-crepe-printed-top-product-images-rvvlrud6qm-0-202410111253.webp",
      category: "FASHION",
    },
    {
      id: 9,
      brand: "Trilok Fab",
      name: "Buy New Trend Women Black Cott...",
      rating: 4,
      originalPrice: "₹2,200.00",
      discountedPrice: "₹1,500.00",
      discount: "10%",
      image:
        "https://res.cloudinary.com/duqoh8gf5/image/upload/v1740663881/1740663879548_miss-ayse-women-s-multicolor-crepe-printed-top-product-images-rvvlrud6qm-0-202410111253.webp",
      category: "FASHION",
    },
    // Add some example products for other categories
    {
      id: 10,
      brand: "Sony",
      name: "Wireless Noise Cancelling Headphones",
      rating: 5,
      originalPrice: "₹24,990.00",
      discountedPrice: "₹19,990.00",
      discount: "20%",
      image:
        "https://shopatsc.com/cdn/shop/products/CH520_1000x1000_Black_G.jpg?v=1681194265",
      category: "ELECTRONICS",
    },
    {
      id: 11,
      brand: "Baggit",
      name: "Women's Tote Bag",
      rating: 4,
      originalPrice: "₹2,999.00",
      discountedPrice: "₹2,399.00",
      discount: "20%",
      image:
        "https://res.cloudinary.com/duqoh8gf5/image/upload/v1736754041/1736754038976_flores-stylish-fashion-backpack-for-girls-and-boys-product-images-rv9zqkovyh-0-202405211637.jpg",
      category: "BAGS",
    },
    {
      id: 13,
      brand: "Nike",
      name: "Men's Running Shoes",
      rating: 5,
      originalPrice: "₹8,995.00",
      discountedPrice: "₹6,995.00",
      discount: "22%",
      image:
        "https://img.tatacliq.com/images/i17//437Wx649H/MP000000018607393_437Wx649H_202404131828421.jpeg",
      category: "FOOTWEAR",
    },
  ];

  const filteredProducts = allProducts.filter(
    (product) => product.category === activeCategory
  );

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={i <= rating ? "text-yellow-400" : "text-gray-300"}
        >
          ★
        </span>
      );
    }
    return stars;
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

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseDetail = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto px-2 py-2 sm:px-3 sm:py-2 md:px-3 lg:px-20 lg:py-3 font-sans bg-white w-full max-w-[2200px]">
        <div className="mb-2 sm:mb-3 lg:mb-5">
          <div className="mb-[3px] lg:mb-[10px]">
            <h2 className="text-[15px] sm:text-[11px] lg:text-[19px] text-gray-800 font-medium m-0">
              Popular Products
            </h2>
            <p className="text-[11px] sm:text-[8px] lg:text-[13px] text-gray-600 mt-[1px]">
              Do not miss the current offers until the end of March.
            </p>
          </div>
          <div className="flex overflow-x-auto gap-2 py-2 scrollbar-hide overflow-hidden border-b-[1px] border-gray-200 pb-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-2 py-2 text-[13px] sm:text-[8px] lg:text-[14px] lg:px-3 whitespace-nowrap ${
                  category === activeCategory
                    ? "text-red-500 border-b-2 border-red-500 font-medium"
                    : "text-gray-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="relative">
          {/* Left scroll button */}
          <button
            onClick={() => scroll("left")}
            className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-1 shadow-md hover:bg-white transition-all"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-gray-700" />
          </button>

          {/* Horizontal scrollable container */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-2 py-2 scrollbar-hide scroll-smooth "
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 w-[160px] sm:w-[180px] lg:w-[220px] border-1 border-gray-200 rounded overflow-hidden transition-transform hover:translate-y-[-3px] hover:shadow-md cursor-pointer"
                onClick={() => handleProductClick(product)}
              >
                <div className="relative aspect-[4/5] ">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-fit "
                  />
                  <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-[1px] rounded z-10">
                    {product.discount}
                  </div>
                </div>
                <div className="px-1">
                  <div className="p-2">
                    <p className="text-[12px] sm:text-[13px] lg:text-[14px] text-gray-600 mb-0.5">
                      {product.brand}
                    </p>
                    <p className="text-[12px] sm:text-[13px] lg:text-[14px] truncate">
                      {product.name}
                    </p>
                    <div className="flex mb-1 text-[15px] sm:text-[16px] lg:text-[17px]">
                      {renderStars(product.rating)}
                    </div>
                    <div className="flex items-center gap-2 mb-[6px]">
                      <span className="line-through text-gray-500 text-[13px] sm:text-[13px] lg:text-[14px]">
                        {product.originalPrice}
                      </span>
                      <span className="text-red-500 font-bold text-[13px] sm:text-[13px] lg:text-[14px]">
                        {product.discountedPrice}
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
            ))}
          </div>

          {/* Right scroll button */}
          <button
            onClick={() => scroll("right")}
            className="hidden scrollbar-hide sm:block absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-1 shadow-md hover:bg-white transition-all"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Product Detail Page */}
      {selectedProduct && (
        <ProductDetail product={selectedProduct} onClose={handleCloseDetail} />
      )}
    </div>
  );
};

export default FilterableProductsWithDetail;
