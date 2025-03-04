import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Slider.css";
import { Navigation,Autoplay } from "swiper/modules";
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
                  src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1740456281/1740456280463_New_Project_1.jpg"
                  alt="Slide 1"
                   className="w-full h-[200px] sm:h-auto object-fit"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item rounded-[20px] overflow-hidden">
                <img
                  src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1740456330/1740456329368_New_Project_11.jpg"
                  alt="Slide 2"
                   className="w-full h-[200px] sm:h-auto object-fit"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item rounded-[20px] overflow-hidden">
                <img
                  src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1740456309/1740456309257_New_Project_13.jpg"
                  alt="Slide 3"
                   className="w-full h-[200px] sm:h-auto object-fit"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item rounded-[20px] overflow-hidden">
                <img
                  src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1740456330/1740456329368_New_Project_11.jpg"
                  alt="Slide 4"
                   className="w-full h-[200px] sm:h-auto object-fit"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item rounded-[20px] overflow-hidden">
                <img
                  src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1740456309/1740456309257_New_Project_13.jpg"
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
