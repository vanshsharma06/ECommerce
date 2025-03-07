"use client";

import { useState, useEffect } from "react";
import "./product-listing.css"; // We'll create this CSS file

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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 10,
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
    id: 11,
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
    id: 13,
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
  const [priceRange, setPriceRange] = useState([0, 60000]);
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
          <span key={i} className="star-filled">
            ★
          </span>
        );
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(
          <span key={i} className="star-filled">
            ★
          </span>
        );
      } else {
        stars.push(
          <span key={i} className="star-empty">
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
    <div className="product-listing">
      {/* Category Header */}
      <div className="category-header" onClick={() => setIsOpen(!isOpen)}>
        <h2>Shop by Category</h2>
        <span className="chevron">{isOpen ? "▲" : "▼"}</span>
      </div>

      {isOpen && (
        <div className="product-container">
          {/* Sidebar Filters */}
          <div className="sidebar">
            {/* Category Filter */}
            <div className="filter-section">
              <h3>Shop by Category</h3>
              <div className="filter-options">
                {categories.map((category) => (
                  <div key={category} className="filter-option">
                    <input
                      type="checkbox"
                      id={`category-${category}`}
                      checked={selectedCategories.includes(category)}
                      onChange={() => toggleCategory(category)}
                    />
                    <label htmlFor={`category-${category}`}>{category}</label>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="filter-section">
              <h3>Filter By Price</h3>
              <input
                type="range"
                min="0"
                max="60000"
                value={priceRange[1]}
                onChange={handlePriceChange}
                className="price-slider"
              />
              <div className="price-range">
                <div>From: {formatPrice(0)}</div>
                <div>To: {formatPrice(priceRange[1])}</div>
              </div>
            </div>

            {/* Rating Filter */}
            <div className="filter-section">
              <h3>Filter By Rating</h3>
              <div className="filter-options">
                {[5, 4, 3, 2, 1].map((rating) => (
                  <div key={rating} className="filter-option">
                    <input
                      type="checkbox"
                      id={`rating-${rating}`}
                      checked={selectedRating === rating}
                      onChange={() => toggleRating(rating)}
                    />
                    <label
                      htmlFor={`rating-${rating}`}
                      className="rating-stars"
                    >
                      {[...Array(rating)].map((_, i) => (
                        <span key={i} className="star-filled">
                          ★
                        </span>
                      ))}
                      {[...Array(5 - rating)].map((_, i) => (
                        <span key={i} className="star-empty">
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
          <div className="product-content">
            {/* Product Header */}
            <div className="product-header">
              <div className="view-options">
                <button
                  onClick={() => setViewMode("grid")}
                  className={viewMode === "grid" ? "active" : ""}
                >
                  Grid
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={viewMode === "list" ? "active" : ""}
                >
                  List
                </button>
                <span className="product-count">
                  There are {filteredProducts.length} products.
                </span>
              </div>
              <div className="sort-options">
                <span>Sort By:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="sort-select"
                >
                  <option value="name-a-z">Name, A to Z</option>
                  <option value="name-z-a">Name, Z to A</option>
                  <option value="price-low-high">Price, low to high</option>
                  <option value="price-high-low">Price, high to low</option>
                </select>
              </div>
            </div>

            {/* Product Grid */}
            <div className={`product-grid ${viewMode}`}>
              {filteredProducts.map((product) => (
                <div key={product.id} className="product-card">
                  {product.discount && (
                    <div className="discount-badge">{product.discount}%</div>
                  )}
                  <div className="product-image">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                    />
                  </div>
                  <div className="product-details">
                    <div className="product-brand">{product.brand}</div>
                    <h3 className="product-name">{product.name}</h3>
                    <div className="product-rating">
                      {renderStars(product.rating)}
                    </div>
                    <div className="product-price">
                      <span className="original-price">
                        {formatPrice(product.originalPrice)}
                      </span>
                      <span className="discounted-price">
                        {formatPrice(product.discountedPrice)}
                      </span>
                    </div>
                    <button className="add-to-cart-btn">ADD TO CART</button>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <div className="empty-state">
                <p>No products match your filters.</p>
                <button
                  className="clear-filters-btn"
                  onClick={() => {
                    setSelectedCategories(
                      initialCategory ? [initialCategory] : []
                    );
                    setPriceRange([0, 60000]);
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
