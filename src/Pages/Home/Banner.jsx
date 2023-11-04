import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

const Banner = () => {
  return (
    <div className="mb-20">
      <h1 className="text-3xl font-bold text-center">Banner Section</h1>
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[90%] lg:max-w-full"
      >
        <SwiperSlide>
          <img
            className="w-[500px]"
            src="https://i.ibb.co/Sfqs78X/book1.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/wwQ3bKv/book4.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[500px] h-[680px] object-cover"
            src="https://i.ibb.co/89DZs8k/book2.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[456px] h-[640px]"
            src="https://i.ibb.co/hL7X7p8/book3.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
