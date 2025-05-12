"use client";

import {
  Search,
  FavoriteBorder,
  ShoppingCart,
  SyncAlt,
} from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import photo from "../assets/logo.jpg";
import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  // Handler for cart and wishlist navigation
  const handleCartClick = () => {
    // Animation before navigation
    gsap.to(".cart-icon", {
      scale: 1.1,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      onComplete: () => navigate("/cart"),
    });
  };

  const handleWishlistClick = () => {
    // Animation before navigation
    gsap.to(".wishlist-icon", {
      scale: 1.1,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      onComplete: () => navigate("/wishlist"),
    });
  };

  return (
    <>
      {/* -------------------------------------
    header
    ----------------------------------------- */}
      {/* Header */}
      <header>
        <div className="top_box bg-white py-1">
          <div className="mx-auto px-2 max-w-[1500px] flex justify-between py-[4px] text-gray-700 font-sans text-[9px] sm:text-[12px] sm:px-3 md:text-[12px] lg:text-[12px] xl:text-[15px] md:px-5 md:py-[2px]">
            <div className="col1">
              <div className="text header-animate">
                <p>Get up to 50% off new season styles, limited time only</p>
              </div>
            </div>
            <div className="col2 flex">
              <div className="text flex w-full justify-between gap-[7px] sm:gap-[9px] md:gap-[11px] lg:gap-[12px] xl:gap-[25px]">
                <span className="hover:text-red-500 header-animate">
                  <Link to="/help-center">Help center</Link>
                </span>
                <span className="hover:text-red-500 header-animate">
                  <Link to="/order-tracking">Order Tracking</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 
      ---------------------------------------------
      navbar
      --------------------------------------------
      */}
      <nav className="flex flex-col items-center px-2 py-3 border bg-white border-t-[1px] border-b-[1px] border-gray-200 sm:px-4 sm:py-1 md:py-2 lg:py-3 lg:px-7 sm:hidden">
        {/* Logo & Search Bar Wrapper */}
        <div className="flex w-full justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:w-35 md:w-40 lg:w-52 header-animate">
            <img
              src={photo || "/placeholder.svg"}
              alt="ClassyShop"
              className="h-8 w-32 sm:h-10 sm:w-25 md:h-7 md:w-27 lg:h-11 lg:w-34 cursor-pointer"
              onClick={() => navigate("/")}
            />
          </div>

          {/* Icons & Login */}
          <div className="flex items-center me-2 sm:space-x-3 gap-3 lg:space-x-5 lg:gap-[4px]">
            <span className="flex justify-center items-center space-x-1 text-gray-700 cursor-pointer header-animate">
              <button
                onClick={() => navigate("/login")}
                className="hover:text-red-500 text-[11px] sm:text-[10px] md:text-[11px] lg:text-[14px]"
              >
                Login
              </button>
              <p className="text-[14px]">|</p>
              <button
                onClick={() => navigate("/register")}
                className="hover:text-red-500 text-[11px] sm:text-[10px] md:text-[11px] lg:text-[14px]"
              >
                Register
              </button>
            </span>

            <div className="flex items-center space-x-3 sm:space-x-3 lg:space-x-4">
              <Tooltip title="Compare">
                <div className="relative cursor-pointer header-animate">
                  <SyncAlt
                    className="text-gray-600"
                    sx={{
                      fontSize: {
                        xs: "20px",
                        sm: "22px",
                        md: "20px",
                        lg: "27px",
                      },
                    }}
                  />
                  <span className="absolute -top-1.5 lg:-top-2 -right-1 bg-red-500 text-white text-[9px] sm:text-[7px] lg:sm:text-[10px] px-1 rounded-full">
                    4
                  </span>
                </div>
              </Tooltip>

              <Tooltip title="Wishlist">
                <div
                  className="relative cursor-pointer header-animate wishlist-icon"
                  onClick={handleWishlistClick}
                >
                  <FavoriteBorder
                    className="text-gray-600"
                    sx={{
                      fontSize: {
                        xs: "20px",
                        sm: "22px",
                        md: "20px",
                        lg: "27px",
                      },
                    }}
                  />
                  <span className="absolute -top-1.5 lg:-top-2 -right-2 bg-red-500 text-white text-[9px] sm:text-[7px] lg:sm:text-[10px] px-1 rounded-full">
                    2
                  </span>
                </div>
              </Tooltip>

              <Tooltip title="Cart">
                <div
                  className="relative cursor-pointer header-animate cart-icon"
                  onClick={handleCartClick}
                >
                  <ShoppingCart
                    className="text-gray-600"
                    sx={{
                      fontSize: {
                        xs: "20px",
                        sm: "22px",
                        md: "20px",
                        lg: "27px",
                        xl: "30px",
                      },
                    }}
                  />
                  <span className="absolute -top-1.5 lg:-top-2 -right-2 bg-red-500 text-white text-[9px] sm:text-[7px] lg:sm:text-[10px] px-1 rounded-full">
                    4
                  </span>
                </div>
              </Tooltip>
            </div>
          </div>
        </div>

        {/* Search Bar (Now Below) */}
        <div className="relative w-full mt-3 header-animate">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full bg-gray-200 text-gray-700 px-3 text-[15px] py-3 rounded-[5px] focus:outline-none sm:text-[9px] md:py-2 lg:py-3 lg:text-[13px]"
          />
          <Search
            className="absolute right-3 top-3.5 md:top-2 lg:top-[14px] text-gray-400 cursor-pointer"
            style={{ fontSize: "21px" }}
          />
        </div>
      </nav>

      {/* navbar 2 */}

      <nav className="hidden sm:flex items-center justify-between px-2 py-3 border bg-white border-t-[1px] border-b-[1px]  border-gray-200 space-x-1 sm:px-4 sm:py-1 sm:space-x-2 md:py-2 lg:py-3 lg:px-7 xl:px-0 lg:-space-x-0">
        {/* Logo */}
        <div className="flex w-full justify-around px-3">
          <div className="flex items-center space-x-2 sm:w-35 md:w-45 lg:w-52 xl:w-70 header-animate">
            <img
              src={photo || "/placeholder.svg"}
              alt="ClassyShop"
              className="h-8 w-39 sm:h-10 sm:w-25 md:h-8 md:w-26 lg:h-9 lg:w-35 xl:h-12 xl:w-46 cursor-pointer"
              onClick={() => navigate("/")}
            />
          </div>

          {/* Search Bar */}
          <div className="relative w-full mx-2 sm:w-100 sm:mx-3 md:w-100 lg:w-140 xl:w-160 header-animate">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-[100%] bg-gray-200 text-gray-700 px-2 text-[10px] py-2 rounded-[5px] focus:outline-none sm:text-[9px] md:py-2.5 lg:py-3 md:text-[11px] lg:text-[13px] xl:text-[17px] xl:px-4"
            />
            <Search
              className="absolute right-3 top-4 md:top-2 lg:top-[14px] xl:top-4 text-gray-400 cursor-pointer"
              style={{ fontSize: "21px" }}
            />
          </div>
          {/* Icons & Login */}
          <div className="flex items-center sm:space-x-3 gap-2 lg:space-x-5 xl:space-x-7 lg:gap-[4px] xl:gap-[7px] xl:me-8">
            <span className="flex justify-center items-center space-x-1 text-gray-700 cursor-pointer header-animate">
              <button
                onClick={() => navigate("/login")}
                className="hover:text-red-500 text-[12px] sm:text-[10px] md:text-[11px] lg:text-[14px]"
              >
                Login
              </button>
              <p className="text-[15px]">|</p>
              <button
                onClick={() => navigate("/register")}
                className="hover:text-red-500 text-[12px] sm:text-[10px] md:text-[11px] lg:text-[14px]"
              >
                Register
              </button>
            </span>

            <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4 xl:space-x-4">
              <Tooltip title="Compare">
                <div className="relative cursor-pointer header-animate">
                  <SyncAlt
                    className="text-gray-600"
                    sx={{
                      fontSize: {
                        xs: "20px",
                        sm: "22px",
                        md: "20px",
                        lg: "27px",
                        xl: "28px",
                      },
                    }}
                  />
                  <span className="absolute -top-1 lg:-top-2 -right-1 bg-red-500 text-white text-[8px] sm:text-[7px] lg:sm:text-[10px] xl:text-[12px] xl:-top-3.5 xl:px-[5px] xl:-right-2 px-1 rounded-full">
                    4
                  </span>
                </div>
              </Tooltip>

              <Tooltip title="Wishlist">
                <div
                  className="relative cursor-pointer header-animate wishlist-icon"
                  onClick={handleWishlistClick}
                >
                  <FavoriteBorder
                    className="text-gray-600"
                    sx={{
                      fontSize: {
                        xs: "20px",
                        sm: "22px",
                        md: "20px",
                        lg: "27px",
                        xl: "28px",
                      },
                    }}
                  />
                  <span className="absolute -top-1 lg:-top-2 -right-2 bg-red-500 text-white text-[8px] sm:text-[7px] lg:sm:text-[10px] xl:text-[12px] xl:-top-3.5 xl:px-[5px] xl:-right-2 px-1 rounded-full">
                    2
                  </span>
                </div>
              </Tooltip>

              <Tooltip title="Cart">
                <div
                  className="relative cursor-pointer header-animate cart-icon"
                  onClick={handleCartClick}
                >
                  <ShoppingCart
                    className="text-gray-600"
                    sx={{
                      fontSize: {
                        xs: "20px",
                        sm: "22px",
                        md: "24px",
                        lg: "27px",
                        xl: "28px",
                      },
                    }}
                  />
                  <span className="absolute -top-1 lg:-top-2 -right-2 bg-red-500 text-white text-[8px] sm:text-[7px] lg:sm:text-[10px] xl:text-[12px] xl:-top-3.5 xl:px-[5px] xl:-right-2 px-1 rounded-full">
                    4
                  </span>
                </div>
              </Tooltip>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
