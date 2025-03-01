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
    <div className="bg-gray-100 py-8">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        {features.map((feature, index) => (
          <div key={index} className="text-center flex flex-col items-center">
            <div className="text-[35px] text-gray-700 mb-2 hover:text-red-500 transition-all duration-700 hover:-translate-y-2">
              {feature.icon}
            </div>
            <h3 className="font-semibold">{feature.title}</h3>
            <p className="text-sm text-gray-500">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
