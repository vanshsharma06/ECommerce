import { useState } from "react";
import { Heart, BarChart2 } from "lucide-react";
import PropTypes from "prop-types";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function ProductDetail({ product, onClose }) {
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("Description");

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span
        key={i}
        className={i < rating ? "text-yellow-400" : "text-gray-300"}
      >
        ★
      </span>
    ));
  };

  const handleQuantityChange = (value) => {
    if (quantity + value > 0) setQuantity(quantity + value);
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white w-full h-full overflow-y-auto relative">
        {/* Back Button */}
        <IconButton
          onClick={onClose}
          className="fixed top-4 left-4 z-50 text-gray-500 hover:text-gray-800"
        >
          <ArrowBackIcon />
        </IconButton>

        <div className="p-6 lg:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Image Section */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="hidden md:flex flex-col gap-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-20 h-20 border border-gray-200 cursor-pointer hover:border-gray-400"
                  >
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={`${product.name} thumbnail ${i}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="flex-1 border border-gray-200">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Product Details */}
            <div className="flex flex-col">
              <h1 className="text-2xl font-medium text-gray-800">
                {product.name}
              </h1>
              <div className="mt-2 flex items-center gap-2">
                <span className="text-gray-600">Brand:</span>
                <span className="font-medium">{product.brand}</span>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <div className="flex text-lg">
                  {renderStars(product.rating)}
                </div>
                <span className="text-gray-600">Review ({product.rating})</span>
              </div>

              <div className="mt-4 flex items-center gap-3">
                <span className="text-2xl font-bold text-red-500">
                  {product.discountedPrice}
                </span>
                <span className="text-gray-500 line-through">
                  {product.originalPrice}
                </span>
                <span className="bg-red-100 text-red-600 px-2 py-0.5 text-sm rounded">
                  Available In Stock: 1156 items
                </span>
              </div>

              <p className="mt-4 text-gray-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&#39;s standard dummy
                text ever since the 1500s.
              </p>

              {/* Size Selection */}
              <div className="mt-6 flex items-center gap-4">
                <span className="text-gray-700 font-medium">SIZE:</span>
                <div className="flex gap-2">
                  {["S", "M", "L", "XXL"].map((size) => (
                    <button
                      key={size}
                      className={`w-10 h-10 border ${
                        selectedSize === size
                          ? "border-gray-800 font-medium"
                          : "border-gray-300"
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <p className="mt-6 text-green-600 font-medium">
                Free Shipping (Est. Delivery Time 2-3 Days)
              </p>

              {/* Quantity & Cart Buttons */}
              <div className="mt-6 flex items-center gap-4">
                <div className="flex items-center border border-gray-300">
                  <button
                    className="px-3 py-2 border-r border-gray-300"
                    onClick={() => handleQuantityChange(-1)}
                  >
                    -
                  </button>
                  <span className="px-4 py-2">{quantity}</span>
                  <button
                    className="px-3 py-2 border-l border-gray-300"
                    onClick={() => handleQuantityChange(1)}
                  >
                    +
                  </button>
                </div>

                <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 flex items-center gap-2">
                  🛒 ADD TO CART
                </button>
              </div>

              {/* Wishlist & Compare Buttons */}
              <div className="mt-6 flex items-center gap-4">
                <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
                  <Heart size={18} /> Add to Wishlist
                </button>
                <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
                  <BarChart2 size={18} /> Add to Compare
                </button>
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="mt-10 border-t border-gray-200">
            <div className="flex border-b border-gray-200 mt-6">
              {["Description", "Reviews (0)"].map((tab) => (
                <button
                  key={tab}
                  className={`px-4 py-2 ${
                    activeTab === tab
                      ? "border-b-2 border-red-500 text-red-500 font-medium"
                      : "text-gray-600"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="py-6">
              {activeTab === "Description" ? (
                <p className="text-gray-600">
                  Lorem Ipsum is simply dummy text.
                </p>
              ) : (
                <p className="text-gray-600">No reviews yet.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ProductDetail.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    brand: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    originalPrice: PropTypes.string.isRequired,
    discountedPrice: PropTypes.string.isRequired,
    discount: PropTypes.string,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};
