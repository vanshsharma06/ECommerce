import {
  Search,
  FavoriteBorder,
  ShoppingCart,
  SyncAlt,
} from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import photo from "../assets/logo.jpg";

export default function header() {
  return (
    <>
      {/* -------------------------------------
    header
    ----------------------------------------- */}
      <header>
        <div className="top_box bg-white">
          <div className="mx-auto px-2 max-w-[1500px] flex justify-between py-[4px] text-gray-700 font-sans text-[6px] sm:text-[10px] md:text-[11px] lg:text-[12px] xl:text-[13px]">
            <div className="col1">
              <div className="text">
                <p>Get up to 50% off new season styles, limited time only</p>
              </div>
            </div>
            <div className="col2 flex">
              <div className="text flex w-full justify-between gap-[7px]">
                <span className="hover:text-red-500">
                  <a href="#">Help center</a>
                </span>
                <span className="hover:text-red-500">
                  <a href="#">Order Tracking</a>
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
      <nav className="flex items-center justify-between px-2 py-1 border bg-white border-t-[1px] border-b-[1px]  border-gray-200 space-x-1 sm:px-4 sm:py-3 sm:space-x-2">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src={photo}
            alt="ClassyShop"
            className="h-4 w-17 sm:h-6 sm:w-23"
          />
        </div>

        {/* Search Bar */}
        <div className="relative w-48 mx-2 sm:w-98 sm:mx-3">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full bg-gray-200 text-gray-700 px-2 text-[7px] py-2 rounded-[5px] focus:outline-none sm:text-[9px]"
          />
          <Search
            className="absolute right-1 top-2 text-gray-600 cursor-pointer"
            style={{ fontSize: "17px" }}
          />
        </div>

        {/* Icons & Login */}
        <div className="flex items-center sm:space-x-3 gap-2">
          <span className="flex justify-center items-center space-x-1 text-gray-700 cursor-pointer">
            <a
              className="hover:text-red-500 text-[8px] sm:text-[10px]"
              href="#"
            >
              Login
            </a>
            <p className="text-[12px]">|</p>
            <a
              className="hover:text-red-500 text-[8px] sm:text-[10px]"
              href="#"
            >
              Register
            </a>
          </span>

          <div className="flex items-center space-x-2 sm:space-x-3">
            <Tooltip title="Compare">
              <div className="relative cursor-pointer ">
                <SyncAlt
                  className="text-gray-600"
                  style={{ fontSize: "14px" }}
                />
                <span className="absolute -top-0 -right-2 bg-red-500 text-white text-[6px] sm:text-[7px] px-1 rounded-full">
                  4
                </span>
              </div>
            </Tooltip>
            <Tooltip title="Wishlist">
              <div className="relative cursor-pointer">
                <FavoriteBorder
                  className="text-gray-600"
                  style={{ fontSize: "14px" }}
                />
                <span className="absolute -top-0 -right-2 bg-red-500 text-white text-[6px] sm:text-[7px] px-1 rounded-full">
                  2
                </span>
              </div>
            </Tooltip>

            <Tooltip title="Cart">
              <div className="relative cursor-pointer">
                <ShoppingCart
                  className="text-gray-600"
                  style={{ fontSize: "14px" }}
                />
                <span className="absolute -top-0 -right-2 bg-red-500 text-white text-[6px] sm:text-[7px] px-1 rounded-full">
                  4
                </span>
              </div>
            </Tooltip>
          </div>
        </div>
      </nav>
    </>
  );
}
