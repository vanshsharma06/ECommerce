"use client";

import { useEffect } from "react";
import ProductListing from "../ProductListing/ProductListing";
import "./category-panel.css";

const CategoryPanel = ({ isOpen, onClose, selectedCategory }) => {
  // Close panel with escape key
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscKey);
    return () => window.removeEventListener("keydown", handleEscKey);
  }, [onClose]);

  // Prevent body scroll when panel is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="category-panel-container">
      {/* Overlay */}
      <div className="category-panel-overlay" onClick={onClose}></div>

      {/* Panel */}
      <div className="category-panel">
        {/* Header */}
        <div className="category-panel-header">
          <h2>Shop by Categories</h2>
          <button onClick={onClose} className="close-button">
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="category-panel-content">
          <ProductListing initialCategory={selectedCategory} />
        </div>
      </div>
    </div>
  );
};

export default CategoryPanel;
