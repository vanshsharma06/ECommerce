"use client";

import { useState, useEffect } from "react";

// Sample product data
const sampleProducts = [
  {
    id: 1,
    brand: "RARE RABBIT",
    name: "Men Layer Regular Fit Spread Collar Cotton Shirt",
    rating: 5,
    originalPrice: 950.0,
    discountedPrice: 850.0,
    discount: 9,
    image:
      "https://res.cloudinary.com/duqoh8gf5/image/upload/v1736781297/1736781294242_montrez-men-light-blue-solid-jacket-product-images-rvwmdqy2dw-0-202311201747.jpg",
    category: "Fashion",
  },
  {
    id: 1.2,
    brand: "Altocia",
    name: "Altocia Tie and Dye Jogger wit...",
    rating: 3,
    originalPrice: 480.0,
    discountedPrice: 450.0,
    discount: 7,
    image:
      "https://res.cloudinary.com/duqoh8gf5/image/upload/v1736781412/1736781407043_tazo-mens-round-neck-colourblocked-full-sleeve-dryfit-gymwear-tshirt-product-images-rvzwdw4nio-0-202404101341.webp",
    category: "Fashion",
  },
  {
    id: 1.3,
    brand: "V-Mart",
    name: "Black solid casual shirt...",
    rating: 5,
    originalPrice: 785.0,
    discountedPrice: 450.0,
    discount: 12,
    image:
      "https://res.cloudinary.com/duqoh8gf5/image/upload/v1736781548/1736781543208_1000014029787-Green-GREEN-1000014029787_01-2100.jpg",
    category: "Fashion",
  },
  {
    id: 1.4,
    brand: "Deel band",
    name: "Deel Band Women Rayon Embroide...",
    rating: 5,
    originalPrice: 1800.0,
    discountedPrice: 1500.0,
    discount: 15,
    image:
      "https://res.cloudinary.com/duqoh8gf5/image/upload/v1740650263/1740650262123_buynewtrend-women-maroon-cotton-blend-top-product-images-rvb22aqlk7-0-202201130044.jpg",
    category: "Fashion",
  },
  {
    id: 1.5,
    brand: "Trilok Fab",
    name: "Buy New Trend Women Black Cott...",
    rating: 4,
    originalPrice: 2200.0,
    discountedPrice: 1500.0,
    discount: 10,
    image:
      "https://res.cloudinary.com/duqoh8gf5/image/upload/v1740663881/1740663879548_miss-ayse-women-s-multicolor-crepe-printed-top-product-images-rvvlrud6qm-0-202410111253.webp",
    category: "Fashion",
  },
  {
    id: 2,
    brand: "Sony",
    name: "Wireless Noise Cancelling Headphones",
    rating: 5,
    originalPrice: 24990.0,
    discountedPrice: 19990.0,
    discount: 20,
    image:
      "https://shopatsc.com/cdn/shop/products/CH520_1000x1000_Black_G.jpg?v=1681194265",
    category: "Electronics",
  },
  {
    id: 3,
    brand: "Baggit",
    name: "Women's Tote Bag",
    rating: 4,
    originalPrice: 2999.0,
    discountedPrice: 2399.0,
    discount: 20,
    image:
      "https://res.cloudinary.com/duqoh8gf5/image/upload/v1736754041/1736754038976_flores-stylish-fashion-backpack-for-girls-and-boys-product-images-rv9zqkovyh-0-202405211637.jpg",
    category: "Bags",
  },
  {
    id: 4,
    brand: "Nike",
    name: "Men's Running Shoes",
    rating: 5,
    originalPrice: 8995.0,
    discountedPrice: 6995.0,
    discount: 22,
    image:
      "https://img.tatacliq.com/images/i17//437Wx649H/MP000000018607393_437Wx649H_202404131828421.jpeg",
    category: "Footwear",
  },
  {
    id: 5,
    brand: "kalyan jewellers",
    name: "Necklace",
    rating: 5,
    originalPrice: 299999.0,
    discountedPrice: 199999.0,
    discount: 22,
    image:
      "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw67432ac1/images/hi-res/5110692ZWAAA00_1.jpg?sw=640&sh=640",
    category: "Jewellery",
  },
  {
    id: 5.1,
    brand: "Tanishq",
    name: "Gold Ring",
    rating: 4.5,
    originalPrice: 59999.0,
    discountedPrice: 39999.0,
    discount: 33,
    image:
      "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw5c5ef81f/images/hi-res/511195FHLAA00_1.jpg?sw=640&sh=640",
    category: "Jewellery",
  },
  {
    id: 5.2,
    brand: "PC Jewellers",
    name: "Diamond Earrings",
    rating: 4.8,
    originalPrice: 49999.0,
    discountedPrice: 34999.0,
    discount: 30,
    image:
      "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw103ad1b9/images/hi-res/500482SJAAAA09_1.jpg?sw=640&sh=640",
    category: "Jewellery",
  },
  {
    id: 5.3,
    brand: "Malabar Gold",
    name: "Gold Ring",
    rating: 4.8,
    originalPrice: 15999.0,
    discountedPrice: 12999.0,
    discount: 20,
    image:
      "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw28760e67/images/hi-res/513016FFZAB00_1.jpg?sw=640&sh=640",
    category: "Jewellery",
  },
  {
    id: 5.4,
    brand: "Tanishq",
    name: "Diamond Earrings",
    rating: 4.9,
    originalPrice: 79999.0,
    discountedPrice: 59999.0,
    discount: 25,
    image:
      "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw24e07897/images/ZOYA/hi-res/ZLBM23SBIAAA04_2.jpg?sw=480&sh=480",
    category: "Jewellery",
  },
];

// Categories
const categories = [
  "Fashion",
  "Electronics",
  "Bags",
  "Footwear",
  "Groceries",
  "Beauty",
  "Wellness",
  "Jewellery",
];

const ProductListing = ({ initialCategory = null }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory ? [initialCategory] : []
  );
  const [priceRange, setPriceRange] = useState([0, 600000]);
  const [selectedRating, setSelectedRating] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(sampleProducts);
  const [sortBy, setSortBy] = useState("name-a-z");
  const [viewMode, setViewMode] = useState("grid");

  // Apply filters
  useEffect(() => {
    let filtered = [...sampleProducts];

    // Filter by category
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((product) =>
        selectedCategories.includes(product.category)
      );
    }

    // Filter by price
    filtered = filtered.filter(
      (product) =>
        product.discountedPrice >= priceRange[0] &&
        product.discountedPrice <= priceRange[1]
    );

    // Filter by rating
    if (selectedRating !== null) {
      filtered = filtered.filter(
        (product) => Math.floor(product.rating) === selectedRating
      );
    }

    // Sort products
    switch (sortBy) {
      case "name-a-z":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-z-a":
        filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "price-low-high":
        filtered.sort((a, b) => a.discountedPrice - b.discountedPrice);
        break;
      case "price-high-low":
        filtered.sort((a, b) => b.discountedPrice - a.discountedPrice);
        break;
      default:
        break;
    }

    setFilteredProducts(filtered);
  }, [selectedCategories, priceRange, selectedRating, sortBy]);

  // Update selected categories when initialCategory changes
  useEffect(() => {
    if (initialCategory) {
      setSelectedCategories([initialCategory]);
    }
  }, [initialCategory]);

  // Toggle category selection
  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  // Toggle rating selection
  const toggleRating = (rating) => {
    setSelectedRating((prev) => (prev === rating ? null : rating));
  };

  // Format price to Indian Rupees
  const formatPrice = (price) => {
    return `₹${price.toLocaleString("en-IN")}`;
  };

  // Render star rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(
          <span key={i} className="text-amber-500">
            ★
          </span>
        );
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(
          <span key={i} className="text-amber-500">
            ★
          </span>
        );
      } else {
        stars.push(
          <span key={i} className="text-gray-300">
            ★
          </span>
        );
      }
    }

    return stars;
  };

  // Handle price range change
  const handlePriceChange = (e) => {
    setPriceRange([0, Number.parseInt(e.target.value)]);
  };

  return (
    <div className="border border-gray-200 rounded-md font-sans">
      {/* Category Header */}
      <div
        className="flex items-center justify-between p-4 cursor-pointer border-b border-gray-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-lg font-medium m-0">Shop by Category</h2>
        <span className="text-xs">{isOpen ? "▲" : "▼"}</span>
      </div>

      {isOpen && (
        <div className="flex flex-col md:flex-row">
          {/* Sidebar Filters */}
          <div className="w-full md:w-1/4 p-4 border-r border-gray-200">
            {/* Category Filter */}
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-2">Shop by Category</h3>
              <div className="flex flex-col gap-2">
                {categories.map((category) => (
                  <div key={category} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id={`category-${category}`}
                      checked={selectedCategories.includes(category)}
                      onChange={() => toggleCategory(category)}
                      className="accent-red-500"
                    />
                    <label htmlFor={`category-${category}`} className="text-sm">
                      {category}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-2">Filter By Price</h3>
              <input
                type="range"
                min="0"
                max="600000"
                value={priceRange[1]}
                onChange={handlePriceChange}
                className="w-full my-4 accent-red-500"
              />
              <div className="flex justify-between text-sm">
                <div>From: {formatPrice(0)}</div>
                <div>To: {formatPrice(priceRange[1])}</div>
              </div>
            </div>

            {/* Rating Filter */}
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-2">Filter By Rating</h3>
              <div className="flex flex-col gap-2">
                {[5, 4, 3, 2, 1].map((rating) => (
                  <div key={rating} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id={`rating-${rating}`}
                      checked={selectedRating === rating}
                      onChange={() => toggleRating(rating)}
                      className="accent-red-500"
                    />
                    <label
                      htmlFor={`rating-${rating}`}
                      className="flex text-sm"
                    >
                      {[...Array(rating)].map((_, i) => (
                        <span key={i} className="text-amber-500">
                          ★
                        </span>
                      ))}
                      {[...Array(5 - rating)].map((_, i) => (
                        <span key={i} className="text-gray-300">
                          ★
                        </span>
                      ))}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="w-full md:w-3/4 p-4">
            {/* Product Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                {/* <button
                  onClick={() => setViewMode("grid")}
                  className={`p-1 border-none bg-transparent cursor-pointer ${
                    viewMode === "grid" ? "text-red-500" : "text-gray-500"
                  }`}
                >
                  Grid
                </button> */}
                {/* <button
                  onClick={() => setViewMode("list")}
                  className={`p-1 border-none bg-transparent cursor-pointer ${
                    viewMode === "list" ? "text-red-500" : "text-gray-500"
                  }`}
                >
                  List
                </button> */}
                <span className="text-sm text-gray-500 ml-2">
                  There are {filteredProducts.length} products.
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span>Sort By:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-2 py-1 border border-gray-300 rounded text-sm"
                >
                  <option value="name-a-z">Name, A to Z</option>
                  <option value="name-z-a">Name, Z to A</option>
                  <option value="price-low-high">Price, low to high</option>
                  <option value="price-high-low">Price, high to low</option>
                </select>
              </div>
            </div>

            {/* Product Grid */}
            <div
              className={`grid gap-2 ${
                viewMode === "grid"
                  ? "grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3"
                  : "grid-cols-1"
              }`}
            >
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="relative border border-gray-200 rounded-md overflow-hidden"
                >
                  {product.discount && (
                    <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded z-1">
                      {product.discount}%
                    </div>
                  )}
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-fit transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-2">
                    <div className="text-xs text-gray-500 mb-1">
                      {product.brand}
                    </div>
                    <h3 className="text-sm font-medium mb-1 line-clamp-1 overflow-hidden">
                      {product.name}
                    </h3>
                    <div className="flex mb-2">
                      {renderStars(product.rating)}
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-sm text-gray-400 line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                      <span className="font-bold text-red-500">
                        {formatPrice(product.discountedPrice)}
                      </span>
                    </div>
                    <button className="w-full py-2 bg-transparent border border-red-500 text-red-500 rounded text-xs font-medium cursor-pointer transition-all duration-200 hover:bg-red-500 hover:text-white">
                      ADD TO CART
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-10">
                <p className="text-gray-500">No products match your filters.</p>
                <button
                  className="mt-4 px-4 py-2 bg-transparent border border-gray-300 rounded cursor-pointer hover:bg-gray-100"
                  onClick={() => {
                    setSelectedCategories(
                      initialCategory ? [initialCategory] : []
                    );
                    setPriceRange([0, 600000]);
                    setSelectedRating(null);
                  }}
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductListing;
