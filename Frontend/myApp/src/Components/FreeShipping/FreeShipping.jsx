import { LiaShippingFastSolid } from "react-icons/lia";

export default function FreeShipping() {
  return (
    <div className="flex items-center justify-between bg-white border border-red-400 rounded-lg m-10 p-5 px-13 w-full max-w-6xl mx-auto">
      <div className="flex items-center gap-2">
        <LiaShippingFastSolid className="text-gray-700 text-[45px]" />
        <span className=" text-gray-800 text-[20px]">FREE SHIPPING</span>
      </div>
      <p className="text-gray-600 text-[17px]">
        Free Delivery Now On Your First Order and over{" "}
        <span className="font-semibold">$200</span>
      </p>
      <span className="font-bold text-gray-700 text-[25px]">- Only $200*</span>
    </div>
  );
}
