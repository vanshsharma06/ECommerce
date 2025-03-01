// "use client";

import { useState } from "react";

const FilterableProducts = () => {
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

  const allProducts = [
    {
      id: 1,
      brand: "RARE RABBIT",
      name: "Men Layer Regular Fit Spread...",
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

    // Add some example products for other categories
    {
      id: 8,
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
      id: 9,
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
      id: 10,
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

  return (
    <div className=" mx-auto px-30 py-6 font-sans bg-white w-full">
      <div className="mb-6">
        <div className="mb-4">
          <h2 className="text-2xl text-gray-800 font-medium m-0">
            Popular Products
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            Do not miss the current offers until the end of March.
          </p>
        </div>
        <div className="flex overflow-x-auto gap-4 border-b border-gray-200">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm whitespace-nowrap ${
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="border border-gray-200 rounded overflow-hidden transition-transform hover:translate-y-[-5px] hover:shadow-md"
          >
            <div className="relative h-48">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-0.5 rounded text-xs font-bold">
                {product.discount}
              </span>
            </div>
            <div className="p-3">
              <p className="text-xs text-gray-600 mb-1">{product.brand}</p>
              <p className="text-sm mb-2 truncate">{product.name}</p>
              <div className="flex mb-2 text-sm">
                {renderStars(product.rating)}
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="line-through text-gray-500 text-sm">
                  {product.originalPrice}
                </span>
                <span className="text-red-500 font-bold">
                  {product.discountedPrice}
                </span>
              </div>
              <button className="w-full border border-red-500 text-red-500 rounded py-2 text-sm flex items-center justify-center gap-1 hover:bg-black hover:text-white transition-colors hover:border-black">
                <span>🛒</span> ADD TO CART
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterableProducts;
