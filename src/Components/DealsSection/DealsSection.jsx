import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./DealsSection.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const deals = [
  {
    img: "https://res.cloudinary.com/duqoh8gf5/image/upload/v1737030797/1737030796086_banner1.webp",
  },
  {
    img: "https://res.cloudinary.com/duqoh8gf5/image/upload/v1737030816/1737030811455_banner5.webp",
  },
  {
    img: "https://res.cloudinary.com/duqoh8gf5/image/upload/v1737030829/1737030827759_banner2.webp",
  },
  {
    img: "https://res.cloudinary.com/duqoh8gf5/image/upload/v1737030844/1737030841161_banner4.jpg",
  },
  {
    img: "https://res.cloudinary.com/duqoh8gf5/image/upload/v1737030862/1737030857998_banner6.webp",
  },
  {
    img: "https://res.cloudinary.com/duqoh8gf5/image/upload/v1737030875/1737030873864_banner3.webp",
  },
];

const DealsSection = () => {
  return (
    <div className="relative w-full max-w-[1350px] mx-auto py-3 px-3 lg:py-10">
      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        spaceBetween={10}
        slidesPerView={1.3}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="flex items-center"
      >
        {deals.map((deal, index) => (
          <SwiperSlide key={index}>
            <img
              src={deal.img}
              alt={`Deal ${index + 1}`}
              className="w-full h-[180px] rounded-lg object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <button className="prev-btn absolute left-5 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10">
        <ChevronLeft size={20} />
      </button>
      <button className="next-btn absolute right-5 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10">
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default DealsSection;
