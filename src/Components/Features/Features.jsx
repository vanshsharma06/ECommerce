import { LiaShippingFastSolid } from "react-icons/lia";
import { PiKeyReturnLight } from "react-icons/pi";
import { BsWallet2 } from "react-icons/bs";
import { GoGift } from "react-icons/go";
import { BiSupport } from "react-icons/bi";

const Features = () => {
  const features = [
    {
      icon: <LiaShippingFastSolid />,
      title: "Free Shipping",
      desc: "For all Orders Over $100",
    },
    {
      icon: <PiKeyReturnLight />,
      title: "30 Days Returns",
      desc: "For an Exchange Product",
    },
    {
      icon: <BsWallet2 />,
      title: "Secured Payment",
      desc: "Payment Cards Accepted",
    },
    {
      icon: <GoGift />,
      title: "Special Gifts",
      desc: "Our First Product Order",
    },
    { icon: <BiSupport />, title: "Support 24/7", desc: "Contact us Anytime" },
  ];

  return (
    <div className="bg-gray-100">
      <div className="container bg-gray-100 py-5 px-auto px-10 sm:px-3 md:px-8 lg:px-29">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        {features.map((feature, index) => (
          <div key={index} className="text-center flex flex-col items-center">
            <div className="text-[12px] sm:text-[17px] lg:text-[26px] text-gray-700 mb-1 hover:text-red-500 transition-all duration-700 hover:-translate-y-1">
              {feature.icon}
            </div>
            <h3 className="font-semibold text-[6px] sm:text-[9px] lg:text-[13px]">{feature.title}</h3>
            <p className="text-[5px] sm:text-[8px] lg:text-[13px] text-gray-500">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Features;
