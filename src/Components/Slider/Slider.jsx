import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Slider.css";
import { Navigation, Autoplay } from "swiper/modules";
import slide1 from "../../assets/1.jpg"
import slide2 from "../../assets/2.jpg"
import slide3 from "../../assets/3.jpg"
import slide4 from "../../assets/4.jpg"
import slide5 from "../../assets/5.jpg"
export default function Slider() {
  return (
    <>
      <div className="homeSlider py-2 sm:py-3">
        <div className="container">
          <Swiper
            spaceBetween={30}
            navigation={true}
            modules={[Navigation, Autoplay]} // ✅ Autoplay module add
            loop={true} // ✅ Infinite loop enable
            autoplay={{ delay: 2000, disableOnInteraction: false }} // ✅ Auto-slide every 3 sec
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="item rounded-[20px] overflow-hidden">
                <img
                  src={slide1}
                  alt="Slide 1"
                  className="w-full h-[200px] sm:h-auto object-fit"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item rounded-[20px] overflow-hidden">
                <img
                  src={slide2}
                  alt="Slide 2"
                  className="w-full h-[200px] sm:h-auto object-fit"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item rounded-[20px] overflow-hidden">
                <img
                  src={slide3}
                  alt="Slide 3"
                  className="w-full h-[200px] sm:h-auto object-fit"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item rounded-[20px] overflow-hidden">
                <img
                  src={slide4}
                  alt="Slide 4"
                  className="w-full h-[200px] sm:h-auto object-fit"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item rounded-[20px] overflow-hidden">
                <img
                  src={slide5}
                  alt="Slide 5"
                  className="w-full h-[200px] sm:h-auto object-fit"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

