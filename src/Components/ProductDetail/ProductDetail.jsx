"use client";

import { useState, useRef } from "react";
import {
  Heart,
  BarChart2,
  Star,
  Upload,
  ChevronLeft,
  ChevronRight,
  ShoppingCart,
} from "lucide-react";
import PropTypes from "prop-types";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function ProductDetail({ product, onClose }) {
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("Description");
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState("");
  const [userRating, setUserRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewImages, setReviewImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const fileInputRef = useRef(null);

  // Sample product images - in a real app, these would come from the product data
  const productImages = [
    product.image || "/placeholder.svg?height=600&width=600",
    "/placeholder.svg?height=600&width=600&text=Image+2",
    "/placeholder.svg?height=600&width=600&text=Image+3",
    "/placeholder.svg?height=600&width=600&text=Image+4",
    "/placeholder.svg?height=600&width=600&text=Image+5",
  ];

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

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (newReview.trim() === "" || userRating === 0) return;

    const review = {
      id: Date.now(),
      text: newReview,
      rating: userRating,
      date: new Date().toLocaleDateString(),
      images: reviewImages,
      userName: "Customer", // In a real app, this would be the logged-in user's name
    };

    setReviews([...reviews, review]);
    setNewReview("");
    setUserRating(0);
    setReviewImages([]);
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    const newImages = files.map((file) => ({
      id: Date.now() + Math.random(),
      url: URL.createObjectURL(file),
      name: file.name,
    }));

    setReviewImages([...reviewImages, ...newImages]);
  };

  const removeImage = (id) => {
    setReviewImages(reviewImages.filter((img) => img.id !== id));
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === productImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? productImages.length - 1 : prevIndex - 1
    );
  };

  const selectImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-auto">
      {/* Back Button */}
      <IconButton
        onClick={onClose}
        className="fixed top-4 left-4 z-50 text-gray-500 hover:text-gray-800"
      >
        <ArrowBackIcon />
      </IconButton>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Gallery Section */}
          <div className="flex flex-col gap-4">
            {/* Main Image with Navigation */}
            <div className="relative aspect-square border border-gray-200 bg-gray-50 rounded-lg overflow-hidden">
              <img
                src={productImages[currentImageIndex] || "/placeholder.svg"}
                alt={`${product.name} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-contain"
              />

              {/* Image Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {productImages.length}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {productImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => selectImage(index)}
                  className={`w-20 h-20 flex-shrink-0 border-2 rounded-md overflow-hidden ${
                    currentImageIndex === index
                      ? "border-red-500"
                      : "border-gray-200"
                  }`}
                >
                  <img
                    src={img || "/placeholder.svg"}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col">
            <h1 className="text-2xl md:text-3xl font-medium text-gray-800">
              {product.name}
            </h1>
            <div className="mt-2 flex items-center gap-2">
              <span className="text-gray-600">Brand:</span>
              <span className="font-medium">{product.brand}</span>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <div className="flex text-lg">{renderStars(product.rating)}</div>
              <span className="text-gray-600">
                Review ({reviews.length || 0})
              </span>
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
              {product.description ||
                "Kurta: The kurta is the top piece, which is a long tunic-style garment that can vary in length, sleeve style, and neckline. In this set, it is made from rayon fabric, which is known for its softness, smooth texture, and breathability. Rayon kurta often comes in a variety of prints, patterns, and colors, catering to different tastes and occasions."}
            </p>

            {/* Size Selection - Only show for clothing category */}
            {product.category === "clothing" && (
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
            )}

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
                <ShoppingCart className="h-3.5 w-3.5 mr-1" /> ADD TO CART
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
        <div className="mt-12 border-t border-gray-200">
          <div className="flex border-b border-gray-200 mt-6">
            {["Description", `Reviews (${reviews.length})`].map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 ${
                  activeTab === tab.split(" ")[0]
                    ? "border-b-2 border-red-500 text-red-500 font-medium"
                    : "text-gray-600"
                }`}
                onClick={() => setActiveTab(tab.split(" ")[0])}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="py-6">
            {activeTab === "Description" ? (
              <div className="border border-gray-200 rounded-md p-4">
                <p className="text-gray-700">
                  {product.description ||
                    "Kurta: The kurta is the top piece, which is a long tunic-style garment that can vary in length, sleeve style, and neckline. In this set, it is made from rayon fabric, which is known for its softness, smooth texture, and breathability. Rayon kurta often comes in a variety of prints, patterns, and colors, catering to different tastes and occasions."}
                </p>
              </div>
            ) : (
              <div className="space-y-8">
                {/* Customer Reviews */}
                {reviews.length > 0 ? (
                  <div className="space-y-6">
                    {reviews.map((review) => (
                      <div
                        key={review.id}
                        className="border-b border-gray-200 pb-6"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-medium">{review.userName}</p>
                            <p className="text-sm text-gray-500">
                              {review.date}
                            </p>
                          </div>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                size={16}
                                className={
                                  i < review.rating
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "text-gray-300"
                                }
                              />
                            ))}
                          </div>
                        </div>
                        <p className="mt-2 text-gray-700">{review.text}</p>
                        {review.images.length > 0 && (
                          <div className="mt-3 flex flex-wrap gap-2">
                            {review.images.map((img) => (
                              <div key={img.id} className="w-16 h-16 relative">
                                <img
                                  src={img.url || "/placeholder.svg"}
                                  alt="Review"
                                  className="w-full h-full object-cover border border-gray-200 rounded"
                                />
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">
                    No reviews yet. Be the first to review this product!
                  </p>
                )}

                {/* Add Review Form */}
                <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-medium mb-4">Add a review</h3>
                  <form onSubmit={handleReviewSubmit}>
                    <div className="mb-4">
                      <textarea
                        className="w-full border border-gray-300 rounded-md p-3 min-h-[120px]"
                        placeholder="Write a review..."
                        value={newReview}
                        onChange={(e) => setNewReview(e.target.value)}
                      ></textarea>
                    </div>

                    {/* Image Upload */}
                    <div className="mb-4">
                      <p className="mb-2 text-sm text-gray-600">
                        Add photos (optional)
                      </p>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {reviewImages.map((img) => (
                          <div key={img.id} className="relative w-16 h-16">
                            <img
                              src={img.url || "/placeholder.svg"}
                              alt={img.name}
                              className="w-full h-full object-cover border border-gray-200 rounded"
                            />
                            <button
                              type="button"
                              className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs"
                              onClick={() => removeImage(img.id)}
                            >
                              ×
                            </button>
                          </div>
                        ))}
                        <button
                          type="button"
                          className="w-16 h-16 border-2 border-dashed border-gray-300 rounded flex items-center justify-center text-gray-400 hover:text-gray-600 hover:border-gray-400"
                          onClick={() => fileInputRef.current.click()}
                        >
                          <Upload size={20} />
                        </button>
                        <input
                          type="file"
                          multiple
                          accept="image/*"
                          className="hidden"
                          ref={fileInputRef}
                          onChange={handleImageUpload}
                        />
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="mb-4">
                      <p className="mb-2 text-sm text-gray-600">Your rating</p>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((rating) => (
                          <Star
                            key={rating}
                            size={24}
                            className={`cursor-pointer ${
                              (hoverRating || userRating) >= rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                            onClick={() => setUserRating(rating)}
                            onMouseEnter={() => setHoverRating(rating)}
                            onMouseLeave={() => setHoverRating(0)}
                          />
                        ))}
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                      disabled={!newReview.trim() || userRating === 0}
                    >
                      SUBMIT REVIEW
                    </button>
                  </form>
                </div>
              </div>
            )}
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
    description: PropTypes.string,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};
