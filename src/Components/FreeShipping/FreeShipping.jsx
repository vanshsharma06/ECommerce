import { LiaShippingFastSolid } from "react-icons/lia";

export default function FreeShipping() {
  return (
    <div className="container">
      <div className="flex items-center justify-between bg-white border border-red-400 rounded-lg m-4 p-3 px-5 sm:p-4 sm:px-7 lg:p-5 lg:px-8 w-full max-w-6xl mx-auto">
        <div className="flex items-center gap-2">
          <LiaShippingFastSolid className="text-gray-700 text-[18px] md:text-[25px] lg:text-[27px]" />
          <span className=" text-gray-800 text-[9px] md:text-[12px] lg:text-[15px]">
            FREE SHIPPING
          </span>
        </div>
        <p className="text-gray-600 text-[9px] md:text-[10px] lg:text-[11px]">
          Free Delivery Now On Your First Order and over{" "}
          <span className="font-semibold">$200</span>
        </p>
        <span className="font-bold text-gray-700 text-[9px] md:text-[15px] lg:text-[15px]">
          - Only $200*
        </span>
      </div>
    </div>
  );
}
