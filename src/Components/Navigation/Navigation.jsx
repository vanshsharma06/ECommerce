import { useState } from "react";
import { Menu, ExpandMore, RocketLaunch } from "@mui/icons-material";
import CategoryPanel from "./CategoryPanel";

export default function Navigation() {
  const [IsOpenCatPanel, setIsOpenCatPanel] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between shadow bg-white text-black font-sans flex-wrap text-[6px] sm:text-[7px] md:text-[10px] md:py-1 lg:text-[10px] lg:py-1 lg:px-3 xl:text-[13px]">
        {/* Shop by Categories Dropdown Button */}
        <button
          onClick={() => {
            setIsOpenCatPanel(true);
          }} // Drawer Open on Click
          className="flex items-center space-x-1 font-bold px-2 rounded-md active:scale-95 transition-all duration-200 active:bg-gray-200 "
        >
          <div>
            <Menu style={{ fontSize: "16px" }} />
          </div>
          <span>SHOP BY CATEGORIES</span>
          <div className="hidden md:block">
            <ExpandMore style={{ fontSize: "16px" }} />
          </div>
        </button>

        {/* Navigation Links as Buttons */}
        <div className="text-[6px] font-medium flex flex-wrap justify-center sm:text-[8px] md:text-[9px] md:gap-2 lg:text-[11px] xl:text-[13px] lg:gap-4">
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
            .slice(0, 5) // Default (Mobile pe sirf 5 items)
            .concat(
              window.innerWidth >= 640
                ? ["Groceries", "Beauty", "Wellness"]
                : []
            ) // Tablet (sm: 6 items)
            .concat(window.innerWidth >= 1024 ? ["Jewellery"] : []) // Laptop+ (lg: All items)
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
          <RocketLaunch style={{ fontSize: "14px" }} />
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
