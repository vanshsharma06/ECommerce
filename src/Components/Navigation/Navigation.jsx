"use client";

import { useState } from "react";
import { Menu, ExpandMore, RocketLaunch } from "@mui/icons-material";
import CategoryPanel from "../CategoryPanel/CategoryPanel";

const Navigation = () => {
  const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setIsOpenCatPanel(true);
  };

  return (
    <>
      {/* ✅ Mobile Design (Default) */}
      <nav className="shadow bg-white text-black font-sans text-[10px] sm:hidden py-2 px-3">
        {/* ✅ Top Section: SHOP BY CATEGORIES & FREE INTERNATIONAL DELIVERY */}
        <div className="flex justify-between text-[11.4px] items-center gap-2">
          {/* Shop by Categories Button */}
          <button
            onClick={() => setIsOpenCatPanel(true)}
            className="flex items-center space-x-1 font-bold px-2 py-1 rounded-md active:scale-95 transition-all duration-200 active:bg-gray-200"
          >
            <Menu style={{ fontSize: "16px" }} />
            <span>SHOP BY CATEGORIES</span>
            <ExpandMore
              className="hidden md:block"
              style={{ fontSize: "15px" }}
            />
          </button>

          {/* Free International Delivery */}
          <div className="flex items-center space-x-1 px-2 py-1">
            <RocketLaunch style={{ fontSize: "15px" }} />
            <span>Free International Delivery</span>
          </div>
        </div>

        {/* ✅ Bottom Section: Navigation Links */}
        <div className="flex justify-center gap-5 pt-1">
          {[
            "Home",
            "Fashion",
            "Electronics",
            "Bags",
            "Footwear",
            "Groceries",
            "Beauty",
            "Wellness",
            "Jewellery",
          ].map((item, index) => (
            <button
              key={item}
              className={`relative font-semibold md:px-1 py-1 text-[10px] transition-all duration-200 
                ${index >= 6 ? "hidden sm:inline-block " : ""}`}
              onClick={() => {
                if (item !== "Home") handleCategoryClick(item);
              }}
            >
              {item}
              {/* ✅ Underline Effect */}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-red-500 transition-all duration-200 group-hover:w-full"></span>
            </button>
          ))}
        </div>
      </nav>

      {/* ✅ Desktop Navigation (Visible from sm:640px) */}
      <nav className="hidden sm:flex items-center justify-between shadow bg-white text-black font-sans text-[10px] md:text-[10px] lg:text-[10px] xl:text-[13px] py-2 px-3">
        {/* Shop by Categories Dropdown Button */}
        <button
          onClick={() => setIsOpenCatPanel(true)}
          className="flex items-center sm:space-x-1 font-bold px-1 rounded-md active:scale-95 transition-all duration-200 active:bg-gray-200"
        >
          <Menu style={{ fontSize: "21px" }} />
          <span>SHOP BY CATEGORIES</span>
          <ExpandMore
            className="hidden md:block"
            style={{ fontSize: "18px" }}
          />
        </button>

        {/* Navigation Links */}
        <div className="text-[7px] font-medium flex justify-center sm:text-[8px] md:text-[8px] md:gap-2 lg:text-[11px] xl:text-[13px] lg:gap-4">
          {[
            "Home",
            "Fashion",
            "Electronics",
            "Bags",
            "Footwear",
            "Groceries",
            "Beauty",
            "Wellness",
            "Jewellery",
          ].map((item) => (
            <button
              key={item}
              className="relative px-1 py-1 transition-all duration-200 group"
              onClick={() => {
                if (item !== "Home") handleCategoryClick(item);
              }}
            >
              {item}
              {/* ✅ Underline Effect */}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-red-500 transition-all duration-200 group-hover:w-full"></span>
            </button>
          ))}
        </div>

        {/* Free International Delivery */}
        <div className="flex items-center space-x-1 px-2 py-1">
          <RocketLaunch style={{ fontSize: "21px" }} />
          <span>Free International Delivery</span>
        </div>
      </nav>

      {/* ✅ Category Panel */}
      <CategoryPanel
        isOpen={isOpenCatPanel}
        onClose={() => setIsOpenCatPanel(false)}
        selectedCategory={selectedCategory}
      />
    </>
  );
};

export default Navigation;
