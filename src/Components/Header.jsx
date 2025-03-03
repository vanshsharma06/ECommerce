import {
  Search,
  FavoriteBorder,
  ShoppingCart,
  SyncAlt,
} from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import photo from "../assets/logo.jpg";

export default function Header() {
  return (
    <>
      {/* -------------------------------------
    header
    ----------------------------------------- */}
      <header>
        <div className="top_box bg-white py-1">
          <div className="mx-auto px-2 max-w-[1500px] flex justify-between py-[4px] text-gray-700 font-sans text-[9px] sm:text-[9101x] sm:px-3 md:text-[10px] lg:text-[11px] xl:text-[13px] md:px-7 md:py-[7px]">
            <div className="col1">
              <div className="text">
                <p>Get up to 50% off new season styles, limited time only</p>
              </div>
            </div>
            <div className="col2 flex">
              <div className="text flex w-full justify-between gap-[7px] sm:gap-[9px] md:gap-[11px] lg:gap-[12px]">
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
     <nav className="flex flex-col items-center px-2 py-3 border bg-white border-t-[1px] border-b-[1px] border-gray-200 sm:px-4 sm:py-1 md:py-2 lg:py-3 lg:px-7">
  {/* Logo & Search Bar Wrapper */}
  <div className="flex w-full justify-between items-center">
    {/* Logo */}
    <div className="flex items-center space-x-2 sm:w-35 md:w-40 lg:w-52">
      <img
        src={photo}
        alt="ClassyShop"
        className="h-8 w-39 sm:h-10 sm:w-25 md:h-7 md:w-27 lg:h-11 lg:w-34"
      />
    </div>

    {/* Icons & Login */}
    <div className="flex items-center sm:space-x-3 gap-2 lg:space-x-5 lg:gap-[4px]">
      <span className="flex justify-center items-center space-x-1 text-gray-700 cursor-pointer lg:gap-[4px]">
        <a className="hover:text-red-500 text-[10px] sm:text-[10px] md:text-[11px] lg:text-[14px]" href="#">
          Login
        </a>
        <p className="text-[12px]">|</p>
        <a className="hover:text-red-500 text-[10px] sm:text-[10px] md:text-[11px] lg:text-[14px]" href="#">
          Register
        </a>
      </span>

      <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
        <Tooltip title="Compare">
          <div className="relative cursor-pointer">
            <SyncAlt className="text-gray-600" sx={{ fontSize: { xs: "20px", sm: "22px", md: "20px", lg: "25px" } }} />
            <span className="absolute -top-1 lg:-top-2 -right-1 bg-red-500 text-white text-[8px] sm:text-[7px] lg:sm:text-[10px] px-1 rounded-full">
              4
            </span>
          </div>
        </Tooltip>

        <Tooltip title="Wishlist">
          <div className="relative cursor-pointer">
            <FavoriteBorder className="text-gray-600" sx={{ fontSize: { xs: "20px", sm: "22px", md: "20px", lg: "25px" } }} />
            <span className="absolute -top-1 lg:-top-2 -right-2 bg-red-500 text-white text-[8px] sm:text-[7px] lg:sm:text-[10px] px-1 rounded-full">
              2
            </span>
          </div>
        </Tooltip>

        <Tooltip title="Cart">
          <div className="relative cursor-pointer">
            <ShoppingCart className="text-gray-600" sx={{ fontSize: { xs: "20px", sm: "22px", md: "20px", lg: "25px" } }} />
            <span className="absolute -top-1 lg:-top-2 -right-2 bg-red-500 text-white text-[8px] sm:text-[7px] lg:sm:text-[10px] px-1 rounded-full">
              4
            </span>
          </div>
        </Tooltip>
      </div>
    </div>
  </div>

  {/* Search Bar (Now Below) */}
  <div className="relative w-full mt-2 sm:w-[90%] md:w-[80%] lg:w-[60%]">
    <input
      type="text"
      placeholder="Search for products..."
      className="w-full bg-gray-200 text-gray-700 px-2 text-[10px] py-2 rounded-[5px] focus:outline-none sm:text-[9px] md:py-2 lg:py-3 lg:text-[13px]"
    />
    <Search className="absolute right-2 top-2 md:top-2 lg:top-[14px] text-gray-500 cursor-pointer" style={{ fontSize: "17px" }} />
  </div>
</nav>

    </>
  );
}
