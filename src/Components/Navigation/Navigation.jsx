import { useState } from "react";
import { Menu, ExpandMore, RocketLaunch } from "@mui/icons-material";
import CategoryPanel from "./CategoryPanel";

export default function Navigation() {
  const [IsOpenCatPanel, setIsOpenCatPanel] = useState(false);

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
        <div className="mt- flex flex-wrap justify-center pt-1">
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
              className={`px-[7px] md:px-[1] py-1 text-[13px] hover:text-red-500 transition-all duration-200 
                ${index >= 6 ? "hidden sm:inline-block" : ""} `}
            >
              {item}
            </button>
          ))}
        </div>
      </nav>

      {/* ✅ Tablet/Desktop Design (Visible from sm:640px) */}
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

        {/* Navigation Links as Buttons */}
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
          ]
            .slice(0, 5) // Mobile pe sirf 5 items
            .concat(
              window.innerWidth >= 640
                ? ["Groceries", "Beauty", "Wellness"]
                : []
            )
            .concat(window.innerWidth >= 1024 ? ["Jewellery"] : []) // Laptop+ me sab dikhaye
            .map((item) => (
              <button
                key={item}
                className="relative px-1 py-1 hover:text-red-500 transition-all duration-200"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-red-500 transition-all duration-200 hover:w-full"></span>
              </button>
            ))}
        </div>

        {/* Free International Delivery Button */}
        <div className="flex items-center space-x-1 px-2 py-1">
          <RocketLaunch style={{ fontSize: "21px" }} />
          <span>Free International Delivery</span>
        </div>
      </nav>

      {/* Category Panel - Drawer */}
      <CategoryPanel
        IsOpenCatPanel={IsOpenCatPanel}
        setIsOpenCatPanel={setIsOpenCatPanel}
      />
    </>
  );
}
